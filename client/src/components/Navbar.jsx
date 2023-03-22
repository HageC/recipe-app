import React from "react";
import { Outlet } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/AppLogo.png" alt="" />
          </div>
          <div className="nav-links">
            <div className="nav-link">Home</div>
            <div className="nav-link">About</div>
            <div className="nav-link">Credits</div>
          </div>
          <div className="nav-register">
            <div className="nav-btns">
              <div className="login-btn">Log in</div>
              <div className="signup-btn">Sign up</div>
            </div>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default Navbar;
