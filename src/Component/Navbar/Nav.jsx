import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className=" flex justify-between px-4 py-6 items-center fixed left-0 right-0 z-50 text-white">
        <img src="public/Images/Logo.svg" alt="" className="" />
        <ul className="flex gap-12 cursor-pointer">
          <li>Home</li>
          <li>Courses</li>
          <li>Pages</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>

        <div className="flex gap-14">
          <span className="absolute right-[11.4rem] bg-yellow-600 flex items-center justify-center w-5 h-5 rounded-full">
            0
          </span>
          <img src="public/Images/Shop logo.svg" alt="" />
          <div className="flex gap-2 text-md font-normal font-outfit tracking-wide">
            <Link to="/login">Login</Link>
            <span>|</span>
            <Link to="/register">Register</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
