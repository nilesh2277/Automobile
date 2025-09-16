import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img
            src="https://www.bing.com/th/id/OIP.uqnxKd0bgWG9dJ2_TVPJsQHaHa?w=204&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            alt="Company Logo"
          />
          <span>Sinha Interprises</span>
        </div>
        <p>Automobile Agency Since 2019</p>
        <div className="footer-links">
          <a href="mailto:info@sinhaenterprises.com">Email</a>
          <a href="tel:+911234567890">Phone</a>
          <a
            href="https://www.instagram.com/snifersaransh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/nilesh-sinha"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
        <p className="copyright">
          © {new Date().getFullYear()} Sinha Interprises. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
