import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Banner from "./Banner";
import Auth from "./Auth";
import Navigation from "./Navigation";

// Main component rendering the banner and services section
function Main() {
  return (
    <main>
      <Banner />
      <section className="main">
        <section className="card-container">
          {/* Render Service components with different titles and descriptions */}
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

// Footer component displaying the current year
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer">©{currentYear} Mangata & Gallo</div>
    </footer>
  );
}

// App component managing routing and layout
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Render the navigation bar */}
        <Navigation />
        {/* Define routes for different pages */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Main />} />
        </Routes>
        {/* Render the footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
