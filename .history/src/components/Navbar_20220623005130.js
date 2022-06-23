import classes from "./Navbar.module.css";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export const Navbar = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/notReady");
  };

  return (
    <nav>
      <div className={classes["navbar"]}>
        <div>
          <img src={logo} alt="" />
          <NavLink className={classes["nav-link"]} to="/notReady">
            About
          </NavLink>
        </div>
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
        <div className={classes["navbar-footer"]}>
          <NavLink to="/" className={classes["nav-h1"]}>
            Portfolio
          </NavLink>
          <span className={classes["span"]}>
            Agency provides a full service range including technical skills,
            design, business understanding
          </span>
        </div>
      </div>
    </nav>
  );
};