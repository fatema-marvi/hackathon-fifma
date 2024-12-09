// pages/product/[id].tsx

import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

// Example data for a product (you can replace this with API data)
const products = [
  {
    id: 1,
    name: 'One Life Graphic T-shirt',
    price: 260,
    originalPrice: 300,
    description:
      'This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.',
    imageSrc: '/men/tshirt.jpg',
  },
  {
    id: 2,
    name: 'Stylish Jeans',
    price: 150,
    originalPrice: 200,
    description: 'Comfortable and stylish jeans for every occasion.',
    imageSrc: '/men/jeans.jpg',
  },
  {
    id: 3,
    name: 'Casual Jacket',
    price: 220,
    originalPrice: 280,
    description: 'A versatile casual jacket perfect for layering.',
    imageSrc: '/men/jacket.jpg',
  },
];

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const product = products.find((prod) => prod.id === Number(id));

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2">
          <Image
            src={product.imageSrc}
            alt={product.name}
            width={500}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-lg text-gray-700 mt-2">{product.description}</p>
          <div className="flex items-center justify-between mt-4">
            <span className="text-2xl font-semibold">${product.price}</span>
            <span className="text-sm line-through text-gray-500">${product.originalPrice}</span>
          </div>
          <div className="mt-6">
            <button className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
