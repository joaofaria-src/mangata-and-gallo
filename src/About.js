import React from "react";
import companyImage from "./images/store.jpg";
import workImage from "./images/artisan.jpg";

function About() {
  return (
    <div className="container">
      <div className="pink-container">
        <div className="row">
          <div className="col-md-6">
            <div className="about-section">
              <h2>About Mangata & Gallo</h2>
              <img src={companyImage} alt="Mangata & Gallo Storefront" className="about-image" />
              <p>
                At Mangata & Gallo, we believe that every piece of jewelry tells a story. 
                Founded in the heart of Springfield, our boutique jewelry store has been 
                curating unique and timeless pieces for over a decade. Our passion for 
                craftsmanship and dedication to quality ensure that each creation embodies 
                elegance and sophistication.
              </p>
              <p>
                Our mission is to inspire individuals to express their individuality and 
                celebrate life's special moments through the artistry of fine jewelry. 
                Whether it's a sparkling diamond engagement ring or a personalized charm 
                bracelet, we strive to provide exceptional pieces that resonate with our 
                customers and become cherished heirlooms for generations to come.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-section">
              <h2>Our Craftsmanship</h2>
              <img src={workImage} alt="Craftsmanship" className="about-image" />
              <p>
                We take pride in our commitment to craftsmanship 
                and attention to detail. Each piece in our collection is meticulously 
                crafted by skilled artisans who share our passion for excellence. From 
                hand-selecting the finest gemstones to precision-setting and polishing, 
                every step of the creation process is executed with precision and care.
              </p>
              <p>
                Our dedication to quality extends beyond the finished product. We 
                source materials responsibly and uphold ethical standards in every 
                aspect of our business. With a focus on sustainability and transparency, 
                we strive to create jewelry that not only delights the senses but also 
                respects the environment and the communities we serve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;