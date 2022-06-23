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
                <span className="nav-link"> Contact</span>
              </NavLink>
            </button>
          </div>
        </div>
        <div className="navbar-footer">
          <h2> Portfolio</h2>
          <p className="p">
            Agency provides a full service range including technical skills,
            design, business understanding
          </p>
        </div>
      </div>
    </nav>
  );
};
