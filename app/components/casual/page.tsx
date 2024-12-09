import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa"; // For star ratings

const Casual = () => {
  const products = [
    {
      src: "/casuals/whiteshade.png",
      alt: "Casual Dress 1",
      price: "$39.99",
      rating: 4,
    },
    {
      src: "/casuals/white-black.png",
      alt: "Casual Dress 2",
      price: "$49.99",
      rating: 5,
    },
    {
      src: "/casuals/pinkT.png",
      alt: "Casual Dress 3",
      price: "$29.99",
      rating: 3,
    },
    {
      src: "/topsales/blackjeans.png",
      alt: "Casual Dress 4",
      price: "$59.99",
      rating: 4,
    },
    {
      src: "/topsales/green.png",
      alt: "Casual Dress 5",
      price: "$34.99",
      rating: 5,
    },
  ];

  return (
    <div className="w-[90%] max-w-[1440px] mx-auto mt-12 bg-[#F0F0F0] p-14 rounded-2xl">
      {/* Heading */}
      <div className="text-center mb-6">
        <h1 className="font-IntegralCF text-4xl font-extrabold leading-[57.6px] my-12">
          Casual Wear Collection
        </h1>
      </div>

      {/* Image Grid for Casual Wear */}
      <div className="grid grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div key={index} className="relative w-full h-[400px]">
            {/* Image */}
            <div className="relative w-full h-[300px] mb-4">
              <Image
                src={product.src}
                alt={product.alt}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-md"
              />
            </div>
            {/* Price */}
            <div className="text-center">
              <p className="text-lg font-semibold text-black">{product.price}</p>
            </div>
            {/* Rating */}
            <div className="flex justify-center gap-1 mt-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`${
                    i < product.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Description Section */}
      <div className="mt-20 text-center">
        <p className="font-Satoshi text-lg text-gray-700">
          Browse through our exclusive casual wear collection. Comfortable,
          stylish, and perfect for everyday wear. Get the latest trends in
          casual fashion now!
        </p>
      </div>
    </div>
  );
};

export default Casual;
