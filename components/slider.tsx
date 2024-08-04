"use client";

import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Auto-scroll every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const handleScroll = (event) => {
    const { scrollLeft, clientWidth } = event.target;
    const newSlide = Math.round(scrollLeft / clientWidth);
    setCurrentSlide(newSlide);
  };

  const slides = [
    {
      backgroundImage: 'url(/slides/6.png)', // Set your image path here
      content: (
        <>
          <h1 className="text-5xl font-bold mb-4 text-white">Slide 1</h1>
          <p className="text-xl mb-8 text-white">Content for Slide 1</p>
        </>
      ),
    },
    {
      backgroundImage: 'url(/slides/4.png)', // Set your image path here
      content: (
        <>
          <h1 className="text-5xl font-bold mb-4 text-white">Slide 2</h1>
          <p className="text-xl mb-8 text-white">Content for Slide 2</p>
        </>
      ),
    },
    {
      backgroundImage: 'url(/slides/5.png)', // Set your image path here
      content: (
        <>
          <h1 className="text-5xl font-bold mb-4 text-white">Slide 3</h1>
          <p className="text-xl mb-8 text-white">Content for Slide 3</p>
        </>
      ),
    },
    {
      backgroundImage: 'url(/slides/7.png)', // Set your image path here
      content: (
        <>
          <h1 className="text-5xl font-bold mb-4 text-white">Slide 4</h1>
          <p className="text-xl mb-8 text-white">Content for Slide 4</p>
        </>
      ),
    },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        onScroll={handleScroll}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-screen h-full flex items-center justify-center bg-contain bg-no-repeat bg-center"
            style={{ backgroundImage: slide.backgroundImage }}
          >
            <div className="text-center">
              {slide.content}
              <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-colors">
                Learn more
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
        onClick={prevSlide}
      >
        ←
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
        onClick={nextSlide}
      >
        →
      </button>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {[...Array(totalSlides)].map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
