import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../assets/styles/colors.css"
import logo from '../../assets/Images/logo.png';
import searchIcon from '../../assets/Images/search.png';
import cartIcon from '../../assets/Images/cart.png';
import loginIcon from '../../assets/Images/user.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" p-4 navbar">
      <div className="flex justify-between items-center">
        <div className="flex items-center md:pl-[3rem]">
          <Link to={"/"}>
            <img src={logo} alt="Logo" className="w-[100%] h-[5rem]" />
          </Link>
        </div>
        
        {/* Mobile menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black-500 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              )}
            </svg>
          </button>
        </div>
        <div className="hidden md:flex items-center gap-[4rem] md:mr-[4rem]">
          {/*  search link */}
          <Link to="/search" className="mr-4">
            <img src={searchIcon} alt="Search" className="w-6 h-6 cursor-pointer" />
          </Link>
          {/*  cart link */}
          <Link to="/cart" className="mr-4">
            <img src={cartIcon} alt="Cart" className="w-6 h-6 cursor-pointer" />
          </Link>
          {/*  login link */}
          <Link to="/login" className="flex items-center loginbtn px-4 py-2 rounded-md">
            <img src={loginIcon} alt="Login" className="w-4 h-4 mr-2 md:m-[5px] " />
            Login
          </Link>
        </div>
      </div>
      {/* Mobile menu items */}
      {isOpen && (
        <div className="md:hidden mt-2">
          {/* Same items as desktop */}
          <div className="flex justify-between items-center">
            {/*  search link */}
            <Link to="/search" className="mr-4">
              <img src={searchIcon} alt="Search" className="w-6 h-6 cursor-pointer" />
            </Link>
            {/*  cart link */}
            <Link to="/cart" className="mr-4">
              <img src={cartIcon} alt="Cart" className="w-6 h-6 cursor-pointer" />
            </Link>

            <Link to="/login" className="flex items-center bg-[#FF5C00] text-white px-4 py-2 rounded-md">
              <img src={loginIcon} alt="Login" className="w-4 h-4 mr-2" />
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
