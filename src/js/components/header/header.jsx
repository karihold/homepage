import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
      <HashLink smooth className="darkmode-indicator" to="">
        DARKMODE
      </HashLink>

      <nav className="header-nav">
        <ul className="nav-ul">
          <li className="nav-item">
            <Link className="nav-item-link" to="/">
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <HashLink smooth className="nav-item-link" to="/#portfolio-project-section">
              PORTFOLIO
            </HashLink>
          </li>
          <li className="nav-item contact-nav">
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
