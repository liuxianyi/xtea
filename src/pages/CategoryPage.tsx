import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { Product } from '../types/product';

interface LocationState {
  products: Product[];
  title: string;
  description: string;
}

export default function CategoryPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { products, title, description } = location.state as LocationState;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-green-800 hover:text-green-700 mb-8"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          返回
        </button>

        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          <p className="mt-4 text-xl text-gray-600">{description}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}