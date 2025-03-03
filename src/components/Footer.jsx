import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Praja<span className="text-[#ff7a00]">Materiais</span>
            </h3>
            <p className="text-gray-400">Your trusted partner in construction supplies since 1995.</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#ff7a00]" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#ff7a00]" />
                <span>info@prajamateriais.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#ff7a00]" />
                <span>123 Construction Ave, City</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#ff7a00]">About Us</a></li>
              <li><a href="#" className="hover:text-[#ff7a00]">Products</a></li>
              <li><a href="#" className="hover:text-[#ff7a00]">Services</a></li>
              <li><a href="#" className="hover:text-[#ff7a00]">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#ff7a00]">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#ff7a00]">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-[#ff7a00]">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Praja Materiais. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}