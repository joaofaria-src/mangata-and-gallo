import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import "./shop.css";

function Shop({ addToCart, db }) {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState("Wedding Rings");
  const [products, setProducts] = useState([]);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    }
  }, [category]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const productsCol = collection(db, "products");
        const snapshot = await getDocs(productsCol);

        if (snapshot.empty) {
          console.log("No products found");
          return;
        }

        const productsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        console.log("Fetched products:", productsData);
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, [selectedCategory, db]);

  const filteredProducts = products.filter(product => product.category === selectedCategory);

  console.log("Selected category:", selectedCategory);
  console.log("Filtered products:", filteredProducts);

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
                    src={product.image}
                    alt={product.title}
                  />
                </a>
              </figure>
              <div className="product-meta">
                <h3 className="product-title"><a href="#!">{product.title}</a></h3>
                <div className="product-price">
                  <span>${product.price}</span>
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

export default Shop;
