import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "The saree was breathtaking — the fabric shimmered in the sunlight, and I felt like royalty all day!",
    name: "Shraddha Mehta",
    title: "Bride | Mumbai",
    image: "https://randomuser.me/api/portraits/women/31.jpg",
    bg: "https://images.unsplash.com/photo-1602810311030-80aa83b84301?auto=format&fit=crop&w=1600&q=80", // elegant fabric bg
  },
  {
    quote: "Never thought I'd wear something so traditional and feel this confident. Truly a statement piece.",
    name: "Anjali Rao",
    title: "Designer | Delhi",
    image: "https://randomuser.me/api/portraits/women/55.jpg",
    bg: "https://images.unsplash.com/photo-1598032896643-9f1941c7ed2c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    quote: "Every fold of the saree told a story — I wore it to my sister’s wedding and turned heads all night.",
    name: "Neha Kulkarni",
    title: "Stylist | Bangalore",
    image: "https://randomuser.me/api/portraits/women/78.jpg",
    bg: "https://images.unsplash.com/photo-1616046229478-990b85f5195c?auto=format&fit=crop&w=1600&q=80",
  },
];

const SareeLuxuryTestimonial = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const { quote, name, title, image, bg } = testimonials[index];

  return (
    <div
      className="relative py-20 px-4 bg-cover bg-center bg-no-repeat transition-all duration-700 ease-in-out"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-white text-center">
        {/* Avatar */}
        <div className="mb-6">
          <img
            src={image}
            alt={name}
            className="w-24 h-24 rounded-full mx-auto border-4 border-white shadow-lg object-cover"
          />
        </div>

        {/* Quote */}
        <blockquote className="text-xl md:text-2xl font-light italic leading-relaxed max-w-3xl mx-auto transition-opacity duration-700">
          “{quote}”
        </blockquote>

        {/* Name + Title */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-pink-200">{name}</h3>
          <p className="text-sm text-gray-200">{title}</p>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index ? 'bg-white' : 'bg-white/40'
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SareeLuxuryTestimonial;
