import React, { useState } from "react";
import logo from "../logos/Asset 2@3x.png";
import { Link } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import "./navigation.css";

function Navigation({ userFirstName }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleUserMenu = () => {
        setIsUserMenuOpen(!isUserMenuOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('firstName');
        window.location.reload();
    };

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
                <Link to="#" className="nav-link">
                    <FaShoppingCart />
                </Link>
            </div>
        </nav>
    );
}

export default Navigation;