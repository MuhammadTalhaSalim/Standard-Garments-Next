import React from 'react';

const AboutApparelPoint = () => {
  return (
    <section className="text-white py-16 px-6 " style={{background: 'linear-gradient(to bottom right, #2a314b, #1f2538, #1a1f2e)'}}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="h-0.5 bg-white w-24 mr-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-400">
              About Standard Garments
            </h2>
            <div className="h-0.5 bg-white w-24 ml-4"></div>
          </div>
          <p className="text-xl md:text-2xl text-yellow-300 font-semibold">
            TAILOR MADE UNIFORMS SUPPLIER IN LAHORE
          </p>
        </div>

        {/* Description */}
        <div className="text-center mb-16">
          <p className="text-lg md:text-xl leading-relaxed max-w-5xl mx-auto">
            Apparel Point was established in 2006. From a small tailoring unit committed to serving the uniform needs of a thriving GCC market, today Apparel Point is an established industry leader in uniforms manufacturing and distribution. Concurrently, our Merchandise & Trading Division, has significantly grown to source and deliver ready apparel, outdoor gear and household products to our clients across the GCC. We started our journey as a Uniform Manufacturers & Suppliers with a simple 3-point vision:
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mb-12">
          {/* Service */}
          <div className="text-center">
            <div className="border-4 border-yellow-400 rounded-lg p-8 mb-4 mx-auto w-32 h-32 flex items-center justify-center" style={{backgroundColor: 'rgba(42, 49, 75, 0.5)'}}>
              <div className="text-yellow-400">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-2">Service</h3>
          </div>

          {/* Quality */}
          <div className="text-center">
            <div className="border-4 border-yellow-400 rounded-lg p-8 mb-4 mx-auto w-32 h-32 flex items-center justify-center" style={{backgroundColor: 'rgba(42, 49, 75, 0.5)'}}>
              <div className="text-yellow-400">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-9L12 2 4.5 2 2 6v2h20V6l-2.5-4zM19 4h-2l1 2h2l-1-2zm-4 0h-2l1 2h2l-1-2zm-4 0H9l1 2h2L11 4zM7 4H5l1 2h2L7 4z"/>
                  <path d="M2 19v-1h20v1c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-2">Quality</h3>
          </div>

          {/* Commitment */}
          <div className="text-center">
            <div className="border-4 border-yellow-400 rounded-lg p-8 mb-4 mx-auto w-32 h-32 flex items-center justify-center" style={{backgroundColor: 'rgba(42, 49, 75, 0.5)'}}>
              <div className="text-yellow-400">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-yellow-400 mb-2">Commitment</h3>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center">
          <p className="text-lg md:text-xl leading-relaxed max-w-5xl mx-auto">
            Even today we stand by these 3 pillars of our customer centric approach. Customer is King, and the King is best served by prompt and honest <span className="text-yellow-400 font-semibold">Service</span>, premium and durable <span className="text-yellow-400 font-semibold">Quality</span>, and a steadfast <span className="text-yellow-400 font-semibold">Commitment</span> to always keeping the customer first.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutApparelPoint;