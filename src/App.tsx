import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CategorySection from './components/CategorySection';
import ContactPage from './components/ContactPage';
import { categories, products } from './data/products';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'contact'>('home');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      
      {currentPage === 'home' ? (
        <>
          {/* Hero Section */}
          <div className="relative bg-green-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
              <h1 className="text-4xl font-bold mb-4">优质茶叶 · 精美包装 · 特色山货</h1>
              <p className="text-xl">精选优质产品，传承自然精华</p>
            </div>
          </div>

          {/* Product Categories */}
          {categories.map((category) => (
            <CategorySection
              key={category.id}
              title={category.name}
              description={category.description}
              products={products.filter((p) => p.category === category.id)}
            />
          ))}
        </>
      ) : (
        <ContactPage />
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2024 茶叶山货. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;