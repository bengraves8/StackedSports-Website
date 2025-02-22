import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import RequestDemo from './pages/RequestDemo';
import RecruitSuite from './pages/RecruitSuite';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CaseStudies from './pages/CaseStudies';
import CaseStudyDetail from './pages/CaseStudyDetail';
import ScrollToTop from './components/ScrollToTop';
import Inspiration from './pages/Inspiration';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductDetail />} />
            <Route path="recruitsuite" element={<RecruitSuite />} />
            <Route path="case-studies" element={<CaseStudies />} />
            <Route path="case-studies/:id" element={<CaseStudyDetail />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="request-demo" element={<RequestDemo />} />
            <Route path="inspiration" element={<Inspiration />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;