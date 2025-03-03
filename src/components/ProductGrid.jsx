import React from 'react';
import { Search } from 'lucide-react';

const products = [
  {
    id: '1',
    name: 'Premium Cement',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?ixlib=rb-4.0.3',
  },
  {
    id: '2',
    name: 'Steel Rebar Bundle',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1516972810927-80185027ca84?ixlib=rb-4.0.3',
  },
  {
    id: '3',
    name: 'Ceramic Tiles',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-4.0.3',
  },
  // Add more products as needed
];

export default function ProductGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Featured Products</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff7a00] focus:border-transparent"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
              <p className="text-[#ff7a00] font-bold mt-2">${product.price}</p>
              <button className="mt-4 w-full bg-[#114f9c] text-white py-2 rounded-lg hover:bg-[#0e4283] transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}