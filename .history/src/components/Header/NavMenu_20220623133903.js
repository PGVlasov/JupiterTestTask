import React from "react";
import { NavLink } from "react-router-dom";
import "./navHeader.scss";

export const NavHeader = () => {
  return (
    <div className="nav">
      <div className="nav-list">
        < NavLink className="nav-item" to="/notReady>
         
            <h3 className="nav-title">About</h3>
          
        </NavLink>
        < NavLink className="nav-item" to="/notReady>
            <h3 className="nav-title">Services</h3>
        
            </NavLink>
            < NavLink className="nav-item" to="/notReady>
          
            <h3 className="nav-title">Pricing</h3>
    
            </NavLink>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <h3 className="nav-title">Blog</h3>
          </a>
        </li>
      </div>
    </div>
  );
};

<div className={classes["links-wrap"]}>
<NavLink className={classes["nav-link"]} to="/notReady">
  About
</NavLink>
<NavLink className={classes["nav-link"]} to="/notReady">
  Services
</NavLink>
<NavLink className={classes["nav-link"]} to="/notReady">
  Pricing
</NavLink>
<NavLink className={classes["nav-link"]} to="/notReady">
  Blog
</NavLink>
</div>
