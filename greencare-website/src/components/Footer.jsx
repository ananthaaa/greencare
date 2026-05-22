import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { ArrowRight } from 'lucide-react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__grid">

        {/* Brand */}
        <div className="footer__brand">
          <img src="/Logo02.png" alt="Greencare" className="footer__logo" />
          <p className="footer__about">
            Kerala's trusted supplier of premium food packaging and disposable solutions
            for restaurants, cafés, and food delivery businesses.
          </p>
          <div className="footer__social">
            <a href="#" className="footer__social-link" aria-label="Facebook"><FaFacebook size={18} /></a>
            <a href="#" className="footer__social-link" aria-label="Instagram"><FaInstagram size={18} /></a>
            <a href="#" className="footer__social-link" aria-label="LinkedIn"><FaLinkedin size={18} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer__group">
          <h4 className="footer__group-title">Quick Links</h4>
          <ul className="footer__links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#products">Our Products</a></li>
            <li><a href="#custom-printing">Custom Printing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Products */}
        <div className="footer__group">
          <h4 className="footer__group-title">Products</h4>
          <ul className="footer__links">
            <li><a href="#products">Food Containers</a></li>
            <li><a href="#products">Meal Boxes</a></li>
            <li><a href="#products">Paper Products</a></li>
            <li><a href="#products">Tableware &amp; Hygiene</a></li>
            <li><a href="#products">Custom Branding</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer__group">
          <h4 className="footer__group-title">Contact</h4>
          <ul className="footer__links footer__links--contact">
            <li>KK Road, Opp Indian Oil Pump, Chempumukku</li>
            <li>+91 9072112316</li>
            <li>greencare2003@gmail.com</li>
          </ul>
          <a
            href="https://wa.me/919072112316"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__wa-btn"
          >
            WhatsApp Us <ArrowRight size={14} />
          </a>
        </div>

      </div>

      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} Greencare Packaging Solutions. All rights reserved.</p>
        <p className="footer__gst">GST: 32CKCPTO619N1Z0</p>
      </div>
    </div>
  </footer>
);

export default Footer;
