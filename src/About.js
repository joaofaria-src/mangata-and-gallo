import React from "react";
import companyImage from "./images/store.jpg"; // Image for the company section

function About() {
  return (
    <section className="about-container">
      <div className="pink-containerr">
        <div className="about-content">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Mangata & Gallo was founded with a simple yet profound mission: to craft timeless jewelry that embodies the essence of love and commitment. From our humble beginnings as a small family workshop to becoming a renowned name in the industry, our journey has been driven by passion, dedication, and a relentless pursuit of excellence.
            </p>
            <p>
              At Mangata & Gallo, we believe that every piece of jewelry tells a story – a story of love, devotion, and the beauty of shared moments. That's why each piece in our collection is meticulously crafted by skilled artisans who pour their heart and soul into every detail, ensuring that each creation is a true work of art.
            </p>
            <p>
              As we continue to evolve and grow, our commitment to quality, craftsmanship, and customer satisfaction remains unwavering. We invite you to join us on this journey, as we celebrate the timeless beauty of love through our exquisite jewelry creations.
            </p>
          </div>
          <div className="about-image">
            <img src={companyImage} alt="Company" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;