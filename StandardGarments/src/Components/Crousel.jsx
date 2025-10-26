
import React, { useState, useEffect } from "react";

function Carousel() {
  const [slider] = useState([
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpSIKkFyqmLWkBvkXJS-Bqp6bKvesCANzBBw&s",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYaMnHnX5QZJoIp52xNH_p1CnoVaEVEHmY6Q&s",
    },
    {
      image:
        "https://interwood.pk/cdn/shop/products/logo_1_580x_crop_center.jpg?v=1749902639",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvPKRc--6kfChZV0BYMhI-wPjTwA4s4CswlQ&s",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiLzGE7R19xa9ushnes_kL_tXNoq7bZTCa-A&s",
    },
  ]);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slider.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slider.length]);

  // Handle responsive slides to show
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slider.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slider.length) % slider.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < slidesToShow; i++) {
      const slideIndex = (currentSlide + i) % slider.length;
      slides.push(slider[slideIndex]);
    }
    return slides;
  };

  return (
    <div className="slider-container bg-gray-100 p-4 md:p-10">
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="h-0.5 bg-yellow-400 w-8 md:w-24 mr-2 md:mr-4"></div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-yellow-400 text-center px-2">
            Our Happy Customers
          </h2>
          <div className="h-0.5 bg-yellow-400 w-8 md:w-24 ml-2 md:ml-4"></div>
        </div>
        
        <p className="text-sm md:text-lg text-gray-700 text-center px-4">
          We are proud to have served over 50 satisfied customers.
        </p>
      </div>

      {/* Custom Carousel */}
      <div className="relative max-w-6xl mx-auto">
        {/* Carousel Container */}
        <div className="overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out">
            {getVisibleSlides().map((slide, index) => (
              <div key={`${currentSlide}-${index}`} className={`flex-shrink-0 px-2 ${
                slidesToShow === 1 ? 'w-full' : 
                slidesToShow === 2 ? 'w-1/2' : 'w-1/3'
              }`}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img 
                    src={slide.image} 
                    className="w-full h-40 md:h-60 object-cover" 
                    alt={`Customer ${index + 1}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-yellow-400 text-white p-2 rounded-full shadow-lg hover:bg-yellow-500 transition-colors z-10"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-yellow-400 text-white p-2 rounded-full shadow-lg hover:bg-yellow-500 transition-colors z-10"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {slider.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-yellow-400' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
