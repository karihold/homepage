import React from "react";
import { Link } from "react-router-dom";
import "./portfolio-card.scss";

const PortfolioCard = ({ url, image, title }) => {
  const labelId = `portfolio-card-link-${url}`;
  return (
    <Link aria-labelledby={labelId} className="card-link" to={`/portfolio/${url}`}>
      <article className="card">
        <img className="card-thumbnail" src={require(`images/${image.name}`).default} alt={image.alt} />
        <span id={labelId} className="card-title">
          {title}
        </span>
      </article>
    </Link>
  );
};

export default PortfolioCard;
