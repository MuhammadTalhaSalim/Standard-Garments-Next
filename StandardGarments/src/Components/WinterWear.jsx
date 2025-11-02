"use client";

import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

function WinterWear() {
  const router = useRouter();
  const pathname = usePathname();

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    
    // Check if we're already on the home page
    if (pathname === '/') {
      // If on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to home first, then scroll
      router.push('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  };

  const winterProducts = [
    {
      id: 1,
      title: "Hoodies",
      description:
        "Premium quality hoodies designed for warmth and style. Perfect for casual wear, corporate events, or team building activities. Available in various colors and can be customized with your brand logo or design.",
      features: [
        "Soft fleece-lined interior",
        "Adjustable drawstring hood",
        "Kangaroo front pocket",
        "Ribbed cuffs and hem",
        "Custom embroidery available",
        "Machine washable",
      ],
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      title: "Caps",
      description:
        "Stylish and comfortable caps suitable for all seasons but especially great for winter protection. Perfect for sports teams, corporate branding, or casual wear with excellent sun and light rain protection.",
      features: [
        "Adjustable strap fitting",
        "Breathable cotton material",
        "Pre-curved visor",
        "Multiple color options",
        "Custom logo embroidery",
        "One size fits most",
      ],
      image:
        "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      title: "Hats",
      description:
        "Warm winter hats designed to provide maximum comfort and protection from cold weather. Available in various styles including beanies, knitted hats, and thermal caps for different winter activities.",
      features: [
        "Thermal insulation properties",
        "Soft acrylic or wool blend",
        "Stretchable for comfortable fit",
        "Various winter designs",
        "Custom branding options",
        "Windproof construction",
      ],
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 4,
      title: "Jackets",
      description:
        "High-quality winter jackets engineered for superior warmth and protection against harsh weather conditions. Suitable for outdoor work, corporate wear, or recreational activities.",
      features: [
        "Water-resistant outer shell",
        "Thermal insulation lining",
        "Multiple secure pockets",
        "Adjustable cuffs and hood",
        "Durable zipper closure",
        "Custom embroidery available",
      ],
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 5,
      title: "Thermal Wear",
      description:
        "Essential thermal undergarments designed to provide base layer warmth and moisture management. Perfect for cold weather activities, outdoor work, or anyone needing extra warmth during winter months.",
      features: [
        "Moisture-wicking fabric",
        "Thermal regulation technology",
        "Seamless construction",
        "Lightweight yet warm",
        "Anti-odor treatment",
        "Available in sets or individual pieces",
      ],
      image:
        "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 6,
      title: "Winter Gloves",
      description:
        "Insulated winter gloves providing excellent grip and dexterity while keeping hands warm in cold conditions. Suitable for outdoor work, sports activities, or general winter protection.",
      features: [
        "Insulated thermal lining",
        "Non-slip palm grip",
        "Water-resistant material",
        "Touchscreen compatible fingertips",
        "Adjustable wrist closure",
        "Multiple size options",
      ],
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Banner Section */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          background:
            "linear-gradient(to bottom right, #2a314b, #1f2538, #1a1f2e)",
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)",
          }}
        ></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <div className="flex items-center justify-center mb-6">
            <div className="h-0.5 bg-white w-24 mr-4"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-yellow-400">
              Winter Wear
            </h1>
            <div className="h-0.5 bg-white w-24 ml-4"></div>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">
            Premium Winter Clothing & Accessories
          </h2>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
            At Standard Garments, we provide comprehensive winter wear solutions
            designed to keep you warm, comfortable, and stylish during the
            coldest months. From corporate winter uniforms to casual winter
            accessories, our collection combines functionality with fashion to
            meet all your cold weather needs.
          </p>
        </div>
      </section>

      {/* Product Sections */}
      {winterProducts.map((product, index) => (
        <section key={product.id} className="py-16 px-5 md:px-16">
          <div className="max-w-7xl mx-auto">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  {product.title}
                </h2>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Key Features:
                  </h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Contact Section */}
      <section
        className="py-20 text-white text-center"
        style={{
          background:
            "linear-gradient(to bottom right, #2a314b, #1f2538, #1a1f2e)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need Winter Wear Solutions?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Contact us today to discuss your winter clothing requirements and
            get a customized quote for your organization or personal needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#ContactUs" onClick={(e) => handleLinkClick(e, 'ContactUs')}>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                Get Quote
              </button>
            </Link>
            <Link href="/#ContactUs" onClick={(e) => handleLinkClick(e, 'ContactUs')}>
              <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WinterWear;