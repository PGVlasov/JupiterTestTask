import React from "react";
import { NavLink } from "react-router-dom";
import "./navHeader.scss";

export const NavMenu = () => {
  return (
    <div className="nav">
      <div className="nav-list">
        <NavLink className="nav-item" to="/notReady">
          About
        </NavLink>
        <NavLink className="nav-item" to="/notReady">
          Services
        </NavLink>
        <NavLink className="nav-item" to="/notReady">
          <h3 className="nav-title">Pricing</h3>
        </NavLink>
        <NavLink className="nav-item" to="/notReady">
          Blog
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
