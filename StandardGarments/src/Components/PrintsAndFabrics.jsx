"use client";

import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

function PrintsAndFabrics() {
  const router = useRouter();
  const pathname = usePathname();

  // Scroll handler for Next.js routing
  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();

    if (pathname === "/") {
      // If already on home page, scroll directly
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on another page, navigate to home first, then scroll
      router.push("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  };

  const fabricProducts = [
    {
      id: 1,
      title: "Cotton Print Fabrics",
      description:
        "High-quality cotton fabrics specially designed for digital and screen printing applications. Perfect for creating custom apparel, home textiles, and promotional materials with vibrant colors and excellent print retention.",
      features: [
        "100% premium cotton construction",
        "Excellent ink absorption",
        "Pre-treated for optimal printing",
        "Colorfast and fade-resistant",
        "Soft hand feel",
        "Machine washable",
      ],
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 2,
      title: "Polyester Blend Fabrics",
      description:
        "Durable polyester blend fabrics engineered for superior print quality and longevity. Ideal for sportswear, uniforms, and high-performance garments that require moisture-wicking properties and vibrant color reproduction.",
      features: [
        "Moisture-wicking technology",
        "Wrinkle-resistant properties",
        "Superior color vibrancy",
        "Quick-dry capabilities",
        "Durable construction",
        "UV-resistant printing",
      ],
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 3,
      title: "Canvas Print Materials",
      description:
        "Heavy-duty canvas fabrics perfect for large format printing, banners, and durable textile applications. Designed to withstand outdoor conditions while maintaining print clarity and color integrity over time.",
      features: [
        "Heavy-weight canvas construction",
        "Weather-resistant coating",
        "Large format print capability",
        "Tear-resistant material",
        "UV-stable inks compatible",
        "Industrial strength durability",
      ],
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 4,
      title: "Silk Screen Fabrics",
      description:
        "Specialty fabrics optimized for silk screen printing processes. These materials provide exceptional print definition, smooth ink flow, and professional results for custom t-shirts, posters, and artistic applications.",
      features: [
        "Smooth printing surface",
        "Excellent ink penetration",
        "Professional print quality",
        "Multiple mesh counts available",
        "Consistent texture",
        "Long-lasting print durability",
      ],
      image:
        "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 5,
      title: "Sublimation Fabrics",
      description:
        "Specialized polyester fabrics designed for dye sublimation printing, offering unlimited color possibilities and photographic-quality prints. Perfect for custom sportswear, flags, and high-resolution textile printing.",
      features: [
        "100% polyester construction",
        "Heat transfer compatible",
        "Photographic print quality",
        "Unlimited color reproduction",
        "Permanent dye integration",
        "Professional finish quality",
      ],
      image:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: 6,
      title: "Vinyl Print Materials",
      description:
        "Premium vinyl materials for heat transfer and adhesive printing applications. Ideal for creating durable logos, numbers, and designs on uniforms, sportswear, and promotional items with professional results.",
      features: [
        "Heat transfer vinyl options",
        "Adhesive-backed materials",
        "Precision cutting capability",
        "Weather-resistant finish",
        "Multiple color selections",
        "Professional application tools",
      ],
      image:
        "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
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
              "url(https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)",
          }}
        ></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <div className="flex items-center justify-center mb-6">
            <div className="h-0.5 bg-white w-24 mr-4"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-yellow-400">
              Printable Fabrics
            </h1>
            <div className="h-0.5 bg-white w-24 ml-4"></div>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">
            Premium Fabrics for Custom Printing Solutions
          </h2>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
            At Standard Garments, we provide a comprehensive range of printable
            fabrics designed for various printing techniques and applications.
            From digital printing to screen printing, our fabric collection
            ensures optimal results with vibrant colors, excellent durability,
            and professional finish quality for all your custom printing needs.
          </p>
        </div>
      </section>

      {/* Product Sections */}
      {fabricProducts.map((product, index) => (
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
            Need Custom Printable Fabrics?
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Contact us today to discuss your fabric printing requirements and
            discover the perfect materials for your custom printing projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#ContactUs"
              onClick={(e) => handleLinkClick(e, "ContactUs")}
            >
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                Get Quote
              </button>
            </Link>
            <Link
              href="/#ContactUs"
              onClick={(e) => handleLinkClick(e, "ContactUs")}
            >
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

export default PrintsAndFabrics;
