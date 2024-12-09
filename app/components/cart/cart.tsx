"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FiShoppingCart, FiTrash2 } from 'react-icons/fi'; // Import icons
import Link from 'next/link';

const Cart = () => {
  // Example cart items, this could come from context or a state management library like Redux or Zustand
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Casual White Shirt',
      price: 29.99,
      quantity: 1,
      image: '/casuals/whiteshade.png',
    },
    {
      id: 2,
      name: 'Black Casual Jeans',
      price: 49.99,
      quantity: 2,
      image: '/casuals/white-black.png',
    },
  ]);

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="w-[90%] max-w-[1440px] mx-auto mt-12 p-14 bg-[#F0F0F0] rounded-2xl">
      {/* Heading */}
      <div className="text-center mb-6">
        <h1 className="font-IntegralCF text-4xl font-extrabold leading-[57.6px] my-12">Shopping Cart</h1>
      </div>

      {/* Cart Items List */}
      <div className="space-y-6">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center">
              <div className="relative w-[100px] h-[100px] mr-6">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">{item.name}</h3>
                <p className="text-sm text-gray-500">Price: ${item.price}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <button
                  onClick={() => setCartItems(cartItems.map(cartItem =>
                    cartItem.id === item.id
                      ? { ...cartItem, quantity: cartItem.quantity - 1 }
                      : cartItem
                  ))}
                  className="bg-gray-200 text-sm px-2 py-1 rounded-md"
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => setCartItems(cartItems.map(cartItem =>
                    cartItem.id === item.id
                      ? { ...cartItem, quantity: cartItem.quantity + 1 }
                      : cartItem
                  ))}
                  className="bg-gray-200 text-sm px-2 py-1 rounded-md"
                >
                  +
                </button>
              </div>
              <div className="text-sm font-semibold text-gray-800">
                ${item.price * item.quantity}
              </div>
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="text-red-600 hover:text-red-800"
              >
                <FiTrash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total and Checkout */}
      <div className="flex justify-between items-center mt-8 p-4 bg-white rounded-lg shadow-md">
        <div className="font-semibold text-lg">Total: ${totalAmount.toFixed(2)}</div>
        <Link href="/checkout">
          <div className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 cursor-pointer">
            Proceed to Checkout
          </div>
        </Link>
      </div>

      {/* Cart Icon in Navbar or elsewhere */}
      <Link href="/cart">
        <div className="fixed bottom-8 right-8 bg-blue-500 text-white p-4 rounded-full shadow-lg cursor-pointer">
          <FiShoppingCart size={24} />
        </div>
      </Link>
    </div>
  );
};

export default Cart;
