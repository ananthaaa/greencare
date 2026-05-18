import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import './CustomBranding.css';

const benefits = [
  'Branded recognition at every delivery',
  'Professional first impression',
  'Better customer experience',
  'Marketing through packaging',
];

const CustomBranding = () => (
  <section className="branding section-padding" id="custom-printing">
    <div className="container">
      <div className="branding__grid">

        {/* Content side */}
        <motion.div
          className="branding__content"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <span className="badge badge-primary" style={{ marginBottom: '18px' }}>Boost Your Brand</span>
          <h2 className="section-title">
            Customised{' '}
            <span className="serif-accent" style={{ color: 'var(--primary)' }}>Packaging</span>
            {' '}Solutions
          </h2>
          <p className="branding__text">
            Enhance your brand visibility with customised food packaging from Greencare.
            We provide custom logo printing and branded packaging materials for restaurants,
            cafés, bakeries, and food delivery brands.
          </p>

          <ul className="branding__benefits">
            {benefits.map((b) => (
              <li key={b} className="branding__benefit">
                <CheckCircle size={18} className="branding__benefit-icon" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn btn-primary" style={{ marginTop: '8px', alignSelf: 'flex-start', gap: '8px' }}>
            Inquire About Custom Printing <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Image side */}
        <motion.div
          className="branding__image-wrap"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.15 }}
          whileHover={{ scale: 1.02, transition: { duration: 0.35 } }}
        >
          <img
            src="/images/custom_branding.png"
            alt="Custom printed packaging"
            className="branding__image"
          />
          {/* Floating label */}
          <div className="branding__float-tag">
            <span>Custom Logo Printing</span>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

export default CustomBranding;
