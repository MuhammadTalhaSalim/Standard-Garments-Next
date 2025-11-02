"use client";

import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation"; // ✅ added imports

function NewArrivals() {
  const router = useRouter();
  const pathname = usePathname();

  // ✅ Handles smooth scroll or redirects to home then scrolls
  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();

    if (pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  };

  const newArrivals = [
    {
      id: 1,
      title: "Advanced Medical Scrubs Pro",
      description:
        "Our latest innovation in medical wear featuring next-generation antimicrobial fabric technology and ergonomic design. These premium scrubs offer superior comfort and protection for healthcare professionals, representing the future of medical uniforms.",
      features: [
        "Advanced antimicrobial fabric technology",
        "Ergonomic comfort-fit design",
        "4-way stretch performance material",
        "Moisture-wicking quick-dry properties",
        "Fade-resistant color technology",
        "Enhanced pocket functionality",
      ],
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1000&q=80",
      badge: "Just Launched",
    },
    {
      id: 2,
      title: "Executive Chef Collection 2024",
      description:
        "Introducing our premium chef uniform line designed in collaboration with renowned culinary professionals. This collection combines traditional culinary elegance with cutting-edge fabric innovation for the modern kitchen professional.",
      features: [
        "Premium double-breasted styling",
        "Heat-resistant advanced materials",
        "Stain-release coating technology",
        "Breathable mesh ventilation panels",
        "Professional embroidery options",
        "Sustainable fabric construction",
      ],
      image:
        "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1000&q=80",
      badge: "Limited Edition",
    },
    {
      id: 3,
      title: "Smart Security Uniforms",
      description:
        "Revolutionary security uniforms featuring integrated technology pockets and tactical design elements. These uniforms are crafted for modern security professionals who require functionality, durability, and professional appearance.",
      features: [
        "Tactical design elements",
        "Integrated technology pockets",
        "Reinforced durability construction",
        "Weather-resistant fabric treatment",
        "Professional authority styling",
        "Customizable badge placement",
      ],
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80",
      badge: "New Technology",
    },
    {
      id: 4,
      title: "Luxury Hotel Collection",
      description:
        "Elegant hospitality uniforms designed for luxury hotels and high-end establishments. This collection emphasizes sophistication and comfort, creating memorable impressions while ensuring staff comfort throughout demanding service periods.",
      features: [
        "Luxury fabric blend materials",
        "Sophisticated tailored styling",
        "Wrinkle-resistant technology",
        "Brand customization options",
        "Comfort-fit design features",
        "Premium finishing details",
      ],
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80",
      badge: "Premium Line",
    },
    {
      id: 5,
      title: "Eco-Friendly Workwear Series",
      description:
        "Sustainable workwear made from recycled materials and eco-friendly manufacturing processes. This environmentally conscious collection delivers professional quality while supporting your organization's sustainability commitments.",
      features: [
        "100% recycled material construction",
        "Carbon-neutral manufacturing process",
        "Biodegradable packaging options",
        "Sustainable dyeing techniques",
        "Professional durability standards",
        "Environmental certification included",
      ],
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
      badge: "Eco-Friendly",
    },
    {
      id: 6,
      title: "Athletic Performance Uniforms",
      description:
        "High-performance athletic uniforms utilizing the latest sports fabric technology. Designed for professional teams and athletic organizations requiring superior moisture management and durability during intense physical activity.",
      features: [
        "Professional athletic fabric technology",
        "Superior moisture-wicking performance",
        "Anti-odor treatment integration",
        "Flexible movement design",
        "Team customization options",
        "Competition-grade durability",
      ],
      image:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=1000&q=80",
      badge: "Performance",
    },
    {
      id: 7,
      title: "Modern Barista Collection",
      description:
        "Contemporary barista uniforms designed for the modern coffee culture. These uniforms blend casual comfort with professional presentation, perfect for specialty coffee shops and artisan beverage establishments.",
      features: [
        "Contemporary casual styling",
        "Coffee-resistant fabric treatment",
        "Comfortable all-day wear design",
        "Brand customization friendly",
        "Easy-care maintenance",
        "Trendy color palette options",
      ],
      image:
        "https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1000&q=80",
      badge: "Trending",
    },
    {
      id: 8,
      title: "Tech-Integrated Service Wear",
      description:
        "Innovative service uniforms featuring integrated technology solutions for modern hospitality. These uniforms include built-in communication device pockets and smart fabric features for the digital age service industry.",
      features: [
        "Integrated communication pockets",
        "Smart fabric technology features",
        "Professional service styling",
        "Technology-friendly design",
        "Comfortable extended wear",
        "Future-ready functionality",
      ],
      image:
        "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?auto=format&fit=crop&w=1000&q=80",
      badge: "Innovation",
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
              "url(https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=2070&q=80)",
          }}
        ></div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
          <div className="flex items-center justify-center mb-6">
            <div className="h-0.5 bg-white w-24 mr-4"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-yellow-400">
              New Arrivals
            </h1>
            <div className="h-0.5 bg-white w-24 ml-4"></div>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">
            Latest Innovations in Professional Uniforms
          </h2>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-4xl mx-auto">
            Discover our newest collection of professional uniforms featuring
            cutting-edge fabrics, innovative designs, and advanced functionality.
            At Standard Garments, we continuously evolve our offerings to bring
            you the latest in uniform technology, comfort, and style for the
            modern workplace.
          </p>
        </div>
      </section>

      {/* Product Sections */}
      {newArrivals.map((product, index) => (
        <section key={product.id} className="py-16 px-5 md:px-16 relative">
          <div className="max-w-7xl mx-auto">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""} relative`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                <div className="absolute top-4 left-4 bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  {product.badge}
                </div>
              </div>

              <div className={`${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                <div className="flex items-center mb-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    {product.title}
                  </h2>
                  <div className="ml-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    NEW
                  </div>
                </div>

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
            Be First to Experience Innovation
          </h2>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Don't miss out on our latest uniform innovations. Contact us today to
            learn more about our new arrivals and secure your order for the newest
            in professional uniform technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#ContactUs" onClick={(e) => handleLinkClick(e, "ContactUs")}>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                Order Now
              </button>
            </Link>
            <Link href="/#ContactUs" onClick={(e) => handleLinkClick(e, "ContactUs")}>
              <button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewArrivals;
