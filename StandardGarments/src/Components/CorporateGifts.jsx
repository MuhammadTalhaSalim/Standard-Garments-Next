"use client";

import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import corporateImg from "../assets/corporate.jpeg";

function CorporateGifts() {
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

  const corporateProducts = [
    {
      id: 1,
      title: "Corporate Gifts",
      description: "Premium corporate gift sets designed to strengthen business relationships and enhance brand recognition. Perfect for client appreciation, employee recognition, and promotional events with elegant packaging and customization options.",
      features: [
        "Elegant gift packaging included",
        "Custom logo and branding",
        "Wide variety of gift options",
        "Bulk order discounts available",
        "Professional presentation",
        "Suitable for all occasions"
      ],
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "Executive Shirts",
      description: "Premium executive shirts crafted for corporate professionals who demand excellence in both style and comfort. Made from high-quality fabrics with precise tailoring to create a distinguished professional appearance.",
      features: [
        "Premium cotton blend fabric",
        "Professional tailored fit",
        "Wrinkle-resistant treatment",
        "Multiple collar styles",
        "Custom monogramming available",
        "Easy care instructions"
      ],
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Corporate Polo Shirts",
      description: "Versatile corporate polo shirts perfect for both formal and casual business environments. Designed to showcase your company brand while maintaining a professional appearance for all corporate activities.",
      features: [
        "Moisture-wicking fabric",
        "Fade-resistant colors",
        "Company logo embroidery",
        "Comfortable collar design",
        "Available in team quantities",
        "Multiple color options"
      ],
      image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      title: "Business Suits",
      description: "Expertly tailored business suits designed to make a powerful impression in corporate settings. Crafted with attention to detail and premium materials for executives and professionals who require impeccable presentation.",
      features: [
        "Premium wool blend fabric",
        "Custom tailoring available",
        "Classic and modern fits",
        "Professional lining",
        "Multiple piece options",
        "Seasonal fabric choices"
      ],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 5,
      title: "Corporate Branded Accessories",
      description: "Complete your corporate identity with branded accessories including ties, scarves, cufflinks, and other professional accessories. Perfect for enhancing brand visibility and creating a cohesive corporate image.",
      features: [
        "Custom brand integration",
        "High-quality materials",
        "Professional gift packaging",
        "Variety of accessory options",
        "Corporate color matching",
        "Bulk pricing available"
      ],
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 6,
      title: "Corporate Blazers",
      description: "Sophisticated corporate blazers designed for both men and women professionals. Perfect for creating a unified corporate appearance while maintaining individual style and comfort for all business occasions.",
      features: [
        "Professional tailored design",
        "Premium fabric selection",
        "Corporate color options",
        "Custom fitting service",
        "Durable construction",
        "Season-appropriate materials"
      ],
      image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
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
            backgroundImage:`url(${corporateImg})`
          }}
        ></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <div className="flex items-center justify-center mb-6">
            <div className="h-0.5 bg-white w-24 mr-4"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-yellow-400">
              Corporate Solutions
            </h1>
            <div className="h-0.5 bg-white w-24 ml-4"></div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">
            Corporate Gifts & Professional Uniforms
          </h2>
          
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
            At Standard Garments, we specialize in creating professional corporate uniforms and premium gift solutions that reflect your brand's excellence. From executive wear to thoughtful corporate gifts, we help businesses maintain a distinguished presence while strengthening relationships with clients and employees through quality and attention to detail.
          </p>
        </div>
      </section>

      {/* Product Sections */}
      {corporateProducts.map((product, index) => (
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
            Elevate Your Corporate Image?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Contact us today to discuss your corporate uniform and gift requirements. Let us help you create a distinguished professional presence for your business.
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

export default CorporateGifts;