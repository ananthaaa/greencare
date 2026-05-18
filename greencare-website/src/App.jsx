import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import IndustriesServed from './components/IndustriesServed';
import CustomBranding from './components/CustomBranding';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductCatalog from './pages/ProductCatalog';
import WhatsAppFloat from './components/WhatsAppFloat';

function HomePage() {
  return (
    <>
      <Hero />
      <Products />
      <About />
      <IndustriesServed />
      <CustomBranding />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductCatalog />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
    </Router>
  );
}

export default App;
