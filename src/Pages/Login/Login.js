import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  let navigate = useNavigate();
  let location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const handleLogin = (data) => {
    // console.log(data);
    setLoginError('');
    login(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        toast.success('user login successfully');
      })
      .catch((error) => {
        console.error(error.message);
        setLoginError(error.message);
      });
  };

  return (
    <div className=" flex justify-center mt-20 ">
      <div className="shadow-2xl p-5 rounded-lg w-[400px]">
        <h1 className="text-3xl mb-6 text-center">Login</h1>
        <div className="text-center">
          {loginError && <p className="text-red-600">{loginError}</p>}
        </div>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className=" form-control mb-2">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register('email', {
                required: 'Email address is required'
              })}
              className="input input-bordered w-full mb-2"
            />
            {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
          </div>
          <div className="form-control  mb-5 ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 6, message: 'Password must be 6 character longer' }
              })}
              className="input input-bordered w-full "
            />
            {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
            <label className="label">
              <span className="label-text hover:underline ">Forget Password?</span>
            </label>
          </div>

          <button className="w-full  btn btn-primary text-white">Login</button>
          <br />
        </form>
        <label className="flex justify-center my-3 ">
          <span className="label-text  ">
            New to Doctors Portal?{' '}
            <Link className="hover:underline text-secondary" to={'/signup'}>
              Create new account
            </Link>
          </span>
        </label>
        <div className="divider my-3 px-3">OR</div>
        <input
          className="w-full  btn btn-outline hover:bg-primary mb-5 mt-3"
          value="Continue with Google"
          type="submit"
        />
      </div>
    </div>
  );
};

export default Login;
