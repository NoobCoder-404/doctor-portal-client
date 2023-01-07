import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const SingUp = () => {
  const { createUser, profileUpdate, googleLogin } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState('');

  let navigate = useNavigate();
  let location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const handleRegister = (data) => {
    //console.log(data);
    setSignUpError('');
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        toast.success('user created successfull');

        const userInfo = {
          displayName: data.name
        };

        profileUpdate(userInfo)
          .then(() => {
            console.log('name update');
          })
          .catch((error) => console.error(error.message));
      })
      .catch((error) => {
        console.error(error.message);
        setSignUpError(error.message);
      });
  };

  const handleGoogleSignUp = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        toast.success('google sign up successfull');
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error.message));
  };

  return (
    <div className="flex justify-center mt-20 ">
      <div className="w-[400px] rounded-lg shadow-2xl p-6">
        <div>
          <h3 className="text-3xl mb-6 text-center my-3 ">Sign Up</h3>
        </div>
        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="form-control w-full mb-3">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              {...register('name', { required: 'Name is required' })}
              className="input input-bordered w-full "
            />
          </div>

          <div className="form-control w-full mb-3">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register('email', {
                required: 'Email is required'
              })}
              className="input input-bordered w-full "
            />
            {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
          </div>

          <div className="form-control w-full mb-3">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'password must be 6 character or long'
                },
                pattern: {
                  value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
                  message: 'password must be strong'
                }
              })}
              className="input input-bordered w-full "
            />
            {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
            <label className="label">
              <span className="label-text">Forgot Password?</span>
            </label>
          </div>

          <button className="w-full  btn btn-primary text-white">Sign Up</button>
          {signUpError && <p className="text-red-600 text-center">{signUpError}</p>}
          <p className="text-center my-3">
            <span>
              Already have an account?{' '}
              <Link className="text-secondary hover:underline" to={'/login'}>
                Login
              </Link>
            </span>
          </p>
        </form>
        <div className="divider ">OR</div>
        <input
          onClick={handleGoogleSignUp}
          className="w-full  btn btn-outline hover:bg-primary mb-5 mt-3"
          value="Continue with Google"
          type="submit"
        />
      </div>
    </div>
  );
};

export default SingUp;
