import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./gallery.css";

function Gallery({ addToCart }) {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState("Wedding Rings");
  const [products, setProducts] = useState([]);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/products?populate=Image`);
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

  const filteredProducts = products.filter(product => product.attributes.Category === selectedCategory);

  return (
    <div className="container">
      <h1>Products</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{selectedCategory}</li>
        </ol>
      </nav>
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
      <div className="row">
        {filteredProducts.map((product, index) => (
          <div className="col col-lg-4" key={index}>
            <div className="product" onMouseEnter={() => setHoveredProduct(product)} onMouseLeave={() => setHoveredProduct(null)}>
              <figure className="product-image">
                <a href="#!">
                  <img
                    src={`http://localhost:1337${product.attributes.Image.data[0].attributes.url}`}
                    alt={product.attributes.Title}
                  />
                </a>
              </figure>
              <div className="product-meta">
                <h3 className="product-title"><a href="#!">{product.attributes.Title}</a></h3>
                <div className="product-price">
                  <span>${product.attributes.Price}</span>
                  {hoveredProduct === product && (
                    <span className="product-action">
                      <a href="#!" className="add-to-cart" onClick={() => addToCart(product)}>Add to cart</a>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
