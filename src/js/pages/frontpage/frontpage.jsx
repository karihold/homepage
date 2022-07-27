import React from "react";
import { HashLink } from "react-router-hash-link";
import "./frontpage.scss";

import ArtHistoryImage from "images/art-history.jpg";
import ApartmentWebsiteImage from "images/apartment-website.jpg";
import FinancePlatformImage from "images/finance-platform.jpg";
import HolidazeImage from "images/holidaze.jpg";
import RedPepperPizzaImage from "images/red-pepper-pizza.jpg";
import DragonsAndDiceImage from "images/dragonsanddice.jpg";
import SpaceXImage from "images/spacex.jpg";
import WinterickImage from "images/winterick.jpg";
import ScienceMuseumImage from "images/science-museum.jpg";
import DeconestImage from "images/deconest.jpg";

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
        <hr id="frontpage-header-line" />
        <p className="frontpage-title-p">Frontend Developer</p>
      </section>
      <section className="down-arrow-section">
        <HashLink id="down-arrow-icon" smooth to="/#portfolio-project-section">
          <img className="down-arrow-img" src={DownArrowIcon} />
        </HashLink>
      </section>

      <section id="portfolio-project-section">
        <PortfolioArticle
          mainTitle="ART HISTORY APP"
          subheading="UX Prototype"
          year="2022"
          description="Art history app is created based on a UX-design prompt as part of Google UX Design Professional Certificate. The goal was to create an app that appeals to the
            broader public, but also caters to the users who use the gallery the most"
          image={ArtHistoryImage}
          imageAlt="Art history app"
          keywords={["UX-design", "UI-design", "UX-research", "figma", "prototyping"]}
          caseStudy="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://kariholdcroft.com/case-study-art-history-app.pdf"
          prototype="https://www.figma.com/proto/wwYr6TQUnkF26TobuzP4OX/Art-History-App?node-id=155%3A680&scaling=min-zoom&page-id=154%3A127&starting-point-node-id=155%3A680&show-proto-sidebar=1"
        />

        <PortfolioArticle
          mainTitle="APARTMENT WEBSITE"
          subheading="UX Prototype"
          year="2022"
          description="A website for finding apartments in Oslo, Norway. The page was created based on a UX-design prompt as part of Google UX Design Professional Certificate."
          image={ApartmentWebsiteImage}
          imageAlt="apartment-website"
          keywords={["UX-design", "UI-design", "UX-research", "figma", "prototyping", "Adobe Creative Cloud"]}
          caseStudy="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://kariholdcroft.com/case-study-apartment-website.pdf"
          prototype="https://xd.adobe.com/view/40dcb643-22d8-4168-ae1d-54797b616981-158f/?fullscreen"
        />

        <PortfolioArticle
          mainTitle="FINANCE PLATFORM"
          subheading="UX Prototype"
          year="2022"
          description="A cross-platform product created to help tutor adults In financial literacy. The page was created based on a UX-design prompt as part of Google UX Design Professional Certificate."
          image={FinancePlatformImage}
          imageAlt="finance cross-platform service"
          keywords={["UX-design", "UI-design", "UX-research", "figma", "prototyping", "Adobe Creative Cloud"]}
          caseStudy="chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://kariholdcroft.com/case-study-finance-platform.pdf"
          prototype="https://www.figma.com/proto/1daTPctinGH2UrmKaHac08/finance-app?node-id=10%3A271&scaling=min-zoom&page-id=3%3A2&starting-point-node-id=10%3A271&show-proto-sidebar=1"
        />

        <PortfolioArticle
          mainTitle="HOLIDAZE WEBSITE"
          subheading="Website"
          year="2019"
          description="Holidaze is a tourism agency based in Bergen that provides a platform to find local accomodations. This project requires you to create both the visitors side and the administration side. That means there has to be a searchable page where customers can make enquiries, as well as administration tools for the hosts."
          image={HolidazeImage}
          imageAlt="Holidaze tourism"
          keywords={["React", "React Router", "HTML", "SCSS", "React-Hook-Form", "Yup", "Webpack"]}
          website="https://kariholdcroft.com/holidaze/"
        />

        <PortfolioArticle
          mainTitle="DRAGONS AND DICE"
          subheading="Online board game"
          year="2019"
          description="Dragons and Dice is an online board game inspired by George R.R. Martins extremly popular fantasy novels A song of Ice and Fire and the popular television series Game of Thrones. The game is designed to mimic the traditional form of a tabletop boardgame. The goal of the game is to arrive at the end of the board first!"
          image={DragonsAndDiceImage}
          imageAlt="Dragons and Dice"
          keywords={["React", "HTML", "SCSS", "Adobe Creative Cloud"]}
          website="https://kariholdcroft.com/dragonsanddice/"
        />

        <PortfolioArticle
          mainTitle="RED PEPPER PIZZA"
          subheading="Website"
          year="2018"
          description="Red Pepper Pizza is a local italian Pizza Restaurant. The project was to create a website that would fit with their theme and image"
          image={RedPepperPizzaImage}
          imageAlt="Red Pepper Pizza"
          keywords={["React", "React Router", "HTML", "SCSS", "Webpack", "Adobe Creative Cloud"]}
          //website="https://kariholdcroft.com/red-pepper-pizza/"
        />

        <PortfolioArticle
          mainTitle="MISSION TO MARS"
          subheading="Microsite"
          year="2019"
          description="The assigment was to create a microsite designed to prompt users to sign up for the Mission to Mars Newsletter for SpaceX focusing on their mission to get to mars to make life multiplanetary"
          image={SpaceXImage}
          imageAlt="Mission to mars"
          keywords={["React", "HTML", "SCSS", "Adobe Creative Cloud"]}
          website="https://kariholdcroft.com/missiontomars/"
        />

        <PortfolioArticle
          mainTitle="WINTERICK WEBSITE"
          subheading="Sports club"
          year="2018"
          description="The assigment was to create a microsite for SpaceX with the focus on their mission to get to mars to make life multiplanetary. One of my first designs and websites"
          image={WinterickImage}
          imageAlt="Winterick sports club"
          keywords={["HTML", "SCSS", "Adobe Creative Cloud"]}
          website="https://kariholdcroft.com/winterick/"
        />

        <PortfolioArticle
          mainTitle="SCIENCE MUSEUM"
          subheading="Community website"
          year="2018"
          description="Homepage for community homepage. School assigment from my first semester at Noroff, finished in 2018."
          image={ScienceMuseumImage}
          imageAlt="Community science museum"
          keywords={["HTML", "SCSS", "Adobe Creative Cloud"]}
          website="https://kariholdcroft.com/science-museum/"
        />
      </section>
    </>
  );
};

export default Frontpage;
