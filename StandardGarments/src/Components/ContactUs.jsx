
import React, { useState } from 'react';

function ContactUs() {
  const [selectedUniforms, setSelectedUniforms] = useState([]);

  const uniformTypes = [
    'Corporate Uniforms',
    'Medical Scrubs',
    'Security Uniforms',
    'Restaurant Uniforms',
    'School Uniforms',
    'Hotel Staff Uniforms'
  ];

  const handleUniformChange = (uniform) => {
    setSelectedUniforms(prev => 
      prev.includes(uniform) 
        ? prev.filter(item => item !== uniform)
        : [...prev, uniform]
    );
  };

  return (
    <section className="text-white body-font relative" style={{background: 'linear-gradient(to bottom right, #2a314b, #1f2538, #1a1f2e)'}}>
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative" 
             style={{backgroundColor: 'rgba(255, 255, 255, 0.1)'}}>
          <img
            src="https://media.istockphoto.com/id/815166664/photo/closeup-view-of-female-hands-touching-smartphone-white-blank-screen-horizontal-blurred.jpg?s=612x612&w=0&k=20&c=TOGuL3_GlxgWzi-EPP4Yvhmh5keFWcLZn0WvY0egV0M="
            alt="Map location"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md z-10">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
              <p className="mt-1 text-black">
                Lahore, Pakistan
                <br />
                Amir town near the The Trust School
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
              <a className="text-indigo-500 leading-relaxed" href="mailto:info@standardgarments.com">
                info@standardgarments.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
              <p className="leading-relaxed text-black">+92322-4044443</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 md:w-1/2 bg-white/10 backdrop-blur-sm flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 rounded-lg p-6">
          <h2 className="text-white text-lg mb-1 font-medium title-font">Feedback</h2>
          <p className="leading-relaxed mb-5 text-gray-300">
            Tell us about your uniform requirements
          </p>

          {/* Uniform Type Selection */}
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-yellow-400 block mb-2">Which type of uniforms do you need?</label>
            <div className="grid grid-cols-2 gap-2">
              {uniformTypes.map((uniform) => (
                <label key={uniform} className="flex items-center cursor-pointer text-xs">
                  <input
                    type="checkbox"
                    className="form-checkbox h-3 w-3 text-yellow-400 rounded mr-2"
                    checked={selectedUniforms.includes(uniform)}
                    onChange={() => handleUniformChange(uniform)}
                  />
                  <span className="text-gray-300">{uniform}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-yellow-400">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white/20 rounded border border-gray-400 focus:border-yellow-400 focus:ring-2 
                         focus:ring-yellow-400/50 text-base outline-none text-white py-1 px-3 leading-8 
                         transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-yellow-400">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white/20 rounded border border-gray-400 focus:border-yellow-400 focus:ring-2 
                         focus:ring-yellow-400/50 text-base outline-none text-white py-1 px-3 leading-8 
                         transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-yellow-400">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white/20 rounded border border-gray-400 focus:border-yellow-400 focus:ring-2 
                         focus:ring-yellow-400/50 h-32 text-base outline-none text-white py-1 px-3 resize-none 
                         leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg transition-colors">
            Submit
          </button>
          <p className="text-xs text-gray-400 mt-3">
            We'll get back to you within 24 hours with a detailed quote.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;