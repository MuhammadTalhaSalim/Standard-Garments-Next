
"use client";

import React from "react";
import Link from "next/link";

function Services() {
 
  return (
    
    <div className="bg-white py-10 px-5 md:px-16">
      {/* Header Section */}
      <div className="bg-gray-100 p-4 rounded-md shadow-md flex flex-col items-center justify-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="h-0.5 bg-black w-8 md:w-24 mr-2 md:mr-4"></div>
          <h2 className="text-xl md:text-5xl font-bold text-black text-center px-2">
            OUR SERVICES
          </h2>
          <div className="h-0.5 bg-black w-8 md:w-24 ml-2 md:ml-4"></div>
        </div>

        <p className="text-center mt-2 text-sm md:text-base px-4">
          At Standard Garments, we specialize in providing high-quality uniforms
          and teamwear tailored to your brand and purpose. Our services combine
          professional design, durable materials, and perfect fitting to ensure
          your teams look sharp and feel confident.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Custom Uniform */}
        <Link href="/CustomUniform" className="group">
          <div className="relative bg-black text-white rounded-md overflow-hidden group h-80 md:h-96">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2020/11/MA/NR/CB/46371906/factory-worker-uniform.jpg"
              alt="Custom Uniform"
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-center">
              <h2 className="text-base md:text-lg font-semibold mb-2">
                Custom Uniform Delivered To Your Door Step
              </h2>
              <p className="text-xs md:text-sm mb-4 hidden md:block">
                We manufacture and supply premium quality uniforms. Proudly
                customized here in the UAE.
              </p>
              <button className="bg-yellow-500 text-black px-3 md:px-4 py-1 md:py-2 rounded hover:bg-yellow-600 text-xs md:text-sm">
                Read more
              </button>
            </div>
          </div>
        </Link>

        {/* Winter Wear */}
        <Link href="/WinterWear" className="group">
          <div className="relative rounded-md overflow-hidden group bg-black text-white h-80 md:h-96">
            <img
              src="https://media.gq.com/photos/676598892ab7540c29ee81f6/master/w_1600,c_limit/winteressentialslede1220.png"
              alt="Winter Wear"
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <h2 className="text-base md:text-xl font-bold text-white mb-4">
                Winter Wear
              </h2>
              <button className="bg-yellow-500 text-black px-3 md:px-4 py-1 md:py-2 rounded hover:bg-yellow-600 text-xs md:text-sm">
                Read more
              </button>
            </div>
          </div>
        </Link>

        {/* Corporate Gifts */}
        <Link href="/CorporateGifts" className="group">
          <div className="relative bg-black text-white rounded-md overflow-hidden group h-80 md:h-96">
            <img
              src="https://unboxme.com/cdn/shop/files/Unboxme_Curated_Gift_Boxes_Mindful_Moments.png?v=1746581769"
              alt="Corporate Gifts"
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <h2 className="text-base md:text-xl font-bold text-white mb-4">
                Corporate Gifts
              </h2>
              <button className="bg-yellow-500 text-black px-3 md:px-4 py-1 md:py-2 rounded hover:bg-yellow-600 text-xs md:text-sm">
                Read more
              </button>
            </div>
          </div>
        </Link>

        {/* Polo & T-Shirts */}
        <Link href="/PoloAndTShirts" className="group">
          <div className="relative bg-black text-white rounded-md overflow-hidden group h-80 md:h-96">
            <img
              src="https://img.joomcdn.net/4e29474e9eb6ed4b21237b9b00956fc9369f9611_original.jpeg"
              alt="Polo & T-Shirts"
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <h2 className="text-base md:text-xl font-bold text-white mb-4">
                POLO and T-Shirts
              </h2>
              <button className="bg-yellow-500 text-black px-3 md:px-4 py-1 md:py-2 rounded hover:bg-yellow-600 text-xs md:text-sm">
                Read more
              </button>
            </div>
          </div>
        </Link>

        {/* Prints & Fabrics */}
        <Link href="/PrintsAndFabrics" className="group">
          <div className="relative bg-black text-white rounded-md overflow-hidden group h-80 md:h-96">
            <img
              src="https://www.cartexitalia.com/wp-content/uploads/2021/04/varianti-tessuto-stampato-fiori-1024x768.jpg"
              alt="Prints & Fabrics"
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <h2 className="text-base md:text-xl font-bold text-white mb-4">
                Prints & Fabrics
              </h2>
              <button className="bg-yellow-500 text-black px-3 md:px-4 py-1 md:py-2 rounded hover:bg-yellow-600 text-xs md:text-sm">
                Read more
              </button>
            </div>
          </div>
        </Link>

        {/* Hospitality uniforms */}
        <Link href="/HospitalityUniforms" className="group">
          <div className="relative bg-black text-white rounded-md overflow-hidden group h-80 md:h-96">
            <img
              src="https://4.imimg.com/data4/OV/LL/ANDROID-66313268/product-500x500.jpeg"
              alt="Hospitality Uniforms"
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <h2 className="text-base md:text-xl font-bold text-white mb-4">
                Hospitality Uniforms
              </h2>
              <button className="bg-yellow-500 text-black px-3 md:px-4 py-1 md:py-2 rounded hover:bg-yellow-600 text-xs md:text-sm">
                Read more
              </button>
            </div>
          </div>
        </Link>

        {/* hospital Uniforms */}
        <Link href="/HealthCare" className="group">
          <div className="relative bg-black text-white rounded-md overflow-hidden group h-80 md:h-96">
            <img
              src="https://cdn.dotpe.in/longtail/store-items/8101380/etxEG6M2.jpeg"
              alt="Hospital Uniforms"
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <h2 className="text-base md:text-xl font-bold text-white mb-4">
                Health Care Uniforms
              </h2>
              <button className="bg-yellow-500 text-black px-3 md:px-4 py-1 md:py-2 rounded hover:bg-yellow-600 text-xs md:text-sm">
                Read more
              </button>
            </div>
          </div>
        </Link>

        {/* school Uniforms */}
        <Link href="/EducationUniforms" className="group">
          <div className="relative bg-black text-white rounded-md overflow-hidden group h-80 md:h-96">
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2024/1/376790103/YO/GN/KB/63146359/boys-school-uniforms-500x500.png"
              alt="school Uniforms"
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <h2 className="text-base md:text-xl font-bold text-white mb-4">
                Education Uniforms
              </h2>
              <button className="bg-yellow-500 text-black px-3 md:px-4 py-1 md:py-2 rounded hover:bg-yellow-600 text-xs md:text-sm">
                Read more
              </button>
            </div>
          </div>
        </Link>

        {/* New Arrivals */}
        <Link href="/NewArrivals" className="group">
          <div className="relative bg-black text-white rounded-md overflow-hidden group h-80 md:h-96">
            <img
              src="https://sweetsoutherncharmva.com/cdn/shop/collections/new_arrivals_1024x1024.png?v=1591296427"
              alt="New Arrivals"
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <h2 className="text-base md:text-xl font-bold text-white mb-4">
                New Arrivals
              </h2>
              <button className="bg-yellow-500 text-black px-3 md:px-4 py-1 md:py-2 rounded hover:bg-yellow-600 text-xs md:text-sm">
                Read more
              </button>
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
}

export default Services;