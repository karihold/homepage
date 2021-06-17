import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import portfolioPages from "data/portfolio.json";
import "./portfolio.scss";
import GithubIcon from "icons/github-icon.svg";
import WebsiteIcon from "icons/website-icon.svg";

const Portfolio = () => {
  const { page } = useParams();

  if (!(page in portfolioPages))
    return (
      <p className="portfolio-page-error">
        Page <em>"{page}"</em> not found -
        <HashLink smooth to="/#portfolio-section">
          Back to portfolio
        </HashLink>
      </p>
    );

  const { title, keywords, description, image, links } = portfolioPages[page];

  useEffect(() => {
    const main = document.querySelector("main");
    main.classList.add("portfolio-main");

    return () => main.classList.remove("portfolio-main");
  }, []);

  return (
    <>
      <div className="portfolio-background"></div>
      <div className="portfolio-flex">
        <section className="portfolio-text">
          <h1 className="portfolio-page-title">{title}</h1>
          <ul className="portfolio-page-ul">
            {keywords.map((keyword) => (
              <li className="portfolio-keyword" key={keyword}>
                {keyword}
              </li>
            ))}
          </ul>
          <p className="portofolio-description">{description}</p>
          <div className="portfolio-icons">
            <a className="portfolio-link" href={links.website}>
              <img className="portfolio-icon" src={WebsiteIcon} alt="website icon" />
            </a>
            {links.github && (
              <a className="portfolio-link" href={links.github}>
                <img className="portfolio-icon" src={GithubIcon} alt="Github" />
              </a>
            )}
          </div>
        </section>
        <img className="portfolio-image" src={require(`images/${image.name}`).default} alt={image.alt} />
      </div>
    </>
  );
};

export default Portfolio;
