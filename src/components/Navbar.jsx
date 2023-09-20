// import React from "react";
import { logo } from "../assets";

const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
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
          <a href="#Clients">Clients</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
