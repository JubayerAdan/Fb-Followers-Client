"use client";
import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaGem } from "react-icons/fa6";

const Navbar = () => {
  const horizontal = (
    <ul className="menu menu-horizontal px-1">
      <li className="text-lg">
        <Link href={"shop"}>
          Shop <FaShoppingCart className="text-secondary"></FaShoppingCart>
        </Link>
      </li>
    </ul>
  );

  const vertical = (
    <ul
      tabIndex={0}
      className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
    >
      <li className="text-lg">
        <Link href={"shop"}>
          Shop <FaShoppingCart className="text-secondary"></FaShoppingCart>
        </Link>
      </li>
    </ul>
  );
  return (
    <div className="navbar bg-base-100">
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
          {vertical}
        </div>
        <a className="btn btn-ghost text-xl font-serif">Fb followers</a>
      </div>
      <div className="navbar-center hidden lg:flex">{horizontal}</div>
      <div className="navbar-end">
        <button className="btn">
          <span className="text-lg">
            {Number(localStorage.getItem("gems"))}
          </span>{" "}
          <FaGem className="text-xl text-secondary"></FaGem>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
