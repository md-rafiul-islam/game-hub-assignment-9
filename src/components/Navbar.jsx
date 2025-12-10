import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <NavLink className="font-semibold" to="/">
        Home
      </NavLink>
      <NavLink className="font-semibold" to="/all-games">
        Apps
      </NavLink>
    </>
  );

  return (
    <div className="navbar bg-black shadow-sm ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow "
          >
            {links}
          </ul>
        </div>
        <Link className="font-bold text-3xl ml-3" to="/">
          GameHub
        </Link>
      </div>
      <div className="navbar-end  space-x-2">
        <ul className="menu hidden lg:flex menu-horizontal px-1 space-x-2">
          {links}
        </ul>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
