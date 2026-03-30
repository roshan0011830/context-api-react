import React from 'react'
import "./Navbar.css"

import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className="Navbar-outer bg-amber-500 px-10">
      <div className="Navbar-inner flex justify-between items-center py-5">
        <h1>logo</h1>
        <div className="nav-links flex gap-10 ">
          <NavLink
            className={({ isActive }) => {
              return (isActive ? "active" : null);
            }}
            to={"/"}
          >
            Home
          </NavLink>

          <NavLink
            className={({isActive}) => {
              return (isActive ? "active" : null);
            }}
            to={"/products"}
          >
            Products
          </NavLink>

          <NavLink className={({isActive}) => {
            return (isActive ? "active" : null);
          }} to={"/about"}>
            About
          </NavLink>
        </div>
        <button>Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar
