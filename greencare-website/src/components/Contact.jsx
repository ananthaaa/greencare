import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, FileText } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    product: '',
    quantity: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Format message for WhatsApp
    const text = `*New Inquiry from Greencare Website*
Name: ${formData.name}
Business: ${formData.businessName}
Phone: ${formData.phone}
Email: ${formData.email}
Product Required: ${formData.product}
Quantity: ${formData.quantity}
Message: ${formData.message}`;
    
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919072112316?text=${encodedText}`, '_blank');
  };

  return (
    <section className="contact section-padding" id="contact">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">Request a quote or download our full product catalog</p>
        </div>

        <div className="contact-wrapper">
          <motion.div 
            className="contact-info-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Contact Information</h3>
            <p className="mb-8 text-gray">Fill up the form and our Team will get back to you within 24 hours.</p>
            
            <div className="info-item">
              <div className="info-icon"><Phone size={20} /></div>
              <div>
                <h4>Call / WhatsApp</h4>
                <p>+91 9072112316</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><Mail size={20} /></div>
              <div>
                <h4>Email</h4>
                <p>greencarepacks@gmail.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><MapPin size={20} /></div>
              <div>
                <h4>Address</h4>
                <p>KK Road, Opp Indian Oil Pump, Chempumukku</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><FileText size={20} /></div>
              <div>
                <h4>GST Number</h4>
                <p>32APYPJ7697H1Z1</p>
              </div>
            </div>

            <div className="catalog-download mt-8">
              <h4>Want to see all our products?</h4>
              <a href="#" className="btn btn-outline" style={{ marginTop: '10px', width: '100%' }}>
                Download PDF Catalog
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="inquiry-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name *</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Business Name *</label>
                  <input type="text" name="businessName" required value={formData.businessName} onChange={handleChange} />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Product Requirement *</label>
                  <input type="text" name="product" required placeholder="e.g. 500ml Meal Boxes" value={formData.product} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Quantity *</label>
                  <input type="text" name="quantity" required placeholder="e.g. 1000 pcs" value={formData.quantity} onChange={handleChange} />
                </div>
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea name="message" rows="4" value={formData.message} onChange={handleChange}></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Send Inquiry via WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
