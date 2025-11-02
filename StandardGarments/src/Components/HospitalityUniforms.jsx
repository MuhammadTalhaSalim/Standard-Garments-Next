"use client";

import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import hospitalityImg from "../assets/Cook.jpeg";

function HospitalityUniforms() {
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

  const hospitalityProducts = [
    {
      id: 1,
      title: "Chef Uniforms",
      description: "Professional chef uniforms designed for comfort and durability in busy kitchen environments. Our chef wear combines traditional styling with modern functionality, featuring heat-resistant materials and stain-resistant properties to maintain a professional appearance throughout demanding shifts.",
      features: [
        "Heat-resistant fabric construction",
        "Stain-resistant coating treatment",
        "Breathable moisture-wicking materials",
        "Double-breasted traditional design",
        "Professional white finish options",
        "Easy-care machine washable"
      ],
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "Hotel Reception Uniforms",
      description: "Elegant and sophisticated reception uniforms that create the perfect first impression for your guests. Designed to represent your brand with style and professionalism while ensuring comfort for staff during long shifts at the front desk.",
      features: [
        "Wrinkle-resistant premium fabrics",
        "Professional tailored fit design",
        "Brand customization and logo options",
        "Comfortable all-day wear materials",
        "Multiple color and style choices",
        "Easy-care maintenance requirements"
      ],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Restaurant Server Uniforms",
      description: "Stylish and functional server uniforms that combine professional appearance with practical features for restaurant service staff. These uniforms are designed for comfort, durability, and professional presentation while handling the demands of busy restaurant service.",
      features: [
        "Stain-resistant fabric treatment",
        "Comfortable stretch material blend",
        "Professional appearance styling",
        "Multiple functional pocket design",
        "Easy-care laundering properties",
        "Durable long-lasting construction"
      ],
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      title: "Housekeeping Uniforms",
      description: "Durable and comfortable housekeeping uniforms designed for easy movement and professional appearance in hospitality settings. Built to withstand frequent washing while maintaining shape, color, and professional standards throughout demanding cleaning tasks.",
      features: [
        "Durable heavy-duty fabric construction",
        "Easy-movement ergonomic design",
        "Fade-resistant color technology",
        "Multiple storage pocket system",
        "Professional appearance standards",
        "Long-lasting quality materials"
      ],
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 5,
      title: "Security Uniforms",
      description: "Professional security uniforms designed for authority and comfort during long shifts. These uniforms project professionalism while providing durability and functionality for security personnel in various settings including hotels, offices, and events.",
      features: [
        "Durable heavy-duty fabric construction",
        "Professional authoritative appearance",
        "Multiple functional pocket system",
        "Comfortable extended wear materials",
        "Badge and insignia customization",
        "Weather-resistant outdoor options"
      ],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 6,
      title: "Engineering & Maintenance Uniforms",
      description: "Durable engineering and maintenance uniforms built for technical professionals working in hotels, facilities, and industrial settings. Designed with safety features and practical elements for maintenance staff, engineers, and technical workers.",
      features: [
        "Heavy-duty work fabric construction",
        "Multiple tool and equipment pockets",
        "Safety-compliant design features",
        "Stain and oil-resistant materials",
        "Reinforced stress point construction",
        "Professional technical appearance"
      ],
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 7,
      title: "Waiter Uniforms",
      description: "Classic and elegant waiter uniforms designed for fine dining establishments and formal service environments. These uniforms combine traditional styling with modern comfort features to ensure professional presentation during upscale dining service.",
      features: [
        "Traditional formal styling elements",
        "Wrinkle-resistant premium fabrics",
        "Comfortable fitted design",
        "Professional fine dining appearance",
        "Easy-care maintenance properties",
        "Classic black and white options"
      ],
      image: "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 8,
      title: "Concierge Uniforms",
      description: "Sophisticated concierge uniforms that embody luxury and professionalism for high-end hospitality establishments. These uniforms project authority and elegance while ensuring comfort for staff providing exceptional guest services.",
      features: [
        "Luxury fabric blend materials",
        "Sophisticated tailored design",
        "Professional authority appearance",
        "Comfortable premium construction",
        "Brand embroidery customization",
        "High-end finishing details"
      ],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80"
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
            backgroundImage: `url(${hospitalityImg})`
          }}
        ></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <div className="flex items-center justify-center mb-6">
            <div className="h-0.5 bg-white w-24 mr-4"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-yellow-400">
              Hospitality Uniforms
            </h1>
            <div className="h-0.5 bg-white w-24 ml-4"></div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">
            Professional Uniforms for the Service Industry
          </h2>
          
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
            At Standard Garments, we specialize in creating premium hospitality uniforms that enhance your brand image while ensuring comfort and functionality for your staff. From elegant hotel reception wear to practical kitchen uniforms, our collection serves restaurants, hotels, spas, and catering businesses with professional, durable, and stylish uniform solutions.
          </p>
        </div>
      </section>

      {/* Product Sections */}
      {hospitalityProducts.map((product, index) => (
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
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Contact us today to discuss your hospitality uniform requirements and discover how our premium uniforms can enhance your brand image and staff comfort.
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

export default HospitalityUniforms;