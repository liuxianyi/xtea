import React from 'react';
import { useCart } from '../contexts/CartContext';
import { useConfig } from '../contexts/ConfigContext';
import { Minus, Plus, Trash2 } from 'lucide-react';

export default function CartPage() {
  const { state, dispatch } = useCart();
  const { config } = useConfig();

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  if (state.items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">购物车</h2>
          <p className="text-gray-600">购物车是空的，快去选购商品吧！</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">购物车</h2>
      <div className="bg-white rounded-lg shadow">
        <div className="divide-y divide-gray-200">
          {state.items.map((item) => (
            <div key={item.id} className="p-6 flex items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="ml-6 flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                <p className="text-gray-600">{item.description}</p>
                {config.showPrices && (
                  <div className="mt-2 text-green-800 font-semibold">¥{item.price}</div>
                )}
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 rounded-md hover:bg-gray-100"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 rounded-md hover:bg-gray-100"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-md"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="p-6 bg-gray-50 rounded-b-lg">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">总计：</span>
            {config.showPrices ? (
              <span className="text-2xl font-bold text-green-800">¥{state.total}</span>
            ) : (
              <span className="text-2xl font-bold text-green-800">价格详询</span>
            )}
          </div>
          <button className="mt-4 w-full bg-green-800 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors">
            结算
          </button>
        </div>
      </div>
    </div>
  );
}