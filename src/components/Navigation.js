import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import logo from "../logos/Asset 2@3x.png";
import ShoppingCart from "./ShoppingCart";
import "./navigation.css";

function Navigation({ userFirstName }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const cartRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleUserMenu = () => {
        setIsUserMenuOpen(!isUserMenuOpen);
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('firstName');
        window.location.reload();
    };

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const handleClickOutside = (event) => {
        if (cartRef.current && !cartRef.current.contains(event.target)) {
            setIsCartOpen(false);
        }
    };

    useEffect(() => {
        if (isCartOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isCartOpen]);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Company Logo" />
            </div>

            <button className="navbar-collapse-button" onClick={toggleMenu}>
                <div className="icon-bar"></div>
                <div className="icon-bar"></div>
                <div className="icon-bar"></div>
            </button>

            <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
                <ul className="navbar-ul">
                    <li className="nav-item">
                        <Link to="/" className="nav-link" onClick={toggleMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/gallery" className="nav-link" onClick={toggleMenu}>
                            Gallery
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link" onClick={toggleMenu}>
                            Contact
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link" onClick={toggleMenu}>
                            About
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="navbar-icons">
                <div className="nav-dropdown">
                    {userFirstName ? (
                        <button className="nav-dropdown-button" onClick={toggleUserMenu}>
                            {`Hello, ${userFirstName} \u25BC`}
                        </button>
                    ) : (
                        <Link to="/auth" className="nav-link">
                            <FaUser />
                        </Link>
                    )}
                    {isUserMenuOpen && (
                        <div className="nav-dropdown-content">
                            {userFirstName && <Link to="#" onClick={handleLogout}>Logout</Link>}
                        </div>
                    )}
                </div>
                <Link to="#" className="nav-link" onClick={toggleCart}>
                    <FaShoppingCart />
                </Link>
            </div>

            <ShoppingCart ref={cartRef} isOpen={isCartOpen} toggleCart={toggleCart} cartItems={cartItems} />
        </nav>
    );
}

export default Navigation;
