import React from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";

export const NavMenu = () => {
  return (
    <div className="nav">
      <div className="nav-list">
        <NavLink className="nav-item" to="/notReady">
          <span className="nav-link">About</span>
        </NavLink>
        <NavLink className="nav-item" to="/notReady">
          <span className="nav-link"> Services</span>
        </NavLink>
        <NavLink className="nav-item" to="/notReady">
          <span className="nav-link">Pricing</span>
        </NavLink>
        <NavLink className="nav-item" to="/notReady">
          <span className="nav-link"> Blog</span>
        </NavLink>
      </div>
    </div>
  );
};

// <div className={classes["links-wrap"]}>
// <NavLink className={classes["nav-link"]} to="/notReady">
//   About
// </NavLink>
// <NavLink className={classes["nav-link"]} to="/notReady">
//   Services
// </NavLink>
// <NavLink className={classes["nav-link"]} to="/notReady">
//   Pricing
// </NavLink>
// <NavLink className={classes["nav-link"]} to="/notReady">
//   Blog
// </NavLink>
// </div>
