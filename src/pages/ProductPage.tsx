import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ShoppingCart } from 'lucide-react';
import { products } from '../data/products';
import ProductGallery from '../components/ProductGallery';
import { useCart } from '../contexts/CartContext';
import { useConfig } from '../contexts/ConfigContext';

export default function ProductPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useCart();
  const { config } = useConfig();

  const product = products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">商品未找到</h2>
          <button
            onClick={() => navigate('/')}
            className="mt-4 text-green-800 hover:text-green-700"
          >
            返回首页
          </button>
        </div>
      </div>
    );
  }

  // Generate additional product images for the gallery
  const productImages = [
    product.image,
    ...Array(7).fill(null).map((_, i) => 
      `${product.image}?v=${i + 1}`
    )
  ];

  const addToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-green-800 hover:text-green-700 mb-8"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          返回
        </button>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Gallery */}
            <ProductGallery images={productImages} />

            {/* Product Information */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              {config.showPrices && (
                <p className="text-2xl font-bold text-green-800 mb-6">¥{product.price}</p>
              )}
              
              <div className="space-y-8">
                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">商品简介</h2>
                  <p className="text-gray-600">{product.description}</p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">功效</h2>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    {product.benefits?.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">使用指南</h2>
                  <div className="prose text-gray-600">
                    {product.usage?.map((step, index) => (
                      <p key={index} className="mb-2">{step}</p>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">生产信息</h2>
                  <div className="grid grid-cols-2 gap-4 text-gray-600">
                    <div>
                      <span className="font-medium">生产日期：</span>
                      {product.productionDate}
                    </div>
                    <div>
                      <span className="font-medium">保质期：</span>
                      {product.shelfLife}
                    </div>
                    <div>
                      <span className="font-medium">产地：</span>
                      {product.origin}
                    </div>
                    <div>
                      <span className="font-medium">储存方法：</span>
                      {product.storage}
                    </div>
                  </div>
                </section>

                <button
                  onClick={addToCart}
                  className="w-full bg-green-800 text-white py-3 px-4 rounded-md hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  加入购物车
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}