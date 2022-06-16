import React from "react";
import { HashLink } from "react-router-hash-link";
import "./frontpage.scss";
import PhoneImage from "images/phone.jpg";
import FrontpageIllustration from "assets/illustrations/frontpage-illustration.svg";
import DownArrowIcon from "assets/icons/down-arrow-icon.svg";

import PortfolioArticle from "components/portfolio-article/portfolio-article";
const Frontpage = () => {
  return (
    <>
      <img id="frontpage-illustration" src={FrontpageIllustration} />
      <section className="frontpage-title-div">
        <h1 className="frontpage-title-h1">
          Kari <span>Holdcroft</span>
        </h1>
        <p className="frontpage-title-p">Frontend Developer</p>
      </section>
      <HashLink id="down-arrow-icon" smooth to="/#portfolio-project-section">
        <img src={DownArrowIcon} />
      </HashLink>
      <section id="portfolio-project-section">
        <PortfolioArticle
          mainTitle="ART HISTORY APP"
          subheading="UX Prototype"
          year="2022"
          description="Art history app is created based on a UX-design prompt. The goal was to create an app that appeals to the
            broader public, but also caters to the users who use the gallery the most"
          image={PhoneImage}
          imageAlt="Art history app"
          keywords={["kake", "bake"]}
          caseStudy="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://kariholdcroft.com/case-study-art-history-app.pdf"
          prototype="https://www.figma.com/proto/wwYr6TQUnkF26TobuzP4OX/Art-History-App?node-id=155%3A680&scaling=min-zoom&page-id=154%3A127&starting-point-node-id=155%3A680&show-proto-sidebar=1"
        />
      </section>
    </>
  );
};

export default Frontpage;
