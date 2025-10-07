// src/components/TopNavBar.jsx
import React from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const TopNavBar = () => {
  return (
    <div className="bg-pink-500 text-white px-4 py-2 flex items-center justify-start space-x-4">
      {/* Facebook */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-pink-500 p-2 rounded-sm hover:bg-pink-100 transition"
      >
        <FaFacebookF size={20} />
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-pink-500 p-2 rounded-sm hover:bg-pink-100 transition"
      >
        <FaInstagram size={20} />
      </a>

      {/* X (Twitter) */}
      <a
        href="https://x.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white text-pink-500 p-2 rounded-sm hover:bg-pink-100 transition"
      >
        <FaXTwitter size={20} />
      </a>
    </div>
  );
};

export default TopNavBar;
