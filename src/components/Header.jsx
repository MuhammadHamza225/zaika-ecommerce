import React from "react";
import logo from "/images/logo.png";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { LiaRetweetSolid } from "react-icons/lia";
import { LiaCartPlusSolid } from "react-icons/lia";
import { AiOutlineUser } from "react-icons/ai";

const Header = () => {
  return (
    <nav className="px-2 py-6 w-full">
      <div className="flex justify-evenly items-center">
        <div className="flex">
          <img src={logo} alt="" />
        </div>
        <div className="text-[18px]">
          <a className="px-6" href="">
            Home
          </a>
          <a className="px-6" href="">
            About
          </a>
          <a className="px-6" href="">
            Products
          </a>
          <a className="px-6" href="">
            Pages
          </a>
          <a className="px-6" href="">
            Blogs
          </a>
          <a className="px-6" href="">
            Contact
          </a>
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
