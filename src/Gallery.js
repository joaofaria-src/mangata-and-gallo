import React, { useState } from "react";
import ring1 from "./images/ring1.jpg";
import ring2 from "./images/ring2.jpg";
import ring3 from "./images/ring3.jpg";
import watch1 from "./images/watch1.jpg";
import watch2 from "./images/watch2.jpg";
import watch3 from "./images/watch3.jpg";

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("Wedding Rings");

  // Sample product data for each category
  const productsData = {
    "Wedding Rings": [
      { title: "Diamond Solitaire Ring", image: ring1, description: "Exquisite diamond solitaire ring crafted with precision.", price: "$999" },
      { title: "Vintage Sapphire Ring", image: ring2, description: "Timeless vintage sapphire ring with intricate detailing.", price: "$1299" }
      // Add more wedding ring products
    ],
    "Watches": [
      { title: "Classic Gold Band", image: watch1, description: "Elegant classic gold wedding band for him and her.", price: "$499" },
      { title: "Diamond Eternity Band", image: watch2, description: "Stunning diamond eternity band symbolizing eternal love.", price: "$1499" }
      // Add more wedding band products
    ],
    "Gift Ideas": [
      { title: "Pearl Necklace", image: ring3, description: "Exquisite pearl necklace perfect for any occasion.", price: "$399" },
      { title: "Personalized Charm Bracelet", image: watch3, description: "Customized charm bracelet featuring meaningful charms.", price: "$299" }
      // Add more gift ideas products
    ]
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="container">
      <div className="category-menu">
        <ul>
          <li className={selectedCategory === "Wedding Rings" ? "active" : ""} onClick={() => handleCategoryChange("Wedding Rings")}>Wedding Rings</li>
          <li className={selectedCategory === "Watches" ? "active" : ""} onClick={() => handleCategoryChange("Watches")}>Watches</li>
          <li className={selectedCategory === "Gift Ideas" ? "active" : ""} onClick={() => handleCategoryChange("Gift Ideas")}>Gift Ideas</li>
        </ul>
      </div>
      <div className="gallery-items">
        {productsData[selectedCategory].map((product, index) => (
          <div className="gallery-item" key={index}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p className="price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
