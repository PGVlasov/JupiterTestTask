import classes from "./Navbar.module.css";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/notReady");
  };

  return (
    <nav>
      <div className={classes["navbar"]}>
        <div className={classes["button-wrap"]}>
          <NavLink className={classes["nav-link"]} to="/notReady">
            about
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
        <div className={classes["navbar-header"]}>
          <NavLink to="/" className={classes["nav-link"]}>
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
