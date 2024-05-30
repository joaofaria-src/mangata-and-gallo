import React, { forwardRef } from "react";
import { FaTimes } from "react-icons/fa";
import "./shoppingCart.css";

const ShoppingCart = forwardRef(({ isOpen, toggleCart, cartItems }, ref) => {
    return (
        <div ref={ref} className={`shopping-cart ${isOpen ? 'open' : ''}`}>
            <div className="shopping-cart-header">
                <h2>Shopping Cart</h2>
                <button className="close-cart" onClick={toggleCart}><FaTimes /></button>
            </div>
            <div className="shopping-cart-body">
                {cartItems.length > 0 ? (
                    cartItems.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img src={`http://localhost:1337${item.attributes.Image.data[0].attributes.url}`} alt={item.attributes.Title} />
                            <div className="cart-item-details">
                                <h4>{item.attributes.Title}</h4>
                                <p>${item.attributes.Price}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Your cart is empty</p>
                )}
            </div>
        </div>
    );
});

export default ShoppingCart;
