import React from "react";
import item1Image from "./images/p1.jpg";
import item2Image from "./images/p2.jpg";
import item3Image from "./images/p3.jpg";

// Image URLs here
const images = {
  "Symbolize Your Love with Timeless Elegance": item1Image, // Image for the first service
  "Elevate Your Special Day with Timeless Beauty": item2Image, // Image for the second service
  "Commemorate Your Milestones with Lasting Memories": item3Image // Image for the third service
};

// Export the Service component
export default function Service({ title, description }) {
  const image = images[title]; // Get the image URL based on the title
  return (
    <div className="card"> 
      <img src={image} className="card-img-top" alt={title} /> {/* Display the service image */}
      <div className="card-body">
        <h5 className="card-title">{title}</h5> {/* Display the service title */}
        <p className="card-text">{description}</p> {/* Display the service description */}
        <a href="#" className="btn btn-primary">Learn More</a> {/* Button to learn more about the service */}
      </div>
    </div>
  );
}