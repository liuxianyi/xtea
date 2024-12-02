import React, { useState } from 'react';
import { Product } from '../types/product';
import ProductCard from './ProductCard';
import { useNavigate } from 'react-router-dom';

interface CategorySectionProps {
  title: string;
  description: string;
  products: Product[];
}

export default function CategorySection({ title, description, products }: CategorySectionProps) {
  const [showExpanded, setShowExpanded] = useState(false);
  const navigate = useNavigate();
  
  const hasMore = products.length > 2;
  const hasEvenMore = products.length > 4;
  
  const getDisplayProducts = () => {
    if (!hasMore) return products;
    if (!showExpanded) return products.slice(0, 2);
    return products.slice(0, 4);
  };

  const handleMoreClick = () => {
    if (hasEvenMore && showExpanded) {
      // Navigate to category page with all products
      navigate(`/category/${products[0].category}`, { 
        state: { products, title, description } 
      });
    } else {
      setShowExpanded(!showExpanded);
    }
  };

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          <p className="mt-4 text-xl text-gray-600">{description}</p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {getDisplayProducts().map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {hasMore && (
          <div className="mt-8 text-center">
            <button
              onClick={handleMoreClick}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-800 hover:bg-green-700 transition-colors"
            >
              {!showExpanded && `查看更多${title} (${products.length - 2})`}
              {showExpanded && !hasEvenMore && '收起'}
              {showExpanded && hasEvenMore && `查看全部${title} (${products.length - 4})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}