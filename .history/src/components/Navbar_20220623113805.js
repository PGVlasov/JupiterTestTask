import classes from "./Navbar.module.css";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import logo3 from "../assets/logo3.png";

export const Navbar = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/notReady");
  };

  return (
    <nav>
      <div className={classes["navbar"]}>
        <div className={classes["top-container"]}>
          <div className={classes["logo-container"]}>
            <img src={logo3} alt="" />
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
          <div className={classes["contact-container"]}>
            <NavLink className={classes["nav-link-contact"]} to="/notReady">
              Contact
            </NavLink>
          </div>
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
