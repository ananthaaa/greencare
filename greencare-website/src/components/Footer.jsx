import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/Logo02.png" alt="Greencare Logo" className="footer-logo" />
            <p className="footer-about">
              Greencare is a trusted supplier of food packaging and disposable solutions dedicated to providing high-quality packaging products for restaurants, cafés, and food delivery businesses.
            </p>
            <div className="social-links">
              <a href="#" className="social-link"><FaFacebook size={20} /></a>
              <a href="#" className="social-link"><FaInstagram size={20} /></a>
              <a href="#" className="social-link"><FaLinkedin size={20} /></a>
              <a href="#" className="social-link"><FaTwitter size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links-group">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#products">Our Products</a></li>
              <li><a href="#custom-printing">Custom Printing</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="footer-links-group">
            <h4 className="footer-title">Products</h4>
            <ul className="footer-links">
              <li><a href="#products">Food Containers</a></li>
              <li><a href="#products">Meal Boxes</a></li>
              <li><a href="#products">Paper Products</a></li>
              <li><a href="#products">Tableware & Hygiene</a></li>
              <li><a href="#products">Custom Branding</a></li>
            </ul>
          </div>
          
          <div className="footer-links-group">
            <h4 className="footer-title">Contact</h4>
            <ul className="footer-links">
              <li>KK Road, Opp Indian Oil Pump, Chempumukku</li>
              <li>+91 9072112316</li>
              <li>greencarepacks@gmail.com</li>
              <li><br/><a href="https://wa.me/919072112316" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{padding: '8px 16px', fontSize: '0.9rem'}}>WhatsApp Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Greencare Packaging Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
