import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./header.scss";

const Header = () => {
  return (
    <header className="header">
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
          <li className="nav-item">
            <Link className="nav-item-link" to="/contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <p className="darkmode-indicator">Darkmode</p>
      </div>
    </header>
  );
};

export default Header;
