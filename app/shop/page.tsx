import React from 'react';
import Link from 'next/link';

const ShopPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Shop Categories</h1>
      <ul>
        <li>
          <Link href="/shop/men">Men's Collection</Link>
        </li>
        <li>
          <Link href="/shop/women">Women's Collection</Link>
        </li>
        <li>
          <Link href="/shop/kids">Kids' Collection</Link>
        </li>
      </ul>
    </div>
  );
};

export default ShopPage;
