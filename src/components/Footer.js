import "./footer.css";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>Mangata & Gallo is your one-stop shop for the finest jewelry and clothing.</p>
                    <p>Quality and customer satisfaction are our top priorities.</p>
                </div>
                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/faq">FAQ</a></li>
                        <li><a href="/terms">Terms & Conditions</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a>
                    </div>
                </div>
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Email: support@mangata-gallo.com</p>
                    <p>Phone: +1 (234) 567-890</p>
                    <p>Address: 123 Fashion Ave, New York, NY 10001</p>
                </div>
            </div>
            <div className="footer-bottom">
                ©{currentYear} Mangata & Gallo. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
