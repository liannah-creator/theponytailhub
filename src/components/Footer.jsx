import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-inner">

        <div className="footer-left">
          <div className="footer-logo">THE PONYTAIL HUB</div>
          <p className="footer-text">Elevating your look with luxurious ponytails.</p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#collections">Collections</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <details className="footer-accordion">
          <summary>Menu</summary>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#collections">Collections</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </details>

        <div className="footer-right">
          <div className="socials">
            <a href="#" aria-label="Instagram" className="social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="#f1afc5" strokeWidth="1.2"/>
                <circle cx="12" cy="12" r="3.2" stroke="#f1afc5" strokeWidth="1.2"/>
                <circle cx="17.2" cy="6.8" r="0.6" fill="#f1afc5"/>
              </svg>
            </a>

            <a href="#" aria-label="Twitter" className="social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M22 5.92c-.64.28-1.33.48-2.05.56.74-.44 1.3-1.14 1.57-1.98-.69.41-1.45.7-2.26.86C18.6 4.6 17.69 4 16.64 4c-1.51 0-2.73 1.22-2.73 2.73 0 .21.02.42.07.62C11.3 7.28 8.5 5.7 6.64 3.2c-.23.4-.36.86-.36 1.36 0 .94.48 1.77 1.22 2.25-.56-.02-1.09-.17-1.55-.43v.04c0 1.31.93 2.4 2.16 2.64-.22.06-.46.1-.7.1-.17 0-.34-.02-.5-.05.34 1.06 1.33 1.83 2.5 1.86C9.3 15.1 8 15.7 6.62 15.7c-.22 0-.44-.01-.65-.04 1.21.78 2.64 1.24 4.18 1.24 5.02 0 7.77-4.16 7.77-7.77v-.35c.54-.39 1-0.86 1.36-1.41-.49.22-1.01.37-1.56.44z" stroke="#f1afc5" strokeWidth="0.6" fill="none"/>
              </svg>
            </a>
          </div>
          <p className="copyright">© {year} The Ponytail Hub</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
