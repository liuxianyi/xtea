import React from 'react';
import { ShoppingCart, Menu } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: 'home' | 'contact') => void;
  currentPage: 'home' | 'contact';
}

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  return (
    <nav className="bg-green-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span 
              className="text-xl font-semibold cursor-pointer"
              onClick={() => onNavigate('home')}
            >
              茶叶山货
            </span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => onNavigate('home')}
                className={`hover:bg-green-700 px-3 py-2 rounded-md ${
                  currentPage === 'home' ? 'bg-green-700' : ''
                }`}
              >
                首页
              </button>
              <button 
                onClick={() => onNavigate('contact')}
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
            <button className="p-2 hover:bg-green-700 rounded-full">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}