import React from "react";

export const Card = ({ image, text }) => (
  <div className="card">
    <img src={image} alt={text} />
    <div className="text">{text}</div>
  </div>
);
