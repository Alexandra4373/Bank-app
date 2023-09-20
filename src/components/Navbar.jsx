// import React from "react";
import { logo } from "../assets";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 w-full flex py-6 justify-between items-center navbar pl-10">
      <img src={logo} alt="hoobank" className="w-32 h-8]" />

      <ul className=" text-white list-none sm:flex hidden justify-end items-center flex-1 gap-10 px-40 cursor-pointer  ">
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#About Us">About Us</a>
        </li>
        <li>
          <a href="#Features">Features</a>
        </li>
        <li>
          <a href="#Solution">Solution</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
