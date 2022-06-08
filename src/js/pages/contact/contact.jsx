import React from 'react';

import GreenPageDecoration from 'components/green-page-decoration/green-page-decoration';

import './contact.scss';

const Contact = () => {
  return (
    <>
      <GreenPageDecoration />
      <section className="contact-section">
        <a className="contact-div" href="mailto:holdcroftkari@gmail.com">
          <img className="contact-icon" src={require('icons/message-icon.svg').default} alt="Message icon" />
        </a>

        <a className="contact-div" href="https://www.linkedin.com/in/kariholdcroft">
          <img className="contact-icon" src={require('icons/linkedin-icon.svg').default} alt="LinkedIn icon" />
        </a>

        {/*   <a className="contact-div" href="https://github.com/karihold">
          <img className="contact-icon" src={require("icons/github-icon.svg").default} alt="Github icon" />
        </a> */}
      </section>
    </>
  );
};

export default Contact;
