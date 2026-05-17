import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Products.css';

const categories = [
  { id: 1, name: 'Food Containers', image: '/images/food_containers.png' },
  { id: 2, name: 'Meal Boxes', image: '/images/meal_boxes.png' },
  { id: 3, name: 'PET Containers', image: '/images/pet_containers.png' },
  { id: 4, name: 'Paper Bags', image: '/images/paper_bags.png' },
  { id: 5, name: 'Paper Straws', image: '/images/paper_straws.png' },
  { id: 6, name: 'Tableware & Hygiene', image: '/images/hygiene_products.png' },
  { id: 7, name: 'Foil & Kitchen Essentials', image: '/images/kitchen_foil.png' },
  { id: 8, name: 'Juice Glasses', image: '/images/juice_glasses.png' },
  { id: 9, name: 'Buckets & Storage', image: '/images/buckets_storage.png' }
];

const Products = () => {
  return (
    <section className="products section-padding" id="products">
      <div className="container">
        <div className="products-header mb-12">
          <div>
            <h2 className="section-title">Our Products</h2>
            <p className="section-subtitle" style={{ margin: 0 }}>Explore our wide range of premium packaging solutions</p>
          </div>
          <a href="#contact" className="btn btn-outline desktop-only">Request Full Catalog</a>
        </div>

        <div className="products-grid">
          {categories.map((cat, index) => (
            <motion.div 
              key={cat.id}
              className="product-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <div className="product-img-wrapper">
                <img src={cat.image} alt={cat.name} className="product-img" />
              </div>
              <div className="product-info">
                <h3 className="product-name">{cat.name}</h3>
                <a href={`https://wa.me/919072112316?text=I'm interested in ${cat.name}`} target="_blank" rel="noopener noreferrer" className="product-link">
                  Inquire Now <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mobile-only text-center" style={{ marginTop: '30px' }}>
          <a href="#contact" className="btn btn-outline">Request Full Catalog</a>
        </div>
      </div>
    </section>
  );
};

export default Products;
