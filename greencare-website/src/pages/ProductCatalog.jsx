import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Search } from 'lucide-react';
import { productCategories } from '../data/productData';
import './ProductCatalog.css';

const ProductCatalog = () => {
  const [activeCategory, setActiveCategory] = useState(productCategories[0]?.category || '');
  const [searchTerm, setSearchTerm] = useState('');

  const handleWhatsApp = (productName) => {
    const message = `Hi, I am interested in ordering ${productName}. Could you provide the pricing and availability?`;
    window.open(`https://wa.me/919072112316?text=${encodeURIComponent(message)}`, '_blank');
  };

  const filteredCategories = productCategories.map(cat => ({
    ...cat,
    products: cat.products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
  })).filter(cat => cat.products.length > 0);

  const activeCategoryData = filteredCategories.find(c => c.category === activeCategory) || filteredCategories[0];

  return (
    <div className="product-catalog-page">
      <div className="catalog-header">
        <div className="container">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-title"
          >
            Product Catalog
          </motion.h1>
          <p className="section-subtitle">Browse our complete range of B2B packaging and cleaning supplies</p>
          
          <div className="search-bar">
            <Search className="search-icon" size={20} />
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="container catalog-container">
        {filteredCategories.length > 0 ? (
          <>
            <aside className="catalog-sidebar">
              <h3>Categories</h3>
              <ul>
                {filteredCategories.map((cat) => (
                  <li 
                    key={cat.category}
                    className={activeCategory === cat.category ? 'active' : ''}
                    onClick={() => setActiveCategory(cat.category)}
                  >
                    {cat.category}
                    <span className="count">{cat.products.length}</span>
                  </li>
                ))}
              </ul>
            </aside>

            <main className="catalog-content">
              {activeCategoryData && (
                <div className="category-section">
                  <div className="category-header">
                    <h2>{activeCategoryData.category}</h2>
                  </div>
                  <div className="product-grid-detailed">
                    {activeCategoryData.products.map((product, idx) => (
                      <motion.div 
                        key={idx} 
                        className="product-card-detailed"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <div className="product-image-container">
                          <img src={activeCategoryData.image} alt={product.name} />
                        </div>
                        <div className="product-info">
                          <h4>{product.name}</h4>
                          <p className="uom">Unit: {product.uom || 'N/A'}</p>
                          <button 
                            className="btn btn-outline" 
                            onClick={() => handleWhatsApp(product.name)}
                          >
                            <MessageCircle size={16} />
                            Inquire Price
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </main>
          </>
        ) : (
          <div className="no-results">
            <h2>No products found</h2>
            <p>Try adjusting your search term.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCatalog;
