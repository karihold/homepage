import React from 'react';
import { useLocation } from 'react-router-dom';
import './footer.scss';
import LinkedInIcon from 'icons/linkedin-icon.svg';
//import GithubIcon from 'icons/github-icon.svg';

const Footer = () => {
  const { pathname } = useLocation();
  const hideFooter = pathname !== '/';

  return hideFooter ? (
    <></>
  ) : (
    <footer>
      <div className="footer-icons">
        <a className="linkedin-link" href="https://www.linkedin.com/in/kariholdcroft/">
          <img className="footer-icon" src={LinkedInIcon} alt="LinkedIn" />
        </a>
        {/*   <a className="github-link" href="https://github.com/karihold">
          <img className="footer-icon" src={GithubIcon} alt="Github" />
        </a> */}
        
      </div>
    </footer>
  );
};

export default Footer;
