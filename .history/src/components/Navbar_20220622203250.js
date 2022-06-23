import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router";

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
          <NavLink
            className={classes["nav-button-special"]}
            onClick={() => clickHandler()}
          >
            about
          </NavLink>
          <NavLink
            className={classes["nav-button-my-profile"]}
            onClick={() => clickHandler()}
          >
            Services
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
