import React from 'react';
import { motion } from 'framer-motion';
import { PackageSearch, MessageCircle } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <img src="/images/hero_bg.png" alt="Premium Food Packaging Background" className="hero-img" />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-content">
        <motion.div 
          className="hero-text-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="hero-badge">B2B Packaging Experts</span>
          <h1 className="hero-title">
            Premium Food Packaging & <br />
            <span className="text-primary">Disposable Solutions</span>
          </h1>
          <p className="hero-subtitle">
            Trusted supplier of high-quality food packaging materials, disposable containers, paper products, and customized branding solutions for restaurants, cafés, bakeries, and food businesses.
          </p>
          
          <div className="hero-actions">
            <a href="#products" className="btn btn-primary">
              <PackageSearch size={20} />
              View Products
            </a>
            <a href="#contact" className="btn btn-outline">
              Get Quote
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
