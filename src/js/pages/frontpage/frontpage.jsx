import React from "react";
import "./frontpage.scss";
import PhoneImage from "images/phone.jpg";

const Frontpage = () => {
  return (
    <>
      <section className="frontpage-title-div">
        <h1 className="frontpage-title-h1">
          Kari <span>Holdcroft</span>
        </h1>
        <p className="frontpage-title-p">Frontend Developer</p>
      </section>
      <section id="portfolio-project-section">
        <article className="portfolio-project-article">
          <h2 className="portfolio-project-h2">ART HISTORY APP</h2>
          <h3 className="portfolio-project-h3">UX Prototype</h3>
          <h4 className="portfolio-project-h4">2022</h4>
          <p className="portfolio-project-p">
            Art history app is created based on a UX-design prompt. The goal was to create an app that appeals to the
            broader public, but also caters to the users who use the gallery the most
          </p>
          <img className="portfolio-project-img" src={PhoneImage} alt="Phone-image" />
          <div className="portfolio-project-button-row">
            <a>CASE STUDY</a>
            <a>PROTOTYPES</a>
          </div>
        </article>
        <article className="portfolio-project-article">
          <h2 className="portfolio-project-h2">ART HISTORY APP</h2>
          <h3 className="portfolio-project-h3">UX Prototype</h3>
          <h4 className="portfolio-project-h4">2022</h4>
          <p className="portfolio-project-p">
            Art history app is created based on a UX-design prompt. The goal was to create an app that appeals to the
            broader public, but also caters to the users who use the gallery the most
          </p>
          <img className="portfolio-project-img" src={PhoneImage} alt="Phone-image" />
          <div className="portfolio-project-button-row">
            <a>CASE STUDY</a>
            <a>PROTOTYPES</a>
          </div>
        </article>
        <article className="portfolio-project-article">
          <h2 className="portfolio-project-h2">ART HISTORY APP</h2>
          <h3 className="portfolio-project-h3">UX Prototype</h3>
          <h4 className="portfolio-project-h4">2022</h4>
          <p className="portfolio-project-p">
            Art history app is created based on a UX-design prompt. The goal was to create an app that appeals to the
            broader public, but also caters to the users who use the gallery the most
          </p>
          <img className="portfolio-project-img" src={PhoneImage} alt="Phone-image" />
          <div className="portfolio-project-button-row">
            <a>CASE STUDY</a>
            <a>PROTOTYPES</a>
          </div>
        </article>
        <article className="portfolio-project-article">
          <h2 className="portfolio-project-h2">ART HISTORY APP</h2>
          <h3 className="portfolio-project-h3">UX Prototype</h3>
          <h4 className="portfolio-project-h4">2022</h4>
          <p className="portfolio-project-p">
            Art history app is created based on a UX-design prompt. The goal was to create an app that appeals to the
            broader public, but also caters to the users who use the gallery the most
          </p>
          <img className="portfolio-project-img" src={PhoneImage} alt="Phone-image" />
          <div className="portfolio-project-button-row">
            <a>CASE STUDY</a>
            <a>PROTOTYPES</a>
          </div>
        </article>
        <article className="portfolio-project-article">
          <h2 className="portfolio-project-h2">ART HISTORY APP</h2>
          <h3 className="portfolio-project-h3">UX Prototype</h3>
          <h4 className="portfolio-project-h4">2022</h4>
          <p className="portfolio-project-p">
            Art history app is created based on a UX-design prompt. The goal was to create an app that appeals to the
            broader public, but also caters to the users who use the gallery the most
          </p>
          <img className="portfolio-project-img" src={PhoneImage} alt="Phone-image" />
          <div className="portfolio-project-button-row">
            <a>CASE STUDY</a>
            <a>PROTOTYPES</a>
          </div>
        </article>
        <article className="portfolio-project-article">
          <h2 className="portfolio-project-h2">ART HISTORY APP</h2>
          <h3 className="portfolio-project-h3">UX Prototype</h3>
          <h4 className="portfolio-project-h4">2022</h4>
          <p className="portfolio-project-p">
            Art history app is created based on a UX-design prompt. The goal was to create an app that appeals to the
            broader public, but also caters to the users who use the gallery the most
          </p>
          <img className="portfolio-project-img" src={PhoneImage} alt="Phone-image" />
          <div className="portfolio-project-button-row">
            <a className="casestudy-button">CASE STUDY</a>
            <a className="prototype-button">PROTOTYPES</a>
          </div>
        </article>
      </section>
    </>
  );
};

export default Frontpage;
