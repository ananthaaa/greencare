import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Products.css';

const categories = [
  {
    name: 'Food Containers & Boxes',
    image: '/images/FoodContainers.png',
    description: 'Aluminium trays, plastic containers, meal boxes, and foil solutions for all food types.',
    count: '80+ SKUs',
    link: '/products?cat=Food+Containers'
  },
  {
    name: 'Paper & Cups',
    image: '/images/PaperCups.png',
    description: 'Eco-friendly paper cups, glasses, soup bowls, and recyclable packaging alternatives.',
    count: '60+ SKUs',
    link: '/products?cat=Paper+Products'
  },
  {
    name: 'Bags & Wraps',
    image: '/images/bags_wraps.png',
    description: 'Kraft paper bags, carry bags, tissue paper, and stretch wraps for every order.',
    count: '50+ SKUs',
    link: '/products?cat=Bags'
  },
  {
    name: 'Tableware & Hygiene',
    image: '/images/TablewareHygiene.png',
    description: 'Disposable plates, cutlery, straws, gloves, and essential hygiene supplies.',
    count: '70+ SKUs',
    link: '/products?cat=Tableware'
  },
  {
    name: 'PET & Specialty Packs',
    image: '/images/PET.png',
    description: 'Crystal-clear PET containers, domes, clamshells, and speciality dessert boxes.',
    count: '40+ SKUs',
    link: '/products?cat=PET+Packaging'
  },
  {
    name: 'Custom Branding',
    image: '/images/custombranding.png',
    description: 'Logo printing on cups, bags, boxes, and packaging — elevate your brand presence.',
    count: 'On Request',
    link: '/#custom-printing'
  },
];

const cardVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }
  })
};

const Products = () => {
  return (
    <section className="products section-padding" id="products">
      <div className="container">

        {/* Header */}
        <motion.div
          className="products__header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="products__header-left">
            <span className="badge badge-primary">Our Range</span>
            <h2 className="section-title" style={{ marginTop: '14px' }}>
              Packaging for{' '}
              <span className="serif-accent" style={{ color: 'var(--primary)' }}>Every</span>
              {' '}Business
            </h2>
            <p className="section-subtitle">
              From meal boxes to custom branded cups — explore our comprehensive range of
              food-grade packaging solutions designed for Kerala's F&amp;B industry.
            </p>
          </div>
          <Link to="/products" className="btn btn-outline products__header-cta">
            Full Catalog <ArrowRight size={16} />
          </Link>
        </motion.div>

        {/* Bento grid */}
        <div className="products__grid">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              className="products__card"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              whileHover={{ y: -6, transition: { duration: 0.3, ease: 'easeOut' } }}
            >
              {/* Image */}
              <div className="products__card-img-wrap">
                <img src={cat.image} alt={cat.name} className="products__card-img" loading="lazy" />
                <div className="products__card-img-overlay" />
                <span className="products__card-count">{cat.count}</span>
              </div>

              {/* Info */}
              <div className="products__card-body">
                <h3 className="products__card-title">{cat.name}</h3>
                <p className="products__card-desc">{cat.description}</p>
                <Link
                  to={cat.link.startsWith('/products') ? cat.link : '/'}
                  href={cat.link}
                  className="products__card-link"
                >
                  Explore Range <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;
