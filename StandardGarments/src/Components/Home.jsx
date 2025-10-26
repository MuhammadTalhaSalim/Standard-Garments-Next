
import React from 'react';

const Home = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://media.istockphoto.com/id/862120160/photo/womens-hand-working-on-sewing-machine.jpg?s=612x612&w=0&k=20&c=FkmEzuOXLEbpLPJO1ddsUzlXEPIPBwC8kxevVwWw43U=)',
        }}
      >
        {/* Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(42, 49, 75, 0.85) 0%, rgba(31, 37, 56, 0.7) 50%, rgba(42, 49, 75, 0.4) 100%)'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text Content */}
          <div className="text-white space-y-8">
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
                <span className="text-yellow-400">Premium</span>
                <br />
                <span className="text-white">Uniforms</span>
                <br />
                <span className="text-yellow-300">Tailored</span>
              </h1>
              <div className="w-24 h-1 bg-yellow-400 mb-6"></div>
              <p className="text-xl lg:text-2xl font-light text-gray-200 leading-relaxed">
                Crafting professional uniforms with precision and style since 2006. 
                From corporate wear to medical scrubs, we deliver excellence in every stitch.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <span className="text-lg text-gray-200">Premium Quality Materials</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <span className="text-lg text-gray-200">Expert Craftsmanship</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <span className="text-lg text-gray-200">Fast Delivery Guaranteed</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <a href="#Services"> <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                View Our Services
              </button></a>   
              <a href="#ContactUs"><button className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Get Started now
              </button></a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-yellow-400/30">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">50+</div>
                <div className="text-sm text-gray-300 uppercase tracking-wide">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">17+</div>
                <div className="text-sm text-gray-300 uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">50K+</div>
                <div className="text-sm text-gray-300 uppercase tracking-wide">Uniforms Made</div>
              </div>
            </div>
          </div>

          {/* Right Side - Uniform Display/Object */}
          <div className="relative flex items-center justify-center">
            {/* Main Uniform Image */}
            <div className="relative">
              <div className="w-80 h-96 lg:w-96 lg:h-[500px] relative">
                <img
                  src="https://media.gettyimages.com/id/498323227/photo/portrait-of-confident-businessman.jpg?s=612x612&w=0&k=20&c=XE_Ee8iz9ZS2Cc-ZsbSHHBiLSyzYnyuNovvwfvwl2ZQ="
                  alt="Professional Uniform"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl shadow-2xl ring-4 ring-yellow-400/30"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-yellow-400/20 rounded-full backdrop-blur-sm border border-yellow-400/30 flex items-center justify-center animate-bounce">
                <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>

              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>

              {/* Background Decoration */}
              <div className="absolute -z-10 top-8 right-8 w-72 h-72 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute -z-10 -bottom-8 -left-8 w-60 h-60 bg-gradient-to-tr from-blue-400/20 to-transparent rounded-full blur-3xl"></div>
            </div>

            {/* Small uniform samples */}
            <div className="absolute top-20 -left-20 hidden lg:block">
              <div className="w-24 h-32 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-2">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrOqo-nq2rdfVr9oGB_i8XrDepuoS-JHIWGA&s"
                  alt="Medical Scrubs"
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <p className="text-xs text-center text-gray-300 mt-2">Medical</p>
            </div>

            <div className="absolute bottom-32 -right-16 hidden lg:block">
              <div className="w-24 h-32 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-2">
                <img
                  src="https://factori.com/assets/img/hotel&hospital2.jpeg"
                  alt="Corporate Uniform"
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <p className="text-xs text-center text-gray-300 mt-2">Hospitality</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Home;