// src/Components/HeroSlider.jsx

import React, { useState, useEffect } from 'react';
import img1 from '../Components/assets/image.png';

const sliderData = [
  {
    image: img1,
    title: "Silken Royalty",
    subtitle: "Ready to wear sarees",
    description: "Starting at INR 3499"
  },
  {
    image: "https://i.pinimg.com/1200x/09/e7/cc/09e7cc2e24c2eb6d4f5dd9e9b0eb4a72.jpg",
    title: "Festive Vibes",
    subtitle: "Designer Collection",
    description: "New arrivals starting now"
  },
  {
    image: "https://i.pinimg.com/1200x/a5/ef/d9/a5efd983cf4667e726d18c9ff4026f15.jpg",
    title: "Elegant Drapes",
    subtitle: "Traditional Meets Modern",
    description: "Explore our latest looks"
  }
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev === sliderData.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent(prev => (prev === sliderData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent(prev => (prev === 0 ? sliderData.length - 1 : prev - 1));
  };

  const slide = sliderData[current];

  return (
    <div className="relative w-full h-[750px] overflow-hidden">
      {/* Slide Image */}
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full h-full object-top"
        onError={(e) => {
          console.log("Image load failed:", e.target.src);
          e.target.style.display = 'none';
        }}
      />

      {/* Text Overlay (No black background now) */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
        <h2 className="text-4xl font-bold drop-shadow-md">{slide.title}</h2>
        <p className="text-xl mt-2 drop-shadow-md">{slide.subtitle}</p>
        <p className="mt-2 drop-shadow-md">{slide.description}</p>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white text-black p-2 rounded-full z-10"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white text-black p-2 rounded-full z-10"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 w-full flex justify-center gap-3 z-10">
        {sliderData.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${current === i ? 'bg-white' : 'bg-white/50'}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
