import React, { useEffect } from 'react';
import GreenPageDecoration from 'components/green-page-decoration/green-page-decoration';
import PortfolioCard from 'components/portfolio-card/portfolio-card';
import Timeline from 'components/timeline/timeline';
import Typed from 'typed.js';
import timelineData from 'data/timeline.json';
import './frontpage.scss';

const Frontpage = () => {


  return (
    <>
      <section className="frontpage-div">
        <h1 className="frontpage-h1">Kari Holdcroft</h1>
       <p>Frontend Developer</p>
      </section>
      <section id="portfolio-section" className="cards-container-medium">
        <PortfolioCard
          url="art-history-app"
          title="Art History app"
          image={{ name: 'art-history.jpg', alt: 'art history thumbnail' }}
        />
        <PortfolioCard
          url="apartment-website"
          title="Apartement website"
          image={{ name: 'apartment-website.jpg', alt: 'apartment-website' }}
        />
        <PortfolioCard
          url="finance-platform"
          title="Finance Platform"
          image={{ name: 'finance-platform.jpg', alt: 'finance-platform' }}
        />
        <PortfolioCard
          url="holidaze"
          title="Holidaze"
          image={{ name: 'holidaze-screenshot.png', alt: 'Holidaze thumbnail' }}
        />
        <PortfolioCard
          url="red-pepper-pizza"
          title="Red Pepper Pizza"
          image={{ name: 'red-pepper-pizza-screenshot.png', alt: 'Red Pepper Pizza thumbnail' }}
        />
        <PortfolioCard
          url="dragons-and-dice"
          title="Dragons and Dice"
          image={{ name: 'dragonsanddice-screenshot.png', alt: 'Dragons and Dice thumbnail' }}
        />
        <PortfolioCard
          url="holidaze"
          title="Holidaze"
          image={{ name: 'holidaze-screenshot.png', alt: 'Holidaze thumbnail' }}
        />

        <PortfolioCard url="spacex" title="SpaceX" image={{ name: 'spacex-screenshot.png', alt: 'SpaceX thumbnail' }} />
        <PortfolioCard
          url="winterick"
          title="Winterick"
          image={{ name: 'winterick-screenshot.png', alt: 'Winterick thumbnail' }}
        />
        <PortfolioCard
          url="re-cycle"
          title="Re-cycle"
          image={{ name: 're-cycle-screenshot.png', alt: 'Re-cycle thumbnail' }}
        />
        <PortfolioCard
          url="science-museum"
          title="Science Museum"
          image={{ name: 'science-museum-screenshot.png', alt: 'Science Museum thumbnail' }}
        />

        <PortfolioCard
          url="deconest"
          title="DecoNest"
          image={{ name: 'deconest-screenshot.png', alt: 'Deconest thumbnail' }}
        />
      </section>
    </>
  );
};

export default Frontpage;
