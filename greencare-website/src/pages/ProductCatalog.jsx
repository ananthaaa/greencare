import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Search, Grid, List, X, ChevronDown, Sparkles, Package, Droplets, Home } from 'lucide-react';
import { productCatalog, allProductsFlat } from '../data/productData';
import './ProductCatalog.css';

const MAIN_ICONS = {
  'Packing Materials': Package,
  'Cleaning Materials': Droplets,
  'Housekeeping Materials': Home,
};

const ProductCatalog = () => {
  const [activeMain, setActiveMain] = useState('All');
  const [activeSub, setActiveSub] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('name-asc');

  const handleWhatsApp = (productName) => {
    const message = `Hi, I am interested in ordering "${productName}" from your Greencare Catalog. Could you please provide bulk pricing and delivery options?`;
    window.open(`https://wa.me/919072112316?text=${encodeURIComponent(message)}`, '_blank');
  };

  const suggestionChips = ['Foil', 'Garbage Bag', 'Paper Cup', 'Gloves', 'Cleaner', 'Container'];

  // Helper: parse price for sorting
  const getNumericalPrice = (price) => {
    if (typeof price === 'number') return price;
    if (typeof price === 'string') {
      const parsed = parseFloat(price.split(',')[0].trim());
      return isNaN(parsed) ? 0 : parsed;
    }
    return 0;
  };

  // Helper: format price display
  const formatPrice = (price) => {
    if (!price && price !== 0) return 'Bulk Price';
    if (typeof price === 'number') return `₹${price % 1 === 0 ? price : price.toFixed(2)}`;
    if (typeof price === 'string') {
      if (price.includes(',')) {
        const parts = price.split(',');
        return `₹${parts[0]} – ₹${parts[parts.length - 1]}`;
      }
      return `₹${price}`;
    }
    return 'Bulk Price';
  };

  // Filtered + sorted products
  const displayProducts = useMemo(() => {
    let list = allProductsFlat;

    if (activeMain !== 'All') {
      list = list.filter(p => p.mainCategory === activeMain);
    }
    if (activeSub !== 'All') {
      list = list.filter(p => p.subCategory === activeSub);
    }
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.subCategory.toLowerCase().includes(q) ||
        p.mainCategory.toLowerCase().includes(q)
      );
    }

    const sorted = [...list];
    if (sortBy === 'name-asc') sorted.sort((a, b) => a.name.localeCompare(b.name));
    else if (sortBy === 'name-desc') sorted.sort((a, b) => b.name.localeCompare(a.name));
    else if (sortBy === 'price-asc') sorted.sort((a, b) => getNumericalPrice(a.price) - getNumericalPrice(b.price));
    else if (sortBy === 'price-desc') sorted.sort((a, b) => getNumericalPrice(b.price) - getNumericalPrice(a.price));

    return sorted;
  }, [activeMain, activeSub, searchTerm, sortBy]);

  // Count helper (respects search)
  const countForFilter = (mainCat, subCat) => {
    let list = allProductsFlat;
    if (mainCat && mainCat !== 'All') list = list.filter(p => p.mainCategory === mainCat);
    if (subCat && subCat !== 'All') list = list.filter(p => p.subCategory === subCat);
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      list = list.filter(p => p.name.toLowerCase().includes(q));
    }
    return list.length;
  };

  // Sub-categories to show in sidebar (based on active main)
  const sidebarData = useMemo(() => {
    if (activeMain === 'All') return productCatalog;
    const main = productCatalog.find(m => m.mainCategory === activeMain);
    return main ? [main] : [];
  }, [activeMain]);

  const handleMainClick = (name) => {
    setActiveMain(name);
    setActiveSub('All');
  };

  const handleSubClick = (subName) => {
    setActiveSub(subName);
  };

  return (
    <div className="product-catalog-page">
      {/* ── Header ─────────────────────────────────────────── */}
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
            Explore premium quality wholesale packaging &amp; eco-friendly hygiene products.
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
                placeholder="Search packaging, cups, bags, cleaners…"
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

      {/* ── Main Category Tabs ──────────────────────────────── */}
      <div className="main-cat-tabs-wrapper">
        <div className="container main-cat-tabs">
          {['All', ...productCatalog.map(m => m.mainCategory)].map(name => {
            const Icon = MAIN_ICONS[name];
            const count = countForFilter(name === 'All' ? 'All' : name, 'All');
            return (
              <button
                key={name}
                className={`main-cat-tab ${activeMain === name ? 'active' : ''}`}
                onClick={() => handleMainClick(name)}
              >
                {Icon && <Icon size={16} />}
                <span>{name === 'All' ? 'All Products' : name}</span>
                <span className="tab-count">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Catalog Body ────────────────────────────────────── */}
      <div className="container catalog-container">
        {/* Sidebar */}
        <aside className="catalog-sidebar">
          <div className="sidebar-header">
            <h3>Categories</h3>
          </div>
          <ul className="category-list">
            {/* All item */}
            <li
              className={activeSub === 'All' && activeMain === 'All' ? 'active' : ''}
              onClick={() => { setActiveMain('All'); setActiveSub('All'); }}
            >
              <span className="category-name">All Products</span>
              <span className="count">{countForFilter('All', 'All')}</span>
            </li>

            {/* Sub-categories grouped by main */}
            {sidebarData.map(main => (
              <React.Fragment key={main.mainCategory}>
                {/* Main category header row */}
                <li
                  className={`sidebar-main-header ${activeMain === main.mainCategory && activeSub === 'All' ? 'active' : ''}`}
                  onClick={() => handleMainClick(main.mainCategory)}
                >
                  <span className="category-name sidebar-main-label">{main.mainCategory}</span>
                  <span className="count">{countForFilter(main.mainCategory, 'All')}</span>
                </li>

                {/* Sub-category items */}
                {main.subCategories.map(sub => {
                  const cnt = countForFilter(main.mainCategory, sub.name);
                  if (searchTerm && cnt === 0) return null;
                  return (
                    <li
                      key={sub.name}
                      className={`sidebar-sub-item ${activeSub === sub.name && activeMain === main.mainCategory ? 'active' : ''}`}
                      onClick={() => { setActiveMain(main.mainCategory); handleSubClick(sub.name); }}
                    >
                      <span className="category-name">{sub.name}</span>
                      <span className="count">{cnt}</span>
                    </li>
                  );
                })}
              </React.Fragment>
            ))}
          </ul>
        </aside>

        {/* Main content */}
        <main className="catalog-content">
          {/* Controls */}
          <div className="catalog-controls">
            <div className="results-count">
              Showing <span>{displayProducts.length}</span>{' '}
              {displayProducts.length === 1 ? 'product' : 'products'}
              {searchTerm && <> matching "<strong>{searchTerm}</strong>"</>}
              {activeSub !== 'All' && <> in <strong>{activeSub}</strong></>}
            </div>

            <div className="controls-actions">
              <div className="sort-wrapper">
                <span className="control-label">Sort by</span>
                <div className="select-container">
                  <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="name-asc">Alphabetical (A – Z)</option>
                    <option value="name-desc">Alphabetical (Z – A)</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                  </select>
                  <ChevronDown className="select-arrow" size={16} />
                </div>
              </div>

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

          {/* Product Grid / List */}
          <AnimatePresence mode="wait">
            {displayProducts.length > 0 ? (
              <motion.div
                key={`${viewMode}-${activeMain}-${activeSub}-${searchTerm}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className={viewMode === 'grid' ? 'product-grid-detailed' : 'product-list-detailed'}
              >
                {displayProducts.map((product, idx) => (
                  <motion.div
                    key={`${product.mainCategory}-${product.subCategory}-${product.name}-${idx}`}
                    className={viewMode === 'grid' ? 'product-card-detailed' : 'product-list-row'}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: Math.min(idx * 0.025, 0.3), duration: 0.4 }}
                  >
                    {/* Image */}
                    <div className="product-image-wrapper">
                      <img
                        src={product.image || product.fallbackImage}
                        alt={product.name}
                        loading="lazy"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = product.fallbackImage || '/images/default_product.png';
                        }}
                      />
                      {product.price && (
                        <span className="price-badge">{formatPrice(product.price)}</span>
                      )}
                    </div>

                    {/* Info */}
                    <div className="product-details">
                      <div className="product-header">
                        <span className="product-cat-tag">{product.subCategory}</span>
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
                  <Search size={40} />
                </div>
                <h2>No Products Found</h2>
                <p>
                  We couldn't find any products matching your search. Try another term or browse
                  our categories.
                </p>
                {(searchTerm || activeSub !== 'All') && (
                  <button
                    className="btn btn-outline"
                    onClick={() => { setSearchTerm(''); setActiveSub('All'); setActiveMain('All'); }}
                  >
                    Reset Filters
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
