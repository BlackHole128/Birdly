import React from "react";

import { Link, useNavigate } from "react-router-dom";
import Lottie from 'lottie-react'
import Cart from '../../../src/Assets/83034-beaut-loading-cart.json'
import bird from "../../Assets/pix3.png";
import shopping from "../../Assets/shopping-cart.png";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";



const Header = () => {


  const navigate = useNavigate();

  const handleSignOut = () =>
  {
    signOut(auth);
    navigate('/')
  }
  const logAIn = () =>
  {
    navigate('/login')
  }
  // class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600"
  const [ user ] = useAuthState(auth)
  return (
    <nav className="navbar fixed top-0 z-10 w-full bg-white dark:bg-gray-900 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/class">Classification</Link>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case flex text-xl">
          <img src={bird} alt="logo" className="title-icon mr-2" />
          <h2>Birdly</h2>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">

          <li tabIndex={0}>
            <a>
              Parent
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/class">Classification</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>

          <li>
            <Link>Contact Us</Link>

          </li>


          <li>
          </li>
        </ul>
      </div>
      <div className="navbar-end">     

        <Link to="/product" className="btn">Shop now</Link>

       { user ?<button className="btn ml-5" onClick={handleSignOut}>Log Out</button> : <button className="btn ml-5" onClick={logAIn}>Login</button>}

      <Link to='/cart' type="button" class="cart-icon relative inline-flex items-center text-sm font-medium text-center text-white">
        <img src={shopping} alt="logo" className="title-icon ml-2" />
        <span class="inline-flex items-center justify-center w-4 h-4 text-xs p-3 font-bold text-blue-800 bg-blue-200 rounded-full">50</span>
      </Link>

      </div>
    </nav>
  );
};

export default Header;
