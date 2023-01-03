import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState('');
  return (
    <div className=" flex justify-center mt-20 ">
      <div className="shadow-2xl p-5 rounded-lg">
        <h1 className="text-3xl mb-6 text-center">Login</h1>
        <form
          className=" font-semibold"
          onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          <div className="form-control w-96 mb-2 font-semibold">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="email"
              {...register('email')}
              className="input input-bordered w-full  mb-2"
            />
          </div>
          <div className="form-control w-96 mb-5">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register('password')}
              className="input input-bordered w-full "
            />
            <label className="label">
              <span className="label-text hover:underline ">Forget Password?</span>
            </label>
          </div>

          <p>{data}</p>
          <input className="w-96 btn bg-primary text-white" value="Login" type="submit" />
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
          className="w-96  btn btn-outline hover:bg-primary mb-5 mt-3"
          value="Continue with Google"
          type="submit"
        />
      </div>
    </div>
  );
};

export default Login;
