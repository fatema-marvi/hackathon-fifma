import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link for page navigation


const DressStyle = () => {
  return (
    <div className="w-[90%] max-w-[1440px] h-[866px] mx-auto mt-12 bg-[#F0F0F0] rounded-2xl p-14">
      {/* Heading */}
      <div className="text-center mb-6">
        <h1 className="font-IntegralCF text-4xl font-extrabold leading-[57.6px] my-12">
          BROWSE DRESS BY
        </h1>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-4 gap-4">
        {/* First Image (Casual) */}
        <div className="col-span-1">
          <Link href="/components/casual">
            <div className="w-[407px] h-[289px] relative ml-14 cursor-pointer">
              <Image
                src="/dressstyle/casual.jpg" // Replace with your image path
                alt="Casual Dress Style"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
              <div className="absolute bottom-4 left-4 text-white font-bold text-xl">Casual</div>
            </div>
          </Link>
        </div>

        {/* Second Image (Party) */}
        <div className="col-span-3">
          <Link href="/party">
            <div className="w-[684px] h-[289px] relative ml-40 cursor-pointer">
              <Image
                src="/dressstyle/party.png" // Replace with your image path
                alt="Party Dress Style"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
              <div className="absolute bottom-4 left-4 text-white font-bold text-xl">Party</div>
            </div>
          </Link>
        </div>

        {/* Third Image (Formal) */}
        <div className="col-span-1">
          <Link href="/formal">
            <div className="w-[407px] h-[289px] relative ml-14 cursor-pointer">
              <Image
                src="/dressstyle/formal.png" // Replace with your image path
                alt="Formal Dress Style"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
              <div className="absolute bottom-4 left-4 text-white font-bold text-xl">Formal</div>
            </div>
          </Link>
        </div>

        {/* Fourth Image (Gym) */}
        <div className="col-span-3">
          <Link href="/gym">
            <div className="w-[684px] h-[289px] relative ml-40 cursor-pointer">
              <Image
                src="/dressstyle/gym.png" // Replace with your image path
                alt="Gym Dress Style"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
              <div className="absolute bottom-4 left-4 text-white font-bold text-xl">Gym</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DressStyle;
