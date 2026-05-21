import React from 'react';
import { motion } from 'framer-motion';
import { PackageSearch, ArrowRight, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Hero.css';

const containerVariants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.16, delayChildren: 0.25 }
  }
};

const itemVariants = {
  hidden:  { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
  }
};

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* Full-bleed background image */}
      <div className="hero__bg">
        <img
          src="/images/homeimage.png"
          alt="Premium Food Packaging"
          className="hero__bg-img"
        />
        <div className="hero__bg-overlay" />
      </div>

      {/* Decorative blobs */}
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />

      <div className="container hero__body">
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.span className="hero__badge glass-panel" variants={itemVariants}>
            <span className="hero__badge-dot" />
            B2B Packaging Experts
          </motion.span>

          {/* Headline */}
          <motion.h1 className="hero__title" variants={itemVariants}>
            Premium Food{' '}
            <span className="hero__title-serif">Packaging</span>
            {' '}&amp;
            <br />
            <span className="hero__title-gradient">Disposable Solutions</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p className="hero__subtitle" variants={itemVariants}>
            Trusted supplier of high-quality food packaging materials, disposable containers,
            paper products, and customised branding solutions for restaurants, cafés,
            bakeries, and food businesses across Kerala.
          </motion.p>

          {/* CTAs */}
          <motion.div className="hero__ctas" variants={itemVariants}>
            <Link to="/products" className="btn btn-primary hero__cta-primary">
              <PackageSearch size={18} />
              View Products
            </Link>
            <a href="#contact" className="btn hero__cta-ghost">
              Get a Quote
              <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Delivery Banner */}
          <motion.div className="hero__delivery-banner" variants={itemVariants}>
            <div className="hero__delivery-icon">
              <Truck size={20} />
            </div>
            <div className="hero__delivery-text">
              <span className="hero__delivery-title">Delivery Available</span>
              <span className="hero__delivery-sub">Products delivered at catalog rates — no hidden charges</span>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll-hint"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
      >
        <div className="hero__scroll-dot" />
      </motion.div>
    </section>
  );
};

export default Hero;
