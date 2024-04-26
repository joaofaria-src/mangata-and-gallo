import React from "react";
import aboutImage from "./images/artisan.jpg"; // Import an image for the About section

function About() {
  return (
    <section className="about-container">
      <div className="about-content">
        <h1>About Us</h1>
        <img src={aboutImage} alt="About" className="about-image" /> {/* Use an img element */}
        <p>
          At Mangata & Gallo, we are passionate about crafting timeless jewelry
          that celebrates love and commitment. With years of experience and
          dedication to our craft, we strive to create pieces that symbolize the
          most precious moments in your life.
        </p>
        <p>
          Our team of skilled artisans meticulously designs and creates each
          piece, ensuring the highest quality and attention to detail. Whether
          you're looking for the perfect engagement ring, wedding band, or
          anniversary gift, we're here to help you find something truly special
          that reflects your unique story.
        </p>
        <p>
          Visit us today to explore our exquisite collection and begin your
          journey with Mangata & Gallo.
        </p>
        <a href="/collection" className="cta-button">Explore Our Collection</a> {/* Add a call-to-action button */}
      </div>
    </section>
  );
}

export default About;