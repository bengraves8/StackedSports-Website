import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, MessageSquare, Mail, MessageCircle, Globe, Calendar, Users, BarChart } from 'lucide-react';
import LogoCarousel from '../components/carousel/LogoCarousel';
import StakdLogo from '../components/logos/StakdLogo';
import InsiderInboxLogo from '../components/logos/InsiderInboxLogo';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold mb-6">
                  Innovative Communication Solutions for Maximum Impact
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Transform how your organization connects with stakeholders through our cutting-edge engagement platforms.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => navigate('/products')}
                    className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
                  >
                    Explore Our Products
                  </button>
                  <button 
                    onClick={() => navigate('/request-demo')}
                    className="bg-secondary-400 text-black px-8 py-3 rounded-lg hover:bg-secondary-500 transition-colors font-medium"
                  >
                    Schedule a Demo
                  </button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://insiderinbox.co/wp-content/uploads/2025/02/Group-34.png"
                  alt="Insider Inbox Platform"
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Carousel Section */}
      <LogoCarousel />

      {/* Products Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Our Solutions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Stakd Card */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <StakdLogo className="w-12 h-12" />
                  <h3 className="text-2xl font-bold ml-4">Stakd</h3>
                </div>
                <div className="mb-6">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">What</h4>
                    <p className="text-gray-800">
                      Multi-channel messaging platform combining SMS, MMS, email, and web chat for comprehensive audience engagement.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">For</h4>
                    <p className="text-gray-800">
                      Tailored for <strong>small businesses</strong>, <strong>non-profits</strong>, and <strong>sports ticketing departments</strong> looking to enhance their communication strategy.
                    </p>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <MessageSquare className="h-5 w-5 text-green-600 mr-3" />
                    <span>Bulk SMS and MMS messaging</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 text-green-600 mr-3" />
                    <span>Email integration</span>
                  </li>
                  <li className="flex items-center">
                    <MessageCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span>One-to-one chat</span>
                  </li>
                  <li className="flex items-center">
                    <Globe className="h-5 w-5 text-green-600 mr-3" />
                    <span>Web chat functionality</span>
                  </li>
                </ul>
                <button 
                  onClick={() => navigate('/products/stakd')}
                  className="flex items-center text-primary-500 hover:text-primary-600"
                >
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>

              {/* Insider Inbox Card */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <InsiderInboxLogo className="w-12 h-12" />
                  <h3 className="text-2xl font-bold ml-4">Insider Inbox</h3>
                </div>
                <div className="mb-6">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">What</h4>
                    <p className="text-gray-800">
                      Exclusive content delivery and donor engagement platform with AI-powered communication tools.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">For</h4>
                    <p className="text-gray-800">
                      Designed specifically for <strong>athletic departments</strong>, <strong>development teams</strong>, and <strong>coaches</strong> seeking to enhance donor relationships.
                    </p>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <Calendar className="h-5 w-5 text-green-600 mr-3" />
                    <span>Turnkey communication strategy</span>
                  </li>
                  <li className="flex items-center">
                    <Users className="h-5 w-5 text-green-600 mr-3" />
                    <span>Collaborative platform</span>
                  </li>
                  <li className="flex items-center">
                    <MessageCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span>Scalable engagement</span>
                  </li>
                  <li className="flex items-center">
                    <BarChart className="h-5 w-5 text-green-600 mr-3" />
                    <span>Performance analytics</span>
                  </li>
                </ul>
                <button 
                  onClick={() => navigate('/products/insider-inbox')}
                  className="flex items-center text-primary-500 hover:text-primary-600"
                >
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Organization?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join the leading organizations using Stacked Sports solutions to drive engagement and growth.
            </p>
            <button 
              onClick={() => navigate('/request-demo')}
              className="bg-secondary-400 text-black px-8 py-3 rounded-lg hover:bg-secondary-500 transition-colors"
            >
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;