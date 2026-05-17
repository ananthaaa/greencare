import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Coffee, Hotel, ShoppingBag, Store, Salad } from 'lucide-react';
import './IndustriesServed.css';

const industries = [
  { icon: <Utensils size={32} />, name: 'Restaurants' },
  { icon: <Coffee size={32} />, name: 'Cafés & Bakeries' },
  { icon: <Hotel size={32} />, name: 'Hotels & Caterers' },
  { icon: <Store size={32} />, name: 'Supermarkets' },
  { icon: <ShoppingBag size={32} />, name: 'Food Delivery' },
  { icon: <Salad size={32} />, name: 'Cloud Kitchens' }
];

const IndustriesServed = () => {
  return (
    <section className="industries section-padding">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-subtitle">Delivering high-quality packaging to various food businesses</p>
        </div>

        <div className="industries-grid">
          {industries.map((ind, index) => (
            <motion.div 
              key={index}
              className="industry-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="industry-icon">
                {ind.icon}
              </div>
              <h3 className="industry-name">{ind.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;
