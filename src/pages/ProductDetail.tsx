import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();

  // In a real application, you would fetch product details based on the ID
  const product = id === 'stakd' ? stakdDetails : insiderInboxDetails;

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">{product.name}</h1>
          <p className="text-xl text-gray-600 mb-12">{product.description}</p>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {product.features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700"
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
  description: 'A comprehensive donor management platform designed specifically for athletic departments.',
  features: [
    {
      title: 'Donor Management',
      description: 'Efficiently manage donor relationships and track engagement.'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Powerful insights into donor behavior and giving patterns.'
    },
    {
      title: 'Campaign Management',
      description: 'Create and track fundraising campaigns with ease.'
    },
    {
      title: 'Integration Capabilities',
      description: 'Seamlessly connect with your existing tools and systems.'
    }
  ],
  link: 'https://stakd.co'
};

const insiderInboxDetails = {
  name: 'Insider Inbox',
  description: 'Revolutionary communication platform connecting athletic departments with their members.',
  features: [
    {
      title: 'Direct Messaging',
      description: 'Secure and efficient communication between staff and members.'
    },
    {
      title: 'Engagement Tools',
      description: 'Built-in features to drive and measure member engagement.'
    },
    {
      title: 'Analytics',
      description: 'Track communication effectiveness and member engagement.'
    },
    {
      title: 'Security',
      description: 'Enterprise-grade security for all communications.'
    }
  ],
  link: 'https://insiderinbox.co'
};

export default ProductDetail;