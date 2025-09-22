import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif mb-4">
              The <span className="text-yellow-500">Saffron</span> Table
            </h3>
            <p className="text-gray-300 mb-4">
              Experience the future of Indian cuisine. We blend traditional flavors with contemporary culinary techniques in an unforgettable fine-dining setting.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-yellow-500" />
                <span className="text-gray-300">Koramangala, Bengaluru</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-yellow-500" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-yellow-500" />
                <span className="text-gray-300">info@saffrontable.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Opening Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock size={18} className="text-yellow-500" />
                <div className="text-gray-300">
                  <p>Mon - Thu: 12:00 PM - 11:00 PM</p>
                  <p>Fri - Sun: 12:00 PM - 12:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 The Saffron Table. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;