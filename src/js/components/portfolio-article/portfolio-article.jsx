import React from "react";
import PortfolioSectionIllustration from "illustrations/portfolio-section-illustration.svg";
import "./portfolio-article.scss";

import WebsiteIcon from "icons/website-icon.svg";
import CasestudyIcon from "icons/casestudy-icon.svg";
import GithubIcon from "icons/github-icon.svg";
import PrototypeIcon from "icons/prototype-icon.svg";

const PortfolioArticle = ({
  mainTitle,
  subheading,
  year,
  description,
  image,
  imageAlt,
  keywords,
  website,
  caseStudy,
  prototype,
  github,
}) => {
  return (
    <article className="portfolio-project-article">
      <div className="portfolio-project-header-and-keywords">
        <section className="portfolio-project-header">
          <h2 className="portfolio-project-h2">{mainTitle}</h2>
          <hr className="portfolio-line" />
          <section className="portfolio-project-subheaders">
            <h3 className="portfolio-project-h3">{subheading}</h3>
            <h3 className="portfolio-project-h4">{year}</h3>
          </section>
        </section>
        <ul className="portfolio-project-keywords">
          {keywords.map((keyword) => (
            <li className="portofolio-project-keyword">{keyword}</li>
          ))}
        </ul>
      </div>

      <p className="portfolio-project-p">{description}</p>
      <img className="portfolio-project-img" src={image} alt={imageAlt} />
      <div className="portfolio-project-button-row">
        {website && (
          <a className="portofolio-project-icons-a" href={website}>
            <img className="website-icon" src={WebsiteIcon} />
            Website
          </a>
        )}
        {caseStudy && (
          <a className="portofolio-project-icons-a" href={caseStudy}>
            {" "}
            <img className="casestudy-icon" src={CasestudyIcon} />
            Case study
          </a>
        )}
        {prototype && (
          <a className="portofolio-project-icons-a" href={prototype}>
            {" "}
            <img className="prototype-icon" src={PrototypeIcon} />
            Prototype
          </a>
        )}
        {github && (
          <a className="portofolio-project-icons-a" href={github}>
            {" "}
            <img className="github-icon" src={GithubIcon} />
            Github
          </a>
        )}
      </div>
      <img className="portfolio-article-illustration" src={PortfolioSectionIllustration} />
    </article>
  );
};

export default PortfolioArticle;
