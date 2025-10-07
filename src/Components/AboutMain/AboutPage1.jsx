// AboutSection.jsx
import React from 'react';
import glamwizVideo from '../assets/video1.mp4'; // <-- Import your video file
import News from '../assets/News.jpeg';

const AboutSection = () => {
  return (
    <div className="bg-[#f5ded7] text-gray-800 py-12">
      {/* Section 1: Unboxing Glamwiz (Video) */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6 items-center">
        <video
          src={glamwizVideo}
          controls
          autoPlay
          muted
          loop
          className="rounded shadow-lg w-full h-auto object-cover"
        ></video>

        <div>
          <h3 className="uppercase text-sm tracking-wider text-gray-600">Unboxing Glamwiz</h3>
          <h2 className="text-2xl md:text-3xl font-semibold mt-2 mb-4">
            Glamwiz Ready-to-Wear Tissue Silk Saree - Website Vs Real
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-6">
            See the <strong>Glamwiz Ready-to-Wear Tissue Silk Saree</strong> up close—Website vs Real!
            This quick video showcases the true shine, texture, and fall of our luxurious tissue silk saree,
            just as it looks when worn.
          </p>
          <button className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-purple-800 transition">
            EXPLORE &gt;
          </button>
        </div>
      </div>

      {/* Section 2: Customer Review */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-6 mt-20 items-center">
        <div>
          <h3 className="uppercase text-sm tracking-wider text-gray-600">Customer Reviews</h3>
          <h2 className="text-2xl md:text-3xl font-semibold mt-2 mb-4">
            Glamwiz Ready to Wear Saree Review
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-6">
            Watch how effortlessly our customer drapes the Glamwiz Rose Gold Tissue Silk Saree — 
            no pleating, no fuss! A perfect pick for weddings and parties, this ready-to-wear saree blends
            shine, ease, and elegance in seconds.
          </p>
          <button className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-purple-800 transition">
            EXPLORE &gt;
          </button>
        </div>

        <div>
          <img
            src={News}
            alt="Customer wearing saree"
            className="rounded shadow-lg w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover object-top"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
