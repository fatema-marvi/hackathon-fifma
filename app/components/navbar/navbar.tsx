import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoSearch, IoPersonCircleSharp } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="font-IntegralCF w-full h-[100px] bg-white shadow-md">
      <div className="max-w-[1170px] mx-auto flex justify-between items-center h-full px-6 lg:px-0">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            SHOP.CO
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center gap-6 text-base">
          {/* Shop Dropdown */}
          <li className="relative group">
            <Link href="/">
              <span className="flex items-center gap-1 hover:text-gray-700">
                Shop <RiArrowDropDownLine className="text-2xl" />
              </span>
            </Link>
            {/* Dropdown Menu for Shop */}
            <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-md p-4 z-10 w-48">
              <ul className="flex flex-col gap-2">
                <li>
                  <Link href="/shop/men">
                    <span className="hover:text-gray-700">Men</span>
                    
                  </Link>
                </li>
                <li>
                  <Link href="/category/women">
                    <span className="hover:text-gray-700">Women</span>
                  </Link>
                </li>
                <li>
                  <Link href="/category/kids">
                    <span className="hover:text-gray-700">Kids</span>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          {/* Other Nav Items */}
          <li className="hover:text-gray-700">
            <Link href="/on-sale">On Sale</Link>
          </li>
          <li className="hover:text-gray-700">
            <Link href="/new-arrivals">New Arrivals</Link>
          </li>
          <li className="hover:text-gray-700">
            <Link href="/brands">Brands</Link>
          </li>
        </ul>

        {/* Search Bar and Icons */}
        <div className="flex items-center gap-6">
          {/* Search Bar */}
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
            <IoSearch className="text-gray-500 text-lg mr-2" />
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent outline-none text-sm w-[150px] sm:w-[250px]"
            />
          </div>

          {/* Icons */}
          <Link href="/cart">
          <div className="relative cursor-pointer">
            <FiShoppingCart size={24} />
            {/* Optional: Add a badge for item count */}
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </div>
          </Link>
        </div>
        </div>
    </nav>
);
};

export default Navbar;
