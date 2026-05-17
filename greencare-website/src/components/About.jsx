import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Star } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section className="about section-padding" id="about">
      <div className="container">
        <div className="about-grid">
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">About Greencare</h2>
            <p className="about-text">
              Greencare is a trusted supplier of food packaging and disposable solutions dedicated to providing high-quality packaging products for restaurants, cafés, bakeries, hotels, caterers, and food delivery businesses.
            </p>
            <p className="about-text">
              We offer a wide range of food-grade packaging materials including containers, meal boxes, paper products, PET packaging, hygiene products, kitchen essentials, and customized branding solutions.
            </p>
            <p className="about-text">
              With a strong commitment to quality, reliability, and customer satisfaction, Greencare helps businesses enhance their packaging standards while maintaining convenience and hygiene.
            </p>
          </motion.div>

          <div className="about-cards">
            <motion.div 
              className="about-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="about-icon-wrapper"><Target className="about-icon" /></div>
              <h3>Our Mission</h3>
              <p>To deliver reliable, hygienic, and innovative food packaging solutions that support businesses in serving their customers better.</p>
            </motion.div>

            <motion.div 
              className="about-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="about-icon-wrapper"><Eye className="about-icon" /></div>
              <h3>Our Vision</h3>
              <p>To become one of the leading packaging solution providers in Kerala by offering quality products, excellent service, and customized branding support.</p>
            </motion.div>

            <motion.div 
              className="about-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="about-icon-wrapper"><Star className="about-icon" /></div>
              <h3>Core Values</h3>
              <ul className="values-list">
                <li>Quality</li>
                <li>Reliability</li>
                <li>Innovation</li>
                <li>Customer Satisfaction</li>
                <li>Sustainability</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
