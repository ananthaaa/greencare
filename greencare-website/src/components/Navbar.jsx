import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/#about' },
    { name: 'Product Catalog', href: '/products' },
    { name: 'Custom Printing', href: '/#custom-printing' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container nav-container">
        <a href="#" className="logo">
          <img src="/Logo02.png" alt="Greencare Logo" />
        </a>

        <div className="nav-links desktop-only">
          {navLinks.map((link) => (
            link.href.startsWith('/#') ? (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ) : (
              <Link key={link.name} to={link.href} className="nav-link">
                {link.name}
              </Link>
            )
          ))}
        </div>

        <div className="nav-actions desktop-only">
          <a href="https://wa.me/919072112316" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            <MessageCircle size={20} />
            WhatsApp Us
          </a>
        </div>

        <button className="mobile-menu-btn mobile-only" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          className="mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          {navLinks.map((link) => (
            link.href.startsWith('/#') ? (
              <a 
                key={link.name} 
                href={link.href} 
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={link.name} 
                to={link.href} 
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            )
          ))}
          <a href="https://wa.me/919072112316" className="btn btn-primary mobile-cta" target="_blank" rel="noopener noreferrer">
            <MessageCircle size={20} />
            WhatsApp Us
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
