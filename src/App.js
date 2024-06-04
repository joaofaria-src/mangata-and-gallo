import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import Auth from "./components/Auth";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ResetPasswordForm from "./components/ResetPasswordForm";
import Main from "./components/HomePage";
import { ModalProvider } from "./components/ModalContext";

function App() {
  const [userFirstName, setUserFirstName] = useState("");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const firstName = localStorage.getItem('firstName');
    if (firstName) {
      setUserFirstName(firstName);
    }
  }, []);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <ModalProvider>
      <BrowserRouter>
        <div className="App">
          <Navigation userFirstName={userFirstName} cartItems={cartItems} removeFromCart={removeFromCart} />
          <Auth setUserFirstName={setUserFirstName} />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/shop" element={<Shop addToCart={addToCart} />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/api/auth/reset-password" element={<ResetPasswordForm />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </ModalProvider>
  );
}

export default App;
