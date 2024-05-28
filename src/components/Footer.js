import "./footer.css";

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
      <footer>
        <div className="footer">©{currentYear} Mangata & Gallo</div>
      </footer>
    );
  }

  export default Footer;