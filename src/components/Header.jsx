import React, { useState, useRef } from "react";
import logo from "/images/logo.png";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { LiaRetweetSolid } from "react-icons/lia";
import { LiaCartPlusSolid } from "react-icons/lia";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const [isPageOpen, setIsPageOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const pageTimeoutRef = useRef(null);
  const accountTimeOutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(pageTimeoutRef.current);
    setIsPageOpen(true);
  };

  const handleMouseLeave = () => {
    pageTimeoutRef.current = setTimeout(() => {
      setIsPageOpen(false);
    }, 200); // 200ms delay before closing
  };

  const handleAccountEnter = () => {
    clearTimeout(accountTimeOutRef.current);
    setIsAccountOpen(true);
  };

  const handleAccountLeave = () => {
    accountTimeOutRef.current = setTimeout(() => {
      setIsAccountOpen(false);
    }, 200);
  };

  return (
    <nav className="px-2 py-6 w-full relative bg-white shadow">
      <div className="flex justify-evenly items-center">
        <div className="flex">
          <img src={logo} alt="" />
        </div>
        <div className="text-[18px] relative flex items-center space-x-6">
          <Link to="/" className="px-6">
            Home
          </Link>
          <Link to="/about" className="px-6">
            About
          </Link>
          <a className="px-6" href="">
            Products
          </a>
          <div
            className="relative px-2"
            onMouseOver={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="px-6">
              Pages <span className="text-[10px] ">▼</span>
            </button>
            {isPageOpen && (
              <div className="absolute top-full mt-3 w-52 bg-white shadow-lg border-white z-50 text-left text-gray-800 text-sm">
                <Link
                  to="/terms"
                  className="block px-6 py-3 hover:bg-[#ff695c] border-b-1 border-gray-300"
                >
                  Terms & Conditions
                </Link>
                <Link
                  to="/privacy"
                  className="block px-6 py-3 hover:bg-[#ff695c] border-b-1 border-gray-300"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/faq"
                  className="block px-6 py-3 hover:bg-[#ff695c] border-b-4 border-[#ff695c]"
                >
                  FAQ
                </Link>
              </div>
            )}
          </div>
          <Link to="/blog" className="px-6">
            Blogs
          </Link>
          <Link to="/contact" className="px-6">
            Contact
          </Link>
        </div>
        <div className="flex gap-x-5 text-[20px]">
          <span className="">
            <CiSearch />
          </span>
          <span>
            <LiaRetweetSolid />
          </span>
          <span>
            <CiHeart />
          </span>

          <button>
            <LiaCartPlusSolid />
          </button>
        </div>
        <div
          className="relative px-2"
          onMouseOver={handleAccountEnter}
          onMouseLeave={handleAccountLeave}
        >
          <div className="flex">
            ACCOUNT
            <div className="py-1 px-3">
              <AiOutlineUser />
            </div>
          </div>
          {isAccountOpen && (
            <div className="absolute left-[-80px] top-[53px] mt-3 w-48 bg-white shadow-lg border-white z-50 text-left text-gray-800 text-sm mr-30">
              <Link className="block px-6 py-3 hover:bg-[#ff695c] border-b-1 border-gray-300">
                Login
              </Link>
              <Link className="block px-6 py-3 hover:bg-[#ff695c] border-b-4 border-[#ff695c]">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;

