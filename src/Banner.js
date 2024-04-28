import React from "react";
import "./banner.css";
import bannerVideo from "./images/rings.mp4";

function Banner() {
  return (
    <div className="banner-container">
      <video className="banner-video" autoPlay loop muted>
        <source src={bannerVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="banner-text">
        <h2 className="text-center mb-4">Discover our <span className="glow-text">new</span> wedding rings</h2>
      </div>
    </div>
  );
}

export default Banner;