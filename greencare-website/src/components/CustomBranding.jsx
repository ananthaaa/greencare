import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import './CustomBranding.css';

const CustomBranding = () => {
  const benefits = [
    'Brand recognition',
    'Professional presentation',
    'Better customer experience',
    'Marketing through packaging'
  ];

  return (
    <section className="custom-branding section-padding" id="custom-printing">
      <div className="container">
        <div className="branding-container">
          <motion.div 
            className="branding-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="branding-badge">Boost Your Brand</span>
            <h2 className="section-title">Customized Packaging Solutions</h2>
            <p className="branding-text">
              Enhance your brand visibility with customized food packaging solutions from Greencare. We provide custom logo printing and branded packaging materials for restaurants, cafés, bakeries, and food delivery brands.
            </p>
            
            <div className="branding-benefits">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <CheckCircle size={20} className="benefit-icon" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            
            <a href="#contact" className="btn btn-primary mt-6">Inquire About Custom Printing</a>
          </motion.div>
          
          <motion.div 
            className="branding-image-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img src="/images/custom_branding.png" alt="Custom printed packaging" className="branding-image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CustomBranding;
