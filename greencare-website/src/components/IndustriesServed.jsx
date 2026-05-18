import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Coffee, Hotel, ShoppingBag, Store, Salad } from 'lucide-react';
import './IndustriesServed.css';

const industries = [
  { icon: <Utensils size={28} />, name: 'Restaurants' },
  { icon: <Coffee size={28} />,   name: 'Cafés & Bakeries' },
  { icon: <Hotel size={28} />,    name: 'Hotels & Caterers' },
  { icon: <Store size={28} />,    name: 'Supermarkets' },
  { icon: <ShoppingBag size={28} />, name: 'Food Delivery' },
  { icon: <Salad size={28} />,    name: 'Cloud Kitchens' },
];

const IndustriesServed = () => (
  <section className="industries section-padding">
    <div className="container">

      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="industries__badge">Industries We Serve</span>
        <h2 className="section-title" style={{ color: '#fff', marginTop: '14px' }}>
          Built for{' '}
          <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', color: 'var(--accent-mint)' }}>
            Every
          </span>
          {' '}Food Business
        </h2>
        <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)', margin: '0 auto' }}>
          Delivering premium-quality packaging solutions to the businesses that keep Kerala fed.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="industries__grid">
        {industries.map((ind, i) => (
          <motion.div
            key={ind.name}
            className="industries__card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -8, transition: { duration: 0.28 } }}
          >
            <div className="industries__icon">{ind.icon}</div>
            <h3 className="industries__name">{ind.name}</h3>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default IndustriesServed;
