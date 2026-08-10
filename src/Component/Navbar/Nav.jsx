import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="bg-none flex justify-between px-4 py-6">
        <img src="public/Images/Logo.svg" alt="" className="" />
        <ul className="flex gap-12">
          <li>Home</li>
          <li>Courses</li>
          <li>Pages</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>

        <div className="flex">
          <img src="public/Images/Shop logo.svg" alt="" />
          <div className="flex gap-1">
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
