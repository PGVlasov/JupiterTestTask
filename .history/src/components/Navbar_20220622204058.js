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
        <div className={classes["navbar-header"]}>
          <NavLink to="/" className={classes["nav-link"]}>
            POST VIEWING
          </NavLink>
        </div>
        <div className={classes["button-wrap"]}>
          <NavLink className={classes["nav-button-special"]} to="/notReady">
            about
          </NavLink>
          <NavLink className={classes["nav-button-special"]} to="/notReady">
            Services
          </NavLink>
          <NavLink className={classes["nav-button-special"]} to="/notReady">
            Pricing
          </NavLink>
          <NavLink className={classes["nav-button-special"]} to="/notReady">
            Blog
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
