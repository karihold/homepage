import React from "react";
import "./timeline.scss";

const TimelineItem = ({ title, subtitle, text }) => (
  <li className="timeline-item">
    <h2 className="timeline-item-title">{title}</h2>
    <p className="timeline-item-subtitle">{subtitle}</p>
    <p className="timeline-item-text">{text}</p>
  </li>
);

const Timeline = ({ items }) => {
  return (
    <ul className="timeline">
      {items.map((item) => (
        <TimelineItem key={`${item.title}-${item.subtitle}`} {...item} />
      ))}
    </ul>
  );
};

export default Timeline;
