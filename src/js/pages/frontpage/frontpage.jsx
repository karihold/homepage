import React, { useEffect } from 'react';
import GreenPageDecoration from 'components/green-page-decoration/green-page-decoration';
import PortfolioCard from 'components/portfolio-card/portfolio-card';
import Timeline from 'components/timeline/timeline';
import Typed from 'typed.js';
import timelineData from 'data/timeline.json';
import './frontpage.scss';

const Frontpage = () => {
  useEffect(() => {
    new Typed('#typed-text', {
      strings: ['UX-designer', 'UX-developer', 'Web-developer', 'Frontend developer', 'Frontend developer.'],
      startDelay: 50,
      typeSpeed: 60,
      backSpeed: 50,
      backDelay: 1000,
      smartBackspace: true,
      onComplete: (typewriter) => {
        const cursor = typewriter.cursor;
        const typedText = cursor.parentElement;
        typedText.removeChild(cursor);
      },
    });
  }, []);

  return (
    <>
      <GreenPageDecoration />
      <section className="frontpage-div">
        <h1 className="frontpage-h1">Kari Holdcroft</h1>
        <p className="frontpage-typed-text-p">
          <span id="typed-text"></span>
        </p>
      </section>
      <section className="description-frontpage">
        <div className="description-bg"> </div>
        <p className="frontpage-p">
          I started coding in 2018, this is a collection of some of my work so far. I am currently working as a Frontend
          Developer with a focus on UI / UX and design @Prevas Norway. I mostly work with HTML5, CSS3 and React.js. I
          currently use Sass as a pre-processor and typescript when working with JavaScript.
        </p>
      </section>
      <h2 className="portfolio-title">PORTFOLIO</h2>
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
      <h2 className="portfolio-title">RESUME</h2>
      <section id="experience-section" className="timeline-section">
        <Timeline items={timelineData} />
      </section>
    </>
  );
};

export default Frontpage;
