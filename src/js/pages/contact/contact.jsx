import React from "react";
import "./contact.scss";
import LinkedInIcon from "icons/linkedin-black-icon.svg";
import GithubIcon from "icons/github-black-icon.svg";
import EmailIcon from "icons/e-mail-black-icon.svg";

const Contact = () => {
  return (
    <>
      <h1>Let's talk</h1>
      <section className="footer-icons">
        <a className="linkedin-contact-link" href="https://www.linkedin.com/in/kariholdcroft/">
          <img className="footer-icon linkedin-icon" src={LinkedInIcon} alt="LinkedIn" />
        </a>
        <a className="github-contact-link" href="https://github.com/karihold">
          <img className="footer-icon" src={GithubIcon} alt="Github" />
        </a>
        <a className="email-contact-link" href="https://www.linkedin.com/in/kariholdcroft/">
          <img className="footer-icon email-icon" src={EmailIcon} alt="LinkedIn" />
        </a>
      </section>
    </>
  );
};

export default Contact;
