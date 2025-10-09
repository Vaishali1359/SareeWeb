import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router

const FooterNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer className="w-full bg-gray-800 text-white py-6 px-4">
      {/* Toggle Button for Mobile */}
      <div className="flex justify-between items-center md:hidden">
        <h2 className="text-lg font-semibold">Menu</h2>
        <button
          className="text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Navigation Links */}
      <nav
        className={`${
          isOpen ? 'flex' : 'hidden'
        } flex-col items-center space-y-4 mt-4 md:flex md:flex-row md:justify-center md:space-x-8 md:space-y-0 text-lg font-medium`}
      >
        <Link to="/home" className="hover:text-gray-400 transition">
          Home
        </Link>
        <Link to="/about" className="hover:text-gray-400 transition">
          About
        </Link>
        <Link to="/gallery" className="hover:text-gray-400 transition">
          Gallery
        </Link>
        <Link to="/contactus" className="hover:text-gray-400 transition">
          Contact
        </Link>
      </nav>
    </footer>
  );
};

export default FooterNav;
