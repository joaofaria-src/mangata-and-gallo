import React from "react";

import craftsmanshipImage from "./images/artisan.jpg"; // Image for the craftsmanship section

function About() {
  return (
    <section className="about-container">
      {/* Company Description */}
      <div className="about-content about-company">
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
          <img src="#" alt="Company" />
        </div>
      </div>

      {/* Work Description */}
      <div className="about-content about-craftsmanship">
        <div className="about-image">
          <img src={craftsmanshipImage} alt="Craftsmanship" />
        </div>
        <div className="about-text">
          <h2>Our Craftsmanship</h2>
          <p>
            At Mangata & Gallo, we take immense pride in the artistry and craftsmanship that define our jewelry pieces. Each design is carefully conceptualized and brought to life by our team of skilled artisans, who combine traditional techniques with modern innovation to create pieces that are both timeless and contemporary.
          </p>
          <p>
            Our commitment to quality is evident in every step of the process – from sourcing the finest materials to the meticulous attention to detail in the crafting process. Whether it's a delicate engagement ring or an intricately designed necklace, each piece undergoes rigorous quality checks to ensure that it meets our exacting standards.
          </p>
          <p>
            We believe that jewelry is more than just an accessory – it's a reflection of your unique style, personality, and story. That's why we strive to create pieces that not only dazzle with their beauty but also resonate with the emotions and sentiments they symbolize. With Mangata & Gallo, you can trust that every piece you wear is a testament to the enduring beauty of love and commitment.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;