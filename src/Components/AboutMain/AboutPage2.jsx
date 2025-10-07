// AboutNew.jsx
import React from 'react';

const AboutNew = () => {
  return (
    <section className="bg-white py-16 px-6 text-gray-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <h3 className="text-sm uppercase text-pink-600 tracking-wide font-medium mb-2">About Glamwiz</h3>
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-snug">
            Effortless Elegance, Every Drape
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            At Glamwiz, we believe that tradition deserves comfort. Our ready-to-wear sarees are designed
            for the modern woman — blending rich textures, luxurious fabrics, and zero-hassle draping.
            Whether it’s a wedding, a festive gathering, or your everyday glow-up, Glamwiz wraps you in
            confidence and style in seconds.
          </p>

          <div className="flex space-x-4">
            <button className="bg-pink-600 text-white px-6 py-3 rounded hover:bg-pink-700 transition">
              Shop Our Collection
            </button>
            <button className="border border-pink-600 text-pink-600 px-6 py-3 rounded hover:bg-pink-50 transition">
              Watch Customer Stories
            </button>
          </div>
        </div>

        {/* Image / Visual */}
        <div className="relative">
          <img
            src="https://cdn.shopify.com/s/files/1/0661/9630/7113/files/pink_saree_model.jpg?v=1685782067"
            alt="Elegant woman wearing saree"
            className="rounded-lg shadow-xl object-cover w-full"
          />
          <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 px-4 py-2 rounded shadow-md">
            <p className="text-sm text-gray-700 italic">"Ready in 30 seconds, yet looks like hours of grace."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNew;
