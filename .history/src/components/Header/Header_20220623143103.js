import classes from "./Navbar.module.css";
import "./header.scss";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { NavMenu } from "./NavMenu";

export const Header = () => {
  return (
    <nav>
      <div className="header">
        <div className="container">
          <div className="header-top">
            <div className="header-brand">
              <a href="/">
                <img src={logo} alt="" />
              </a>
            </div>
            <NavMenu />
            <button className="header-button">
              <NavLink className="nav-item" to="/contacts">
                Contact
              </NavLink>
            </button>
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
