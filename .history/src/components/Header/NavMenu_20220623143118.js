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
