import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SingUp = () => {
  const { register, handleSubmit } = useForm();
  const handleRegister = (data) => {
    console.log(data);
  };
  return (
    <div className="flex justify-center mt-20 ">
      <div className="w-96 rounded-lg shadow-2xl p-6">
        <div>
          <h3 className="text-center text-2xl font-bold my-3 ">Sign Up</h3>
        </div>
        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="form-control w-full mb-3">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input type="text" {...register('fullName')} className="input input-bordered w-full " />
          </div>

          <div className="form-control w-full mb-3">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" {...register('email')} className="input input-bordered w-full " />
          </div>

          <div className="form-control w-full mb-3">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register('password')}
              className="input input-bordered w-full "
            />
            <label className="label">
              <span className="label-text">Forgot Password?</span>
            </label>
          </div>

          <input defaultValue="Sign Up" className="mb-3 btn w-full text-white" type="submit" />
          <p className="text-center">
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
          className="w-full  btn btn-outline hover:bg-primary mb-5 mt-3"
          value="Continue with Google"
          type="submit"
        />
      </div>
    </div>
  );
};

export default SingUp;
