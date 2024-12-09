import React from 'react';
import Image from 'next/image';

export const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row font-IntegralCF justify-between items-center mx-auto text-black relative bg-[#F2F0F1] w-full lg:h-[663px] gap-8 px-6 lg:px-12">
      {/* Text Section */}
      <div className="lg:w-1/2 flex flex-col justify-start items-start gap-6">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-[64px] font-bold leading-snug text-left tracking-tight">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-black/60 leading-relaxed tracking-tight">
          Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
        </p>
        {/* Button */}
        <button className="bg-black text-white text-sm sm:text-lg px-8 sm:px-12 py-3 sm:py-4 rounded-full">
          Shop Now
        </button>
        <div className="lg:hidden flex flex-col items-center gap-4 mt-8">
        <div className="flex justify-center items-center gap-4">
          <Image
            src="/trendy-fashionable-couple-posing.jpg"
            alt="Frame 54"
            layout="intrinsic"
            width={80}
            height={36}
            className="object-contain"
          />
          <Image
            src="/topsales/blackjeans.png"
            alt="Frame 55"
            layout="intrinsic"
            width={80}
            height={36}
            className="object-contain"
          />
        </div>
        <Image
          src="/calvinklein.png"
          alt="Frame 56"
          layout="intrinsic"
          width={80}
          height={36}
          className="object-contain"
        />
      </div>
      </div>


      {/* Image Section */}
      <div className="lg:w-1/2 w-full h-full relative">
        {/* Vector Image Positioned Above */}
        <div className="absolute top-64 sm:top-20 left-6 sm:left-16 lg:top-16 lg:left-12 z-10">
          <Image
            src="/vector.png" // Vector image
            alt="Vector Image"
            layout="intrinsic"
            width= {104}
            height = {104}
           className="object-contain"
          />
        </div>

        {/* Main Hero Image */}
        <div className="relative w-full h-64 sm:h-80 lg:h-full">
          <Image
            src="/trendy-fashionable-couple-posing.jpg"
            alt="Hero Image"
            layout="fill"
            objectFit="contain" // Keeps the image responsive
            className="object-center"
          />
        </div>
      </div>

      {/* Mobile-Only Frames */}
      <div className="block lg:hidden w-full mt-8">
        <div className="flex justify-center gap-4">
          {/* Frame 1 */}
          <Image
            src="/trendy-fashionable-couple-posing.jpg"
            alt="Frame 1"
            width={80}
            height={36}
            className="object-contain"
          />
          {/* Frame 2 */}
          <Image
            src="/"
            alt="Frame 2"
            width={80}
            height={36}
            className="object-contain"
          />
        </div>
        {/* Frame 3 */}
        <div className="flex justify-center mt-4">
          <Image
            src="/"
            alt="Frame 3"
            width={80}
            height={36}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

  