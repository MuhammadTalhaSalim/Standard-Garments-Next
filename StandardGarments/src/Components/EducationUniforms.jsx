"use client";

import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import School from "../assets/school.jpeg";

function EducationUniforms() {
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

  const educationProducts = [
    {
      id: 1,
      title: "School/College Shirts",
      description: "Premium quality school and college shirts designed for comfort and durability. Available in various colors and styles to match your institution's dress code and branding requirements.",
      features: [
        "High-quality cotton blend fabric",
        "Comfortable fit for all-day wear",
        "Fade-resistant colors",
        "Easy care and maintenance",
        "Available in multiple sizes",
        "Custom embroidery options"
      ],
      image: "https://images.unsplash.com/photo-1594736797933-d0ad7be3d7a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "School/College Pants",
      description: "Durable and comfortable pants designed specifically for educational institutions. Crafted to withstand daily wear while maintaining a professional appearance throughout the academic year.",
      features: [
        "Wrinkle-resistant fabric",
        "Reinforced stitching for durability",
        "Multiple pocket options",
        "Adjustable waistbands available",
        "Machine washable",
        "Various colors and styles"
      ],
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Sports Kits/Tracksuits",
      description: "High-performance sports uniforms and tracksuits designed for physical education and sports activities. Engineered for comfort, flexibility, and moisture management during active use.",
      features: [
        "Moisture-wicking technology",
        "Flexible and stretchable fabric",
        "Breathable material",
        "Quick-dry properties",
        "Team customization available",
        "Durable construction for sports activities"
      ],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      title: "Trousers",
      description: "Formal trousers suitable for senior classes and college students. Designed with a professional appearance while ensuring comfort for long hours of study and campus activities.",
      features: [
        "Professional formal appearance",
        "Comfortable waistband",
        "Crease-resistant fabric",
        "Multiple fitting options",
        "Long-lasting durability",
        "Available in classic colors"
      ],
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 5,
      title: "Skirts",
      description: "Comfortable and stylish skirts for female students, designed to meet school dress code requirements while ensuring freedom of movement and all-day comfort.",
      features: [
        "Comfortable pleated design",
        "Appropriate length options",
        "Easy-care fabric",
        "Durable construction",
        "Multiple size ranges",
        "Color options to match school themes"
      ],
      image: "https://images.unsplash.com/photo-1583743089695-4b816a340f82?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
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
            backgroundImage: `url(${School})`
          }}
        ></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <div className="flex items-center justify-center mb-6">
            <div className="h-0.5 bg-white w-24 mr-4"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-yellow-400">
              Education Uniforms
            </h1>
            <div className="h-0.5 bg-white w-24 ml-4"></div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">
            School & College Uniforms for Every Student
          </h2>
          
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
            At Standard Garments, we provide comprehensive uniform solutions for educational institutions. From everyday school wear to sports kits, our uniforms are designed to promote unity, discipline, and comfort for students of all ages. We specialize in creating custom uniforms that reflect your institution's identity and values.
          </p>
        </div>
      </section>

      {/* Product Sections */}
      {educationProducts.map((product, index) => (
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
            Need Education Uniforms?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Contact us today to discuss your school or college uniform requirements and get a customized quote for your educational institution.
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

export default EducationUniforms;