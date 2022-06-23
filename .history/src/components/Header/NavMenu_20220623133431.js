import React from "react";
import "./navHeader.scss";

export const NavHeader = () => {
  return (
    <div className="nav">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#" className="nav-link">
            <h3 className="nav-title">About</h3>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <h3 className="nav-title">Services</h3>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <h3 className="nav-title">Pricing</h3>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <h3 className="nav-title">Blog</h3>
          </a>
        </li>
      </ul>
    </div>
  );
};
