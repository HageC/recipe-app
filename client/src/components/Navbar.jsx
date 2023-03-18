import React from "react";
import { Outlet } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="nav-container">Navbar</div>
      <Outlet />
    </>
  );
};

export default Navbar;
