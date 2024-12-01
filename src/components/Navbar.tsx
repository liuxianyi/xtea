import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'contact') => void;
  currentPage: 'home' | 'contact';
}

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigate = (page: 'home' | 'contact') => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-green-800 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span 
              className="text-xl font-semibold cursor-pointer"
              onClick={() => handleNavigate('home')}
            >
              茶叶山货
            </span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => handleNavigate('home')}
                className={`hover:bg-green-700 px-3 py-2 rounded-md ${
                  currentPage === 'home' ? 'bg-green-700' : ''
                }`}
              >
                首页
              </button>
              <button 
                onClick={() => handleNavigate('contact')}
                className={`hover:bg-green-700 px-3 py-2 rounded-md ${
                  currentPage === 'contact' ? 'bg-green-700' : ''
                }`}
              >
                联系方式
              </button>
              <button className="p-2 hover:bg-green-700 rounded-full">
                <ShoppingCart className="h-6 w-6" />
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button 
              className="p-2 hover:bg-green-700 rounded-full"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-green-800 shadow-lg absolute w-full z-50">
          <button
            onClick={() => handleNavigate('home')}
            className={`block w-full text-left px-3 py-2 rounded-md ${
              currentPage === 'home' ? 'bg-green-700' : 'hover:bg-green-700'
            }`}
          >
            首页
          </button>
          <button
            onClick={() => handleNavigate('contact')}
            className={`block w-full text-left px-3 py-2 rounded-md ${
              currentPage === 'contact' ? 'bg-green-700' : 'hover:bg-green-700'
            }`}
          >
            联系方式
          </button>
          <button className="block w-full text-left px-3 py-2 rounded-md hover:bg-green-700">
            <div className="flex items-center">
              <ShoppingCart className="h-6 w-6 mr-2" />
              购物车
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}