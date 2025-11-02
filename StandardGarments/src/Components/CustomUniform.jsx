"use client";

import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Custom from "../assets/construction.jpeg";

function CustomUniforms() {
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

  const customUniformServices = [
    {
      id: 1,
      title: "Corporate Custom Uniforms",
      description: "Tailored corporate uniforms that perfectly represent your brand identity and company values. Our design team works closely with your organization to create professional uniforms that enhance your corporate image while ensuring employee comfort and satisfaction.",
      features: [
        "Brand identity integration design",
        "Professional corporate styling",
        "Custom logo and embroidery",
        "Multiple fabric and color options",
        "Employee sizing and fitting",
        "Ongoing uniform management"
      ],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 2,
      title: "School & Educational Uniforms",
      description: "Custom school uniforms designed to foster unity, discipline, and school pride. Our educational uniform solutions include everything from elementary school basics to sophisticated college and university attire, all crafted with durability and comfort in mind.",
      features: [
        "Age-appropriate design elements",
        "Durable child-safe materials",
        "School colors and emblem integration",
        "Growth-accommodating sizing",
        "Easy-care maintenance fabrics",
        "Seasonal uniform variations"
      ],
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 3,
      title: "Sports Team Uniforms",
      description: "High-performance custom sports uniforms designed for athletic excellence and team unity. From professional sports teams to amateur clubs, our athletic wear combines cutting-edge performance fabrics with custom designs that represent your team's spirit and identity.",
      features: [
        "Performance moisture-wicking fabrics",
        "Custom team colors and logos",
        "Athletic fit and movement design",
        "Durable competition-grade materials",
        "Player name and number customization",
        "Multiple sport-specific designs"
      ],
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 4,
      title: "Industrial Workwear",
      description: "Custom industrial workwear designed for specific workplace requirements and safety standards. Our industrial uniforms are built to withstand harsh working conditions while maintaining professional appearance and ensuring worker safety and comfort.",
      features: [
        "Industry-specific safety compliance",
        "Heavy-duty durable construction",
        "Custom safety feature integration",
        "High-visibility options available",
        "Reinforced stress point design",
        "Chemical and flame-resistant options"
      ],
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 5,
      title: "Event & Promotional Uniforms",
      description: "Eye-catching custom uniforms for events, trade shows, and promotional activities. These uniforms are designed to maximize brand visibility and create memorable impressions while ensuring staff comfort during long event days.",
      features: [
        "High-impact branding opportunities",
        "Event-specific design themes",
        "Comfortable extended wear fabrics",
        "Multiple promotional customization",
        "Quick turnaround production",
        "Seasonal and temporary options"
      ],
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 6,
      title: "Healthcare Custom Solutions",
      description: "Specialized custom healthcare uniforms tailored to specific medical facility requirements. Our healthcare solutions address unique departmental needs while maintaining hygiene standards and professional medical appearance.",
      features: [
        "Medical-grade fabric specifications",
        "Department-specific color coding",
        "Antimicrobial treatment options",
        "Custom pocket configurations",
        "Easy-care sanitization features",
        "Professional medical styling"
      ],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 7,
      title: "Hospitality Brand Uniforms",
      description: "Custom hospitality uniforms that embody your establishment's unique brand personality and service standards. From luxury hotels to casual dining, our designs create cohesive brand experiences that guests remember and staff enjoy wearing.",
      features: [
        "Brand personality expression",
        "Guest experience enhancement",
        "Multi-department coordination",
        "Seasonal collection options",
        "Premium hospitality materials",
        "Staff comfort prioritization"
      ],
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: 8,
      title: "Specialty Uniform Design",
      description: "Unique custom uniform solutions for specialized industries and niche applications. Our specialty design service addresses unique requirements that standard uniforms cannot meet, creating one-of-a-kind solutions for distinctive organizations.",
      features: [
        "Unique industry requirement solutions",
        "One-of-a-kind design creation",
        "Specialized material sourcing",
        "Expert consultation services",
        "Prototype development process",
        "Custom manufacturing capabilities"
      ],
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1000&q=80"
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
            backgroundImage: `url(${Custom})`
          }}
        ></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <div className="flex items-center justify-center mb-6">
            <div className="h-0.5 bg-white w-24 mr-4"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-yellow-400">
              Custom Uniforms
            </h1>
            <div className="h-0.5 bg-white w-24 ml-4"></div>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">
            Tailored Solutions for Every Organization
          </h2>
          
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
            At Standard Garments, we understand that every organization has unique needs and brand identity. Our custom uniform design and manufacturing service transforms your vision into reality, creating distinctive uniforms that perfectly represent your brand while ensuring comfort, functionality, and professional excellence for your team.
          </p>
        </div>
      </section>

      {/* Product Sections */}
      {customUniformServices.map((service, index) => (
        <section key={service.id} className="py-16 px-5 md:px-16">
          <div className="max-w-7xl mx-auto">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  {service.title}
                </h2>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-800">Key Features:</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
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

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 md:px-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Custom Design Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to completion, we guide you through every step of creating your perfect custom uniforms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We discuss your needs, brand identity, and uniform requirements"
              },
              {
                step: "02",
                title: "Design",
                description: "Our designers create custom concepts based on your specifications"
              },
              {
                step: "03",
                title: "Sampling",
                description: "We produce samples for your approval and feedback"
              },
              {
                step: "04",
                title: "Production",
                description: "Full-scale manufacturing with quality control at every step"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-yellow-400 text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-6">
                  {process.step}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        className="py-20 text-white text-center"
        style={{
          background: 'linear-gradient(to bottom right, #2a314b, #1f2538, #1a1f2e)'
        }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Create Your Custom Uniforms?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Let's bring your vision to life. Contact us today to start your custom uniform journey and discover how we can create the perfect uniforms for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#ContactUs" onClick={(e) => handleLinkClick(e, 'ContactUs')}>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                Start Your Project
              </button>
            </Link>
            <Link href="/#ContactUs" onClick={(e) => handleLinkClick(e, 'ContactUs')}>
              <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                Get Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default CustomUniforms;