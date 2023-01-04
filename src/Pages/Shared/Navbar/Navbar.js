import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import './Navbar.css';

const Navbar = () => {
  const { logout, user } = useContext(AuthContext);
  const handleLogOut = () => {
    logout()
      .then(() => {
        toast.success('Logout successfully');
      })
      .catch((error) => console.error(error.message));
  };

  const menuList = (
    <>
      <li>
        <NavLink to={'/home'} className="hover:bg-gray-200 hover:text-black">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:bg-gray-200 hover:text-black" to={'/about'}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink className="hover:bg-gray-200 hover:text-black" to={'/appointment'}>
          Appointment
        </NavLink>
      </li>

      <li>
        <NavLink className="hover:bg-gray-200 hover:text-black" to={'/contact'}>
          Contact Us
        </NavLink>
      </li>
      {user?.uid ? (
        <>
          <li>
            <NavLink className="hover:bg-gray-200 hover:text-black" to={'/dashboard'}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <button onClick={handleLogOut} className="hover:bg-gray-200 hover:text-black">
              Log out
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink className="hover:bg-gray-200 hover:text-black" to={'/login'}>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink className="hover:bg-gray-200 hover:text-black" to={'/signup'}>
              Sign Up
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {menuList}
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost normal-case text-xl">
            Doctors Portal
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuList}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
