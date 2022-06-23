import { NavLink } from "react-router-dom";
import "./main.scss";

export const BodyNavigation = () => {
  return (
    <div className="main-nav">
      <div className="main-nav-body">
        <div className="main-nav-list">
          <NavLink className="main-nav-item" to="/">
            <span className="main-nav-link">Show All</span>
          </NavLink>
          <NavLink className="nav-item" to="/disign">
            <span className="main-nav-link">Design</span>
          </NavLink>
          <NavLink className="nav-item" to="/branding">
            <span className="main-nav-link">Branding</span>
          </NavLink>
          <NavLink className="main-nav-item" to="/illustration">
            <span className="main-nav-link">Illustration</span>
          </NavLink>
          <NavLink className="nav-item" to="/motion">
            <span className="main-nav-link">Motion</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

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
</div>;
