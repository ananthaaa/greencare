import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, FileText, ArrowRight } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    product: '',
    quantity: '',
    message: '',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `*New Inquiry from Greencare Website*
Name: ${formData.name}
Business: ${formData.businessName}
Phone: ${formData.phone}
Email: ${formData.email}
Product Required: ${formData.product}
Quantity: ${formData.quantity}
Message: ${formData.message}`;
    window.open(`https://wa.me/919072112316?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="contact section-padding" id="contact">
      <div className="container">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge badge-primary" style={{ marginBottom: '14px' }}>Get In Touch</span>
          <h2 className="section-title">
            Request a{' '}
            <span className="serif-accent" style={{ color: 'var(--primary)' }}>Quote</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Tell us what you need and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="contact__wrapper">

          {/* Info card */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact__info-header">
              <h3>Contact Information</h3>
              <p>Fill out the form and our team will get back to you within 24 hours.</p>
            </div>

            <div className="contact__info-items">
              {[
                { icon: <Phone size={20} />, label: 'Call / WhatsApp', value: '+91 9072112316' },
                { icon: <Mail size={20} />, label: 'Email', value: 'greencare2003@gmail.com' },
                { icon: <MapPin size={20} />, label: 'Address', value: 'KK Road, Opp Indian Oil Pump, Chempumukku' },
                { icon: <FileText size={20} />, label: 'GST Number', value: '32CKCPTO619N1Z0' },
              ].map((item) => (
                <div key={item.label} className="contact__info-item">
                  <div className="contact__info-icon">{item.icon}</div>
                  <div>
                    <h4>{item.label}</h4>
                    <p>{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact__catalog">
              <h4>Want to see all our products?</h4>
              <a
                href="/greencare.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn"
                style={{
                  background: 'rgba(153,235,180,0.12)',
                  color: 'var(--accent-mint)',
                  border: '1px solid rgba(153,235,180,0.25)',
                  width: '100%',
                  justifyContent: 'center',
                  gap: '8px',
                }}
              >
                Download Catalog <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

          {/* Form card */}
          <motion.div
            className="contact__form-card"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form onSubmit={handleSubmit} className="inquiry-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name *</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label>Business Name *</label>
                  <input type="text" name="businessName" required value={formData.businessName} onChange={handleChange} placeholder="Your Restaurant" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+91 98765 43210" />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@business.com" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Product Requirement *</label>
                  <input type="text" name="product" required value={formData.product} onChange={handleChange} placeholder="e.g. 500ml Meal Boxes" />
                </div>
                <div className="form-group">
                  <label>Quantity *</label>
                  <input type="text" name="quantity" required value={formData.quantity} onChange={handleChange} placeholder="e.g. 1000 pcs" />
                </div>
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea name="message" rows={4} value={formData.message} onChange={handleChange} placeholder="Any additional details..." />
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Send Inquiry via WhatsApp <ArrowRight size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
