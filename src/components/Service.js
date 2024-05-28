import React from "react";
import { Link } from "react-router-dom";
import item1Image from "../images/rings.jpg";
import item2Image from "../images/watches.jpg";
import item3Image from "../images/bracelets.jpg";

// Image URLs here
const images = {
  "Symbolize Your Love with Timeless Elegance": item1Image,
  "Elevate Your Special Day with Timeless Beauty": item2Image,
  "Commemorate Your Milestones with Lasting Memories": item3Image
};

// Export the Service component
export default function Service({ title, description, linkTo }) {
  const image = images[title]; // Get the image URL based on the title
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={title} /> {/* Display the service image */}
      <div className="card-body">
        <h5 className="card-title">{title}</h5> {/* Display the service title */}
        <p className="card-text">{description}</p> {/* Display the service description */}
        <Link to={linkTo} className="btn btn-primary">Discover More</Link> {/* Button to learn more about the service */}
      </div>
    </div>
  );
}