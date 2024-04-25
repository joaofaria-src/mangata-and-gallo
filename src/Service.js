import React from "react";

function Service({ title, imageUrl, description }) {
  return (
    <div className="service">
      <img src={imageUrl} alt={title} /> 
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Service;