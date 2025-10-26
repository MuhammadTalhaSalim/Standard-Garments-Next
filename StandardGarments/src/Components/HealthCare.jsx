
"use client";

import React from "react";
import Link from "next/link";
import Medical from "../assets/Medical.jpeg";

function Healthcare() {
  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const healthcareProducts = [
    {
      id: 1,
      title: "Isolation Gowns",
      description: "High-quality protective isolation gowns designed for maximum safety and comfort in healthcare environments. Made with fluid-resistant materials for optimal protection.",
      features: [
        "Fluid-resistant materials",
        "Comfortable fit for long wear",
        "Easy to wear and remove",
        "Various sizes available",
        "Meets international safety standards"
      ],
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "Medical Masks",
      description: "Premium medical masks providing superior protection and breathability for healthcare professionals. Available in both disposable and reusable options.",
      features: [
        "3-layer filtration system",
        "Comfortable ear loops",
        "Breathable material",
        "Disposable and reusable options",
        "Meets WHO standards"
      ],
      image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Lab Coats",
      description: "Professional laboratory coats crafted for durability, comfort, and professional appearance. Perfect for doctors, researchers, and lab technicians.",
      features: [
        "Stain-resistant fabric",
        "Multiple functional pockets",
        "Easy care instructions",
        "Professional tailoring",
        "Available in various lengths"
      ],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      title: "Nursing Scrub Sets",
      description: "Comfortable and durable scrub sets designed specifically for nursing professionals and healthcare workers. Engineered for all-day comfort and functionality.",
      features: [
        "Moisture-wicking fabric",
        "Antimicrobial treatment",
        "Flexible movement design",
        "Multiple color options",
        "Fade-resistant materials"
      ],
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
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
            backgroundImage: `url(${Medical})`
          }}
        ></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <div className="flex items-center justify-center mb-6">
            <div className="h-0.5 bg-white w-24 mr-4"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-yellow-400">
              Healthcare Uniforms
            </h1>
            <div className="h-0.5 bg-white w-24 ml-4"></div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">
            Professional Medical Wear & Protective Equipment
          </h2>
          
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
            At Standard Garments, we provide premium healthcare uniforms and protective equipment designed to meet the highest standards of safety, comfort, and professionalism in medical environments. Our products ensure that healthcare professionals have the protection they need to deliver exceptional patient care.
          </p>
        </div>
      </section>

      {/* Product Sections */}
      {healthcareProducts.map((product, index) => (
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
            Need Healthcare Uniforms?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Contact us today to discuss your healthcare uniform requirements and get a customized quote for your medical facility.
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

export default Healthcare;