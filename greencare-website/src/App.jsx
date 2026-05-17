import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Products from './components/Products';
import IndustriesServed from './components/IndustriesServed';
import CustomBranding from './components/CustomBranding';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductCatalog from './pages/ProductCatalog';

// The main landing page view
const Home = () => (
  <main>
    <Hero />
    <About />
    <Features />
    <Products />
    <IndustriesServed />
    <CustomBranding />
    <Contact />
  </main>
);

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductCatalog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
