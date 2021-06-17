import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./header.scss";
import Logo from "icons/mylogo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-section">
        <Link className="logo-link" to="/">
          <img className="logo-image" src={Logo} alt="Logo" />
        </Link>
      </div>
      <nav className="header-nav">
        <ul className="nav-ul">
          <li className="nav-item">
            <Link className="nav-item-link" to="/">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <HashLink smooth className="nav-item-link" to="/#portfolio-section">
              PORTFOLIO
            </HashLink>
          </li>
          <li className="nav-item">
            <HashLink smooth className="nav-item-link" to="/#experience-section">
              EXPERIENCE
            </HashLink>
          </li>
          <li className="nav-item">
            <Link className="nav-item-link" to="/contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
