import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import RequestDemo from './pages/RequestDemo';
import RecruitSuite from './pages/RecruitSuite';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/insider-inbox" element={<ProductDetail />} />
            <Route path="/products/stakd" element={<ProductDetail />} />
            <Route path="/recruitsuite" element={<RecruitSuite />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/request-demo" element={<RequestDemo />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;