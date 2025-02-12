import React from 'react';
import { Mail, Facebook, Twitter, Instagram, Github } from 'lucide-react';

const Footer = () => {
  return (
    <div className="w-full">
      {/* Newsletter Section - Sticky */}
      <div className="sticky top-0 bg-white shadow-lg rounded-lg mx-4 md:mx-8 lg:mx-16 my-8 p-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="space-y-2">
            <h3 className="text-2xl md:text-3xl font-bold">Stay Updated</h3>
            <p className="text-gray-600 text-sm md:text-base">Subscribe to our newsletter for the latest updates</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo Section */}
            <div className="space-y-4">
              <div className="text-2xl font-bold">LOGO</div>
              <p className="text-gray-400 text-sm md:text-base">
                Your trusted partner in innovation and excellence.
              </p>
            </div>

            {/* Quick Links Section with Social Media Below */}
            <div className="border-l border-gray-700 pl-8 space-y-8">
              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {['About Us', 'Services', 'Products', 'Contact'].map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact Us</h4>
              <div className="text-gray-400 space-y-2 text-sm md:text-base">
                <p>123 Business Street</p>
                <p>New York, NY 10001</p>
                <p>contact@example.com</p>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
          {/* Social Media Section */}
          <div className="border-t border-b border-gray-700 py-4">
                <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {[
                    { Icon: Facebook, label: 'Facebook' },
                    { Icon: Twitter, label: 'Twitter' },
                    { Icon: Instagram, label: 'Instagram' },
                    { Icon: Github, label: 'Github' }
                  ].map(({ Icon, label }, index, arr) => (
                    <div
                      key={label}
                      className={`flex-1 flex justify-center ${
                        index !== arr.length - 1 ? 'border-r border-gray-700' : ''
                      }`}
                    >
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors p-2"
                        aria-label={label}
                      >
                        <Icon size={24} />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm mt-8 pt-6  border-gray-700">
            © {new Date().getFullYear()} Your Company. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;