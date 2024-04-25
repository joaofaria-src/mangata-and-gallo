import React from "react";
import item1Image from "./images/p1.jpg";
import item2Image from "./images/p2.jpg";
import item3Image from "./images/p3.jpg";

// Define the image URLs here
const images = {
  "Symbolize Your Love with Timeless Elegance": item1Image,
  "Elevate Your Special Day with Timeless Beauty": item2Image,
  "Commemorate Your Milestones with Lasting Memories": item3Image
};

// Export the Service component
export default function Service({ title, description }) {
  const image = images[title];
  return (
    <div className="item">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}