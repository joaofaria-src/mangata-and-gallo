import React from "react";
import { Link } from "react-router-dom";
import item1Image from "../images/rings.jpg";
import item2Image from "../images/watches.jpg";
import item3Image from "../images/bracelets.jpg";
import "./service.css";

const images = {
  "Symbolize Your Love with Timeless Elegance": item1Image,
  "Elevate Your Special Day with Timeless Beauty": item2Image,
  "Commemorate Your Milestones with Lasting Memories": item3Image
};

export default function Service({ title, description, linkTo }) {
  const image = images[title];
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <Link to={linkTo} className="btn btn-primary">Discover More</Link>
      </div>
    </div>
  );
}