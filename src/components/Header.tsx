import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, MessageCircle, BarChart2, Trophy } from 'lucide-react';
import StakdLogo from './logos/StakdLogo';
import InsiderInboxLogo from './logos/InsiderInboxLogo';
import RecruitSuiteLogo from './logos/RecruitSuiteLogo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleDemoRequest = () => {
    navigate('/request-demo');
  };

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="https://insiderinbox.co/wp-content/uploads/2025/02/S-favicon-Stacked-Sports.svg" 
              alt="Stacked Sports Logo" 
              className="w-10 h-10"
            />
            <span className="ml-2 text-xl font-bold text-gray-900">Stacked Sports</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-gray-900 font-medium">Home</Link>
            
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button
                className="flex items-center text-gray-600 hover:text-gray-900 font-medium"
              >
                Products
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 mt-2 w-[400px] bg-white rounded-lg shadow-lg border border-gray-100 py-4 transition-opacity duration-150 ${
                  isProductsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
              >
                <div className="px-4 pb-2 mb-2 border-b border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-500">Our Products</h3>
                </div>
                
                {/* Insider Inbox */}
                <Link 
                  to="/products/insider-inbox"
                  className="flex items-start px-4 py-3 hover:bg-gray-50"
                >
                  <div className="flex-shrink-0">
                    <InsiderInboxLogo className="w-8 h-8" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-semibold text-gray-900">Insider Inbox</h4>
                    <p className="text-sm text-gray-500">
                      Personalized communication platform for athletic programs
                    </p>
                  </div>
                </Link>

                {/* Stakd */}
                <Link 
                  to="/products/stakd"
                  className="flex items-start px-4 py-3 hover:bg-gray-50"
                >
                  <div className="flex-shrink-0">
                    <StakdLogo className="w-8 h-8" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-sm font-semibold text-gray-900">Stakd</h4>
                    <p className="text-sm text-gray-500">
                      Communication platform for businesses and non-profits
                    </p>
                  </div>
                </Link>

                {/* RecruitSuite - Legacy */}
                <div className="px-4 py-3 opacity-75">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <RecruitSuiteLogo className="w-8 h-8" />
                    </div>
                    <div className="ml-4">
                      <div className="flex items-center">
                        <h4 className="text-sm font-semibold text-gray-900">RecruitSuite</h4>
                        <span className="ml-2 px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                          Legacy
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">
                        Now part of Teamworks.com
                      </p>
                    </div>
                  </div>
                </div>

                {/* View All Products */}
                <div className="px-4 pt-2 mt-2 border-t border-gray-100">
                  <Link 
                    to="/products"
                    className="inline-flex items-center text-sm font-medium text-primary-500 hover:text-primary-600"
                  >
                    View All Products
                  </Link>
                </div>
              </div>
            </div>

            <Link to="/about" className="text-gray-600 hover:text-gray-900 font-medium">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900 font-medium">Contact</Link>
            <button 
              onClick={handleDemoRequest}
              className="bg-secondary-400 text-black px-6 py-2 rounded-md hover:bg-secondary-500 transition-colors font-medium"
            >
              Get a Demo
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-600 hover:text-gray-900 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <div className="space-y-2">
                <Link 
                  to="/products" 
                  className="text-gray-600 hover:text-gray-900 py-2 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Products
                </Link>
                <div className="pl-4 space-y-4">
                  <div>
                    <Link 
                      to="/products/insider-inbox"
                      className="block text-sm text-gray-600 hover:text-gray-900 py-1 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Insider Inbox
                    </Link>
                    <p className="text-xs text-gray-500 mt-1">
                      Personalized communication platform for athletic programs
                    </p>
                  </div>
                  <div>
                    <Link 
                      to="/products/stakd"
                      className="block text-sm text-gray-600 hover:text-gray-900 py-1 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Stakd
                    </Link>
                    <p className="text-xs text-gray-500 mt-1">
                      Communication platform for businesses and non-profits
                    </p>
                  </div>
                </div>
              </div>
              <Link 
                to="/about" 
                className="text-gray-600 hover:text-gray-900 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-600 hover:text-gray-900 py-2 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <button 
                onClick={() => {
                  handleDemoRequest();
                  setIsMenuOpen(false);
                }}
                className="w-full bg-secondary-400 text-black px-4 py-2 rounded-md hover:bg-secondary-500 transition-colors font-medium"
              >
                Get a Demo
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;