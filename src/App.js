import React from "react";
import "./App.css";
import Service from "./Service";
import { BrowserRouter, Link} from "react-router-dom";
import logo from "./logos/Asset 2@3x.png"; 
import bannerImage from "./images/ring.jpg";

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo" width="50%" height="auto" />
    </header>
  );
}

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link> 
        </li>
        <li>
          <Link to="#gallery">Gallery</Link> 
        </li>
        <li>
          <Link to="#contact">Contact</Link> 
        </li>
        <li>
          <Link to="#about">About</Link> 
        </li>
      </ul>
    </nav>
  );
}

function Main() {
  return (
    <main>
      <section className="main">
        <div className="banner">
          <img src={bannerImage} alt="Banner" />
        </div>
        <section className="item-container">
          {/* Use the Service component for each item */}
          <Service
            title="Symbolize Your Love with Timeless Elegance"
            description="Celebrate your love with our exquisite engagement rings, meticulously crafted to symbolize your unique bond. From timeless solitaires to dazzling halos, our collection offers something for every style and budget. Begin your journey together with a symbol of enduring commitment and beauty. Explore our range today and find the perfect ring to capture your love story."
          />
          <Service
            title="Elevate Your Special Day with Timeless Beauty"
            description="Elevate your special day with our stunning wedding bands, designed to complement your love and commitment. Crafted with precision and passion, each band embodies the promise of forever. Whether you prefer classic simplicity or modern elegance, our diverse collection has something to suit every taste. Make your union unforgettable with a symbol of everlasting devotion."
          />
          <Service
            title="Commemorate Your Milestones with Lasting Memories"
            description="Celebrate the milestones of your journey together with our exquisite anniversary gifts, designed to honor your enduring love. From timeless diamond necklaces to elegant watches, our collection offers the perfect way to mark each passing year. Commemorate your bond with a gift that reflects the depth of your connection and the joy of a lifetime spent together. Explore our range and find the perfect expression of your love."
          />
        </section>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footerlogo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="copywright">© 2024 Mangata & Gallo</div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navigation />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
