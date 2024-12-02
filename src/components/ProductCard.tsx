import React from 'react';
import { Product } from '../types/product';
import { useCart } from '../contexts/CartContext';
import { useConfig } from '../contexts/ConfigContext';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart();
  const { config } = useConfig();

  const addToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <p className="mt-1 text-gray-600">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          {config.showPrices ? (
            <span className="text-xl font-bold text-green-800">¥{product.price}</span>
          ) : (
            <span className="text-xl font-bold text-green-800">价格详询</span>
          )}
          <button 
            onClick={addToCart}
            className="bg-green-800 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center gap-2"
          >
            <ShoppingCart className="h-5 w-5" />
            加入购物车
          </button>
        </div>
      </div>
    </div>
  );
}