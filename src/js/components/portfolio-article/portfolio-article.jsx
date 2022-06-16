import React from "react";
import PortfolioSectionIllustration from "assets/illustrations/portfolio-section-illustration.svg";
import "./portfolio-article.scss";

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
      <h2 className="portfolio-project-h2">{mainTitle}</h2>
      <h3 className="portfolio-project-h3">{subheading}</h3>
      <h4 className="portfolio-project-h4">{year}</h4>
      <ul className="portfolio-project-keywords">
        {keywords.map((keyword) => (
          <li className="portofolio-project-keyword">{keyword}</li>
        ))}
      </ul>
      <p className="portfolio-project-p">{description}</p>
      <img className="portfolio-project-img" src={image} alt={imageAlt} />
      <div className="portfolio-project-button-row">
        {website && <a href={website}>Website</a>}
        {caseStudy && <a href={caseStudy}>Case study</a>}
        {prototype && <a href={prototype}>Prototype</a>}
        {github && <a href={github}>Github</a>}
      </div>
      <img className="portfolio-article-illustration" src={PortfolioSectionIllustration} />
    </article>
  );
};

export default PortfolioArticle;
