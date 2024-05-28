import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./gallery.css";

function Gallery() {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState("Wedding Rings");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/products?populate=Image`);
        /*console.log("Response data:", response.data); */
        setProducts(response.data.data); 
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  
    fetchProducts();
  }, []);

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    }
  }, [category]);

  /*console.log("Products state:", products); */

  // Filter products based on the selected category
  const filteredProducts = products.filter(product => product.attributes.Category === selectedCategory);

  return (
    <div className="container">
      {/* Category menu */}
      <div className="category-menu">
        <ul>
          <li
            className={selectedCategory === "Wedding Rings" ? "active" : ""}
            onClick={() => setSelectedCategory("Wedding Rings")}
          >
            Wedding Rings
          </li>
          <li
            className={selectedCategory === "Watches" ? "active" : ""}
            onClick={() => setSelectedCategory("Watches")}
          >
            Watches
          </li>
          <li
            className={selectedCategory === "Bracelets" ? "active" : ""}
            onClick={() => setSelectedCategory("Bracelets")}
          >
            Bracelets
          </li>
        </ul>
      </div>
      {/* Gallery items */}
      <div className="gallery-items">
        {filteredProducts.map((product, index) => (
          <div className="gallery-item" key={index}>
            <img
              src={`http://localhost:1337${product.attributes.Image.data[0].attributes.url}`}
              alt={product.attributes.Title}
            />
            <h3>{product.attributes.Title}</h3>
            <p>{product.attributes.Description[0].children[0].text}</p>
            <p className="price">{product.attributes.Price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
