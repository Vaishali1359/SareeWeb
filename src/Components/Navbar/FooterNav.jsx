import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router

const FooterNav = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-6">
      <nav className="flex justify-center space-x-8 text-lg font-medium">
        <Link to="/" className="hover:text-gray-400 transition">Home</Link>
        <Link to="/about" className="hover:text-gray-400 transition">About</Link>
        <Link to="/gallery" className="hover:text-gray-400 transition">Gallery</Link>
        <Link to="/contact" className="hover:text-gray-400 transition">Contact</Link>
      </nav>
    </footer>
  );
};

export default FooterNav;
