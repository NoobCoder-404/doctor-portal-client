import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SingUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const handleRegister = (data) => {
    console.log(data);
  };
  return (
    <div className="flex justify-center mt-20 ">
      <div className="w-96 rounded-lg shadow-2xl p-6">
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
              {...register('fullName', { required: 'Name is required' })}
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
          className="w-full  btn btn-outline hover:bg-primary mb-5 mt-3"
          value="Continue with Google"
          type="submit"
        />
      </div>
    </div>
  );
};

export default SingUp;
