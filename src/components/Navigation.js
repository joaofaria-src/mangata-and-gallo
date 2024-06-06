import React, { useState, useRef, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart, FaAngleDown } from "react-icons/fa";
import logo from "../logos/Asset 2@3x.png";
import ShoppingCart from "./ShoppingCart";
import "./navigation.css";
import { ModalContext } from './ModalContext';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

function Navigation({ userFirstName, setUserFirstName, cartItems, removeFromCart }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { openModal } = useContext(ModalContext);
    const cartRef = useRef(null);

    const handleLogout = () => {
        console.log("Logging out...");
        firebase.auth().signOut().then(() => {
            console.log("User signed out successfully");
            localStorage.removeItem('userLoggedIn');
            localStorage.removeItem('firstName');
            setUserFirstName("");
        }).catch((error) => {
            console.error("Error signing out:", error);
        });
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleUserMenu = () => {
        setIsUserMenuOpen(!isUserMenuOpen);
    };

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
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
            <Link to="/">
                    <img src={logo} alt="Company Logo" />
                </Link>
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
                        <Link to="/shop" className="nav-link" onClick={toggleMenu}>
                            Shop
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
                {userFirstName ? (
                    <div className="nav-dropdown">
                        <span className="username-text" onClick={toggleUserMenu}>
                            Hello, {userFirstName} <FaAngleDown className="arrow-icon" />
                        </span>
                        {isUserMenuOpen && (
                            <div className="nav-dropdown-content">
                                <Link to="#" onClick={handleLogout}>Logout</Link>
                            </div>
                        )}
                    </div>
                ) : (
                    <Link to="#" className="nav-link" onClick={openModal}>
                        <FaUser />
                    </Link>
                )}
                <Link to="#" className="nav-link" onClick={toggleCart}>
                    <FaShoppingCart />
                </Link>
            </div>
            <ShoppingCart ref={cartRef} isOpen={isCartOpen} toggleCart={toggleCart} cartItems={cartItems} removeFromCart={removeFromCart} />
        </nav>
    );
}

export default Navigation;
