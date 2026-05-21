import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Star, Truck } from 'lucide-react';
import './About.css';

const cards = [
  {
    icon: <Target size={22} />,
    title: 'Our Mission',
    body: 'To deliver reliable, hygienic, and innovative food packaging solutions that support businesses in serving their customers better.',
  },
  {
    icon: <Eye size={22} />,
    title: 'Our Vision',
    body: 'To become one of the leading packaging solution providers in Kerala by offering quality products, excellent service, and customized branding support.',
  },

  {
    icon: <Star size={22} />,
    title: 'Core Values',
    list: ['Quality', 'Reliability', 'Innovation', 'Customer Satisfaction', 'Sustainability'],
  },
];

const About = () => (
  <section className="about section-padding" id="about">
    <div className="container">

      {/* Top row: headline + paragraph */}
      <div className="about__grid">
        <motion.div
          className="about__text"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <span className="badge badge-primary" style={{ marginBottom: '18px' }}>About Us</span>
          <h2 className="section-title">
            Trusted Partner for{' '}
            <span className="serif-accent" style={{ color: 'var(--primary)' }}>Premium</span>
            {' '}Packaging
          </h2>
          <p className="about__body">
            Greencare is a trusted supplier of food packaging and disposable solutions
            dedicated to providing high-quality packaging products for restaurants, cafés,
            bakeries, hotels, caterers, and food delivery businesses.
          </p>
          <p className="about__body">
            We offer a wide range of food-grade packaging materials including containers, meal
            boxes, paper products, PET packaging, hygiene products, kitchen essentials, and
            customized branding solutions.
          </p>
          <p className="about__body">
            With a strong commitment to quality, reliability, and customer satisfaction,
            Greencare helps businesses enhance their packaging standards while maintaining
            convenience and hygiene.
          </p>
          {/* Delivery highlight */}
          <div className="about__delivery-highlight">
            <div className="about__delivery-icon"><Truck size={18} /></div>
            <div>
              <strong>Delivery Available Across Kerala</strong>
              <p>All products are delivered at catalog rates — no price difference, no hidden costs. Order in bulk or as needed.</p>
            </div>
          </div>
        </motion.div>

        {/* Cards column */}
        <div className="about__cards">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              className={`about__card${c.highlight ? ' about__card--delivery' : ''}`}
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.15 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
            >
              <div className="about__card-icon">{c.icon}</div>
              <h3 className="about__card-title">{c.title}</h3>
              {c.body && <p className="about__card-body">{c.body}</p>}
              {c.list && (
                <ul className="about__values">
                  {c.list.map((v) => (
                    <li key={v}>
                      <span className="about__value-dot" />
                      {v}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats strip */}
      <motion.div
        className="about__stats"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {[
          { value: '500+', label: 'Products' },
          { value: '10+',  label: 'Categories' },
          { value: '1000+', label: 'Happy Clients' },
        ].map(({ value, label }) => (
          <div className="about__stat" key={label}>
            <span className="about__stat-value">{value}</span>
            <span className="about__stat-label">{label}</span>
          </div>
        ))}
      </motion.div>

    </div>
  </section>
);

export default About;
