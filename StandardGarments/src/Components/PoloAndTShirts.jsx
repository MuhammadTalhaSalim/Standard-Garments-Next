
"use client";

import React from "react";
import Link from "next/link";
import poloTshirtImg from "../assets/standard.jpeg";

function PoloAndTShirts() {
  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const poloTshirtProducts = [
    {
      id: 1,
      title: "Polo Shirts",
      description: "Classic polo shirts combining comfort and style for both casual and professional settings. Perfect for corporate events, team uniforms, or everyday wear with customizable branding options to showcase your identity.",
      features: [
        "100% cotton pique fabric",
        "Three-button placket design",
        "Ribbed collar and cuffs",
        "Custom embroidery available",
        "Pre-shrunk for lasting fit",
        "Available in multiple colors"
      ],
      image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "T-Shirts",
      description: "Premium quality t-shirts designed for comfort and durability. Ideal for promotional events, team building, casual wear, or corporate branding with excellent print and embroidery capabilities for custom designs.",
      features: [
        "Soft cotton blend fabric",
        "Comfortable crew neck design",
        "Double-stitched seams",
        "Screen printing friendly",
        "Machine washable",
        "Various sizes available"
      ],
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Sweat Shirts",
      description: "Cozy and warm sweatshirts perfect for cooler weather and casual occasions. Designed with comfort in mind, these sweatshirts are ideal for team merchandise, promotional wear, or comfortable everyday clothing.",
      features: [
        "Fleece-lined interior",
        "Ribbed cuffs and waistband",
        "Pullover and zip-up options",
        "Custom logo placement",
        "Durable construction",
        "Comfortable relaxed fit"
      ],
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      title: "Dress Shirts",
      description: "Elegant dress shirts crafted for formal and semi-formal occasions. Perfect for business meetings, corporate events, or professional settings where a polished appearance is essential for making the right impression.",
      features: [
        "Premium cotton fabric",
        "Professional button-down collar",
        "Wrinkle-resistant treatment",
        "Tailored fit options",
        "French cuff available",
        "Multiple collar styles"
      ],
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 5,
      title: "Tank Tops",
      description: "Lightweight and breathable tank tops perfect for hot weather, sports activities, or layering. Designed for maximum comfort and freedom of movement with moisture-wicking properties for active lifestyles.",
      features: [
        "Lightweight breathable fabric",
        "Moisture-wicking properties",
        "Comfortable armhole design",
        "Athletic and casual fits",
        "Custom printing options",
        "Quick-dry technology"
      ],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 6,
      title: "Long Sleeve Shirts",
      description: "Versatile long sleeve shirts suitable for various occasions and seasons. Perfect for layering, casual wear, or professional settings where extended coverage is needed while maintaining style and comfort.",
      features: [
        "Extended sleeve coverage",
        "Comfortable cuff design",
        "Versatile styling options",
        "Seasonal fabric weights",
        "Custom embroidery placement",
        "Professional and casual fits"
      ],
      image: "https://images.unsplash.com/photo-1603252109303-2751441b4e54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Banner Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center"
        style={{
          background: 'linear-gradient(to bottom right, #2a314b, #1f2538, #1a1f2e)'
        }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url(${poloTshirtImg})`
          }}
        ></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <div className="flex items-center justify-center mb-6">
            <div className="h-0.5 bg-white w-24 mr-4"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-yellow-400">
              Polo & T-Shirts
            </h1>
            <div className="h-0.5 bg-white w-24 ml-4"></div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">
            Premium Shirts for Every Occasion
          </h2>
          
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
            At Standard Garments, we offer a comprehensive collection of polo shirts, t-shirts, and various shirt styles designed for comfort, durability, and style. Whether you need corporate uniforms, promotional wear, or casual clothing, our shirt collection provides the perfect solution with customization options to match your brand identity.
          </p>
        </div>
      </section>

      {/* Product Sections */}
      {poloTshirtProducts.map((product, index) => (
        <section key={product.id} className="py-16 px-5 md:px-16">
          <div className="max-w-7xl mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  {product.title}
                </h2>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">Key Features:</h3>
                  <ul className="space-y-3">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
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
          background: 'linear-gradient(to bottom right, #2a314b, #1f2538, #1a1f2e)'
        }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need Custom Shirts & Polos?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Contact us today to discuss your shirt requirements and get a customized quote for your organization, team, or personal needs.
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

export default PoloAndTShirts;
