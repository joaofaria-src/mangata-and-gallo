import logo from "./logos/Asset 2@3x.png"; // Importing the company logo image
import { Link } from "react-router-dom"; // Importing Link component from react-router-dom for navigation
import React, { useState } from "react"; // Importing React and useState hook
import { FaUser, FaShoppingCart } from "react-icons/fa"; // Importing icons from react-icons library

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu open/close

    // Function to toggle menu open/close state
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="navbar-logo">
                <img src={logo} alt="Company Logo" /> {/* Displaying the company logo */}
            </div>

            {/* Collapse button for smaller screens */}
            <button className="navbar-collapse-button" onClick={toggleMenu}>
                <div className="icon-bar"></div>
                <div className="icon-bar"></div>
                <div className="icon-bar"></div>
            </button>

            {/* Menu */}
            <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
                <ul className="navbar-ul">
                    {/* Navigation Links */}
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

            {/* Icons */}
            <div className="navbar-icons">
                {/* User Icon */}
                <Link to="/auth" className="nav-link">
                    <FaUser />
                </Link>
                {/* Shopping Cart Icon */}
                <Link to="#" className="nav-link">
                    <FaShoppingCart />
                </Link>
            </div>
        </nav>
    );
}