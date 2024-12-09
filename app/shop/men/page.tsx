// pages/men.tsx

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const MenPage = () => {
  const products = [
    {
      id: 1,
      name: 'One Life Graphic T-shirt',
      price: 260,
      imageSrc: '/topsales/green.png',
      originalPrice: 300,
    },
    {
      id: 2,
      name: 'Stylish Jeans',
      price: 150,
      imageSrc: '/topsales/blackjeans.png',
      originalPrice: 200,
    },
    {
      id: 3,
      name: 'Rust T-Shirt',
      price: 220,
      imageSrc: '/topsales/rust.png',
      originalPrice: 280,
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Men's Collection</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={product.imageSrc}
              alt={product.name}
              width={500}
              height={500}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600 text-sm">{product.name}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-lg font-bold">${product.price}</span>
                <span className="text-sm line-through text-gray-500">${product.originalPrice}</span>
              </div>
              <Link href={`/product/${product.id}`} className="mt-4 block bg-black text-white text-center py-2 rounded-md hover:bg-gray-800">
                  View Product
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenPage;
