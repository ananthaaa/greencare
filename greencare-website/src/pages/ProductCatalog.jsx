import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Search, Grid, List, X, ChevronDown, Sparkles } from 'lucide-react';
import { productCategories } from '../data/productData';
import './ProductCatalog.css';

const ProductCatalog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('name-asc');

  const handleWhatsApp = (productName) => {
    const message = `Hi, I am interested in ordering "${productName}" from your Greencare Catalog. Could you please provide bulk pricing and delivery options?`;
    window.open(`https://wa.me/919072112316?text=${encodeURIComponent(message)}`, '_blank');
  };

  const suggestionChips = ["Foil", "Garbage Bag", "Paper Cup", "Gloves", "Cleaner", "Containers"];

  // Flatten products list and attach category info
  const allProducts = productCategories.flatMap(cat => 
    cat.products.map(p => ({
      ...p,
      categoryName: cat.category,
      categoryImage: cat.image
    }))
  );

  // Helper to parse price safely for sorting
  const getNumericalPrice = (price) => {
    if (typeof price === 'number') return price;
    if (typeof price === 'string') {
      const clean = price.split(',')[0].trim();
      const parsed = parseFloat(clean);
      return isNaN(parsed) ? 0 : parsed;
    }
    return 0;
  };

  // Helper to format price range display
  const formatPrice = (price) => {
    if (!price) return 'Bulk Price';
    if (typeof price === 'number') {
      return `₹${price}`;
    }
    if (typeof price === 'string') {
      if (price.includes(',')) {
        const parts = price.split(',');
        return `₹${parts[0]} - ₹${parts[parts.length - 1]}`;
      }
      return `₹${price}`;
    }
    return 'Bulk Price';
  };

  // Filter products by category and search term
  const getFilteredProducts = () => {
    let list = [];
    if (activeCategory === 'All') {
      list = allProducts;
    } else {
      const cat = productCategories.find(c => c.category === activeCategory);
      if (cat) {
        list = cat.products.map(p => ({
          ...p,
          categoryName: cat.category,
          categoryImage: cat.image
        }));
      }
    }

    if (searchTerm) {
      list = list.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    return list;
  };

  const filteredProducts = getFilteredProducts();

  // Sort products
  const getSortedProducts = (productsList) => {
    const sorted = [...productsList];
    if (sortBy === 'name-asc') {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-desc') {
      sorted.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === 'price-asc') {
      sorted.sort((a, b) => getNumericalPrice(a.price) - getNumericalPrice(b.price));
    } else if (sortBy === 'price-desc') {
      sorted.sort((a, b) => getNumericalPrice(b.price) - getNumericalPrice(a.price));
    }
    return sorted;
  };

  const displayProducts = getSortedProducts(filteredProducts);

  // Compute category counts for sidebar under current search filter
  const getCategoryCount = (categoryName) => {
    if (categoryName === 'All') {
      return allProducts.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase())).length;
    }
    const cat = productCategories.find(c => c.category === categoryName);
    if (!cat) return 0;
    return cat.products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase())).length;
  };

  // Dynamic list of categories that have matches under current search
  const visibleCategories = productCategories.filter(cat => getCategoryCount(cat.category) > 0);

  return (
    <div className="product-catalog-page">
      <div className="catalog-header">
        <div className="container header-container">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="header-badge"
          >
            <Sparkles size={14} className="badge-icon" />
            <span>Digital Showroom</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            Product Catalog
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle"
          >
            Explore premium quality wholesale packaging & eco-friendly hygiene products.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="search-wrapper"
          >
            <div className="search-bar">
              <Search className="search-icon" size={20} />
              <input 
                type="text" 
                placeholder="Search premium packaging, cups, bags..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button 
                  className="clear-search-btn" 
                  onClick={() => setSearchTerm('')}
                  aria-label="Clear Search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Popular Searches / Suggestion Chips */}
            <div className="search-suggestions">
              <span className="suggestion-label">Try searching:</span>
              <div className="suggestion-chips">
                {suggestionChips.map(chip => {
                  const isActive = searchTerm.toLowerCase() === chip.toLowerCase();
                  return (
                    <button
                      key={chip}
                      className={`suggestion-chip ${isActive ? 'active' : ''}`}
                      onClick={() => setSearchTerm(isActive ? '' : chip)}
                    >
                      {chip}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container catalog-container">
        {/* Adaptive sidebar: Sticky vertical layout on desktop, horizontal swiper on mobile */}
        <aside className="catalog-sidebar">
          <div className="sidebar-header">
            <h3>Categories</h3>
          </div>
          <ul className="category-list">
            <li 
              className={activeCategory === 'All' ? 'active' : ''}
              onClick={() => setActiveCategory('All')}
            >
              <span className="category-name">All Products</span>
              <span className="count">{getCategoryCount('All')}</span>
            </li>
            {productCategories.map((cat) => {
              const count = getCategoryCount(cat.category);
              // Only display categories with items matching the search if searching
              if (searchTerm && count === 0) return null;
              
              return (
                <li 
                  key={cat.category}
                  className={activeCategory === cat.category ? 'active' : ''}
                  onClick={() => setActiveCategory(cat.category)}
                >
                  <span className="category-name">{cat.category}</span>
                  <span className="count">{count}</span>
                </li>
              );
            })}
          </ul>
        </aside>

        <main className="catalog-content">
          {/* Controls Bar: view mode, count, sorting */}
          <div className="catalog-controls">
            <div className="results-count">
              Showing <span>{displayProducts.length}</span> {displayProducts.length === 1 ? 'product' : 'products'}
              {searchTerm && <> matching "<strong>{searchTerm}</strong>"</>}
            </div>
            
            <div className="controls-actions">
              {/* Sort selector */}
              <div className="sort-wrapper">
                <span className="control-label">Sort by</span>
                <div className="select-container">
                  <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="name-asc">Alphabetical (A - Z)</option>
                    <option value="name-desc">Alphabetical (Z - A)</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                  </select>
                  <ChevronDown className="select-arrow" size={16} />
                </div>
              </div>

              {/* View Switcher */}
              <div className="view-toggle">
                <button 
                  className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                  title="Grid View"
                >
                  <Grid size={18} />
                </button>
                <button 
                  className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                  title="List View"
                >
                  <List size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Product Listings */}
          <AnimatePresence mode="wait">
            {displayProducts.length > 0 ? (
              <motion.div 
                key={`${viewMode}-${activeCategory}-${searchTerm}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className={viewMode === 'grid' ? 'product-grid-detailed' : 'product-list-detailed'}
              >
                {displayProducts.map((product, idx) => (
                  <motion.div 
                    key={`${product.name}-${idx}`} 
                    className={viewMode === 'grid' ? 'product-card-detailed' : 'product-list-row'}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(idx * 0.03, 0.3), duration: 0.4 }}
                  >
                    {/* Image Section */}
                    <div className="product-image-wrapper">
                      <img 
                        src={product.image || product.categoryImage} 
                        alt={product.name} 
                        loading="lazy"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = product.categoryImage || '/images/default_product.png';
                        }}
                      />
                      {product.price && <span className="price-badge">{formatPrice(product.price)}</span>}
                    </div>

                    {/* Content Section */}
                    <div className="product-details">
                      <div className="product-header">
                        <span className="product-cat-tag">{product.categoryName}</span>
                        <h4>{product.name}</h4>
                      </div>
                      
                      <div className="product-meta">
                        <p className="uom">Unit: <strong>{product.uom || 'NOS'}</strong></p>
                        {viewMode === 'list' && product.price && (
                          <p className="list-price">Price: <strong>{formatPrice(product.price)}</strong></p>
                        )}
                      </div>

                      <button 
                        className="btn btn-whatsapp-inquire" 
                        onClick={() => handleWhatsApp(product.name)}
                      >
                        <MessageCircle size={16} />
                        <span>Inquire Price</span>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="no-results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="no-results-panel"
              >
                <div className="no-results-icon-wrap">
                  <Search size={40} className="no-results-icon" />
                </div>
                <h2>No Products Found</h2>
                <p>We couldn't find any products matching your search query. Try typing another term or exploring our categories.</p>
                {searchTerm && (
                  <button className="btn btn-outline" onClick={() => setSearchTerm('')}>
                    Reset Search Filter
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default ProductCatalog;

