import React from "react";
import { useLocation } from "react-router-dom";
import "./footer.scss";
import LinkedInIcon from "icons/linkedin-black-icon.svg";
import GithubIcon from "icons/github-black-icon.svg";
import EmailIcon from "icons/e-mail-black-icon.svg";

const Footer = () => {
  const { pathname } = useLocation();
  const hideFooter = pathname !== "/";

  return hideFooter ? (
    <></>
  ) : (
    <footer>
      <section className="footer-text-section">
        <h3 className="footer-h3">About</h3>
        <p className="footer-p">
          I started coding in 2018, this is a collection of some of my work so far. I am currently working as a Frontend
          Developer with a focus on UI / UX and design @Prevas Norway.
        </p>
      </section>
      <section className="footer-links-section">
        <a className="footer-links">Home</a>
        <a className="footer-links">Contact</a>
        <a className="footer-links">Gallery</a>
      </section>
      <div className="footer-line"></div>
      <section className="footer-icons">
        <a className="linkedin-black-link" href="https://www.linkedin.com/in/kariholdcroft/">
          <img className="footer-icon" src={LinkedInIcon} alt="LinkedIn" />
        </a>
        <a className="github-black-link" href="https://github.com/karihold">
          <img className="footer-icon" src={GithubIcon} alt="Github" />
        </a>
        <a className="email-black-link" href="https://www.linkedin.com/in/kariholdcroft/">
          <img className="footer-icon" src={EmailIcon} alt="LinkedIn" />
        </a>{" "}
        *
      </section>
    </footer>
  );
};

export default Footer;
