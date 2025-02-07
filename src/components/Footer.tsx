import React from 'react';
import { Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import StakdLogo from './logos/StakdLogo';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <StakdLogo className="w-8 h-8" />
              <h3 className="text-xl font-bold ml-2">Stacked Sports LLC</h3>
            </div>
            <p className="text-gray-400">
              Innovative engagement tools for donors and members in the sports industry.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-secondary-400">About Us</a></li>
              <li><a href="/products" className="text-gray-400 hover:text-secondary-400">Our Products</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-secondary-400">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-secondary-400" />
                <span className="text-gray-400">+1 615-538-0099</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-secondary-400" />
                <a href="mailto:info@stackedsports.com" className="text-gray-400 hover:text-secondary-400">
                  info@stackedsports.com
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-secondary-400" />
                <span className="text-gray-400">901 Woodland Street<br />Nashville, TN 37206</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://x.com/StakdApp" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-secondary-400">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/insider-inbox/?viewAsMember=true" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-secondary-400">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Stacked Sports LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;