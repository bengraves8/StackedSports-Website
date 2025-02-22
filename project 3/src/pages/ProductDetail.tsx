import React from 'react';
import { useParams } from 'react-router-dom';
import { BarChart2, Users, Target, Zap, MessageSquare, Database, LineChart, Lock, Brain, Calendar, Mail, Globe } from 'lucide-react';
import InsiderInboxLogo from '../components/logos/InsiderInboxLogo';
import StakdLogo from '../components/logos/StakdLogo';

const ProductDetail = () => {
  const { id } = useParams();

  // In a real application, you would fetch product details based on the ID
  const product = id === 'stakd' ? stakdDetails : insiderInboxDetails;

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-6">
            {id === 'stakd' ? (
              <StakdLogo className="w-12 h-12 mr-4" />
            ) : (
              <InsiderInboxLogo className="w-12 h-12 mr-4" />
            )}
            <h1 className="text-4xl font-bold">{product.name}</h1>
          </div>
          <p className="text-xl text-gray-600 mb-12">{product.description}</p>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {product.features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-green-50 p-2 rounded-lg">
                      {feature.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary-400 text-black px-8 py-3 rounded-md hover:bg-secondary-500 transition-colors font-medium"
            >
              Learn More About {product.name}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const stakdDetails = {
  name: 'Stakd',
  description: 'A comprehensive communication platform designed for small businesses, non-profits, and sports ticketing departments.',
  features: [
    {
      title: 'Bulk Messaging',
      description: 'Send SMS, MMS, and email messages to your entire audience or specific segments.',
      icon: <MessageSquare className="h-6 w-6 text-green-600" />
    },
    {
      title: 'Analytics Dashboard',
      description: 'Track engagement metrics and campaign performance in real-time.',
      icon: <BarChart2 className="h-6 w-6 text-green-600" />
    },
    {
      title: 'Web Chat Integration',
      description: 'Engage with website visitors through live chat functionality.',
      icon: <Globe className="h-6 w-6 text-green-600" />
    },
    {
      title: 'Email Campaigns',
      description: 'Create and manage sophisticated email marketing campaigns.',
      icon: <Mail className="h-6 w-6 text-green-600" />
    }
  ],
  link: 'https://stakd.co'
};

const insiderInboxDetails = {
  name: 'Insider Inbox',
  description: 'Revolutionary communication platform connecting athletic departments with their top supporters through exclusive content and personalized engagement.',
  features: [
    {
      title: 'AI-Powered Engagement',
      description: 'Leverage artificial intelligence to optimize communication timing and content.',
      icon: <Brain className="h-6 w-6 text-green-600" />
    },
    {
      title: 'Supporter Analytics',
      description: 'Track and analyze supporter engagement and behavior patterns.',
      icon: <LineChart className="h-6 w-6 text-green-600" />
    },
    {
      title: 'Content Calendar',
      description: 'Plan and schedule content delivery based on your athletic calendar.',
      icon: <Calendar className="h-6 w-6 text-green-600" />
    },
    {
      title: 'Secure Communications',
      description: 'Enterprise-grade security for all supporter communications.',
      icon: <Lock className="h-6 w-6 text-green-600" />
    }
  ],
  link: 'https://insiderinbox.co'
};

export default ProductDetail;