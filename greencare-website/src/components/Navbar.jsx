import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { label: 'Home',            href: '/#home',            type: 'scroll' },
  { label: 'Products',        href: '/products',         type: 'route'  },
  { label: 'Custom Printing', href: '/#custom-printing', type: 'scroll' },
  { label: 'Contact',         href: '/#contact',         type: 'scroll' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate  = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const handleNav = (e, link) => {
    e.preventDefault();
    setMenuOpen(false);

    if (link.type === 'route') {
      navigate(link.href);
      return;
    }

    const hash = link.href.split('#')[1];
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 250);
    } else {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner container">
        {/* Logo */}
        <Link to="/" className="navbar__logo" aria-label="Greencare home">
          <img src="/Logo02.png" alt="Greencare" height="40" />
        </Link>

        {/* Desktop links — centered */}
        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`navbar__link${location.pathname === link.href ? ' navbar__link--active' : ''}`}
                onClick={(e) => handleNav(e, link)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Spacer to push hamburger right */}
        <div className="navbar__spacer" />

        {/* Hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <ul className="navbar__mobile-links">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="navbar__mobile-link"
                    onClick={(e) => handleNav(e, link)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
