import React, { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface NavbarProps {
  onNavigate: (page: 'home' | 'contact' | 'cart') => void;
  currentPage: 'home' | 'contact' | 'cart';
}

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { state } = useCart();

  const handleNavigate = (page: 'home' | 'contact' | 'cart') => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  const cartItemCount = state.items.reduce((total, item) => total + item.quantity, 0);

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
              <button 
                onClick={() => handleNavigate('cart')}
                className={`p-2 hover:bg-green-700 rounded-full relative ${
                  currentPage === 'cart' ? 'bg-green-700' : ''
                }`}
              >
                <ShoppingCart className="h-6 w-6" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
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
          <button 
            onClick={() => handleNavigate('cart')}
            className={`block w-full text-left px-3 py-2 rounded-md ${
              currentPage === 'cart' ? 'bg-green-700' : 'hover:bg-green-700'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <ShoppingCart className="h-6 w-6 mr-2" />
                购物车
              </div>
              {cartItemCount > 0 && (
                <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}