import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Truck, ThumbsUp, Layers, HeartHandshake, Box, Tag, PhoneCall } from 'lucide-react';
import './Features.css';

const featuresData = [
  { icon: <ShieldCheck />, title: 'Premium Quality Materials', desc: 'Durable and reliable packaging' },
  { icon: <HeartHandshake />, title: 'Hygienic & Food Grade', desc: '100% safe for food contact' },
  { icon: <Tag />, title: 'Wholesale Pricing', desc: 'Cost-effective B2B rates' },
  { icon: <Box />, title: 'Bulk Supply Available', desc: 'Ready for large scale orders' },
  { icon: <Truck />, title: 'Fast Delivery', desc: 'Quick turnaround times' },
  { icon: <Layers />, title: 'Custom Branding', desc: 'Your logo on our products' },
  { icon: <PhoneCall />, title: 'Reliable Support', desc: 'Dedicated customer service' },
  { icon: <ThumbsUp />, title: 'Wide Range', desc: 'All your needs in one place' },
];

const Features = () => {
  return (
    <section className="features section-padding" id="about">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Why Choose Greencare</h2>
          <p className="section-subtitle">We are committed to providing the best packaging solutions for your business</p>
        </div>

        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
