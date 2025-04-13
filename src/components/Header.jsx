import React from "react";
import logo from "/images/logo.png";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { LiaRetweetSolid } from "react-icons/lia";
import { LiaCartPlusSolid } from "react-icons/lia";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="px-2 py-6 w-full">
      <div className="flex justify-evenly items-center">
        <div className="flex">
          <img src={logo} alt="" />
        </div>
        <div className="text-[18px]">
          <Link to='/' className="px-6" >
            Home
          </Link>
          <Link to='/about'className="px-6">
            About
          </Link>
          <a className="px-6" href="">
            Products
          </a>
          <a className="px-6" href="">
            Pages
          </a>
          <Link to='/blog' className="px-6">
            Blogs
          </Link>
          <Link to='/contact' className="px-6">
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
          <span>
            <LiaCartPlusSolid />
          </span>
        </div>
        <div className="flex">
          ACCOUNT
         <div className="py-1 px-3"><AiOutlineUser /></div> 
        </div>
      </div>
    </nav>
  );
};

export default Header;
