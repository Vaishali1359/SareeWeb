// src/Components/CallButton.jsx
import React from 'react';
import { FaPhone } from 'react-icons/fa';

export default function CallButton({
  number = "917846954967",
}) {
  const telURL = `tel:${number}`;

  return (
    <div className="fixed bottom-24 right-6 z-50">
      <a
        href={telURL}
        className="bg-blue-500 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out"
        aria-label="Call Now"
      >
        <FaPhone className="w-6 h-6" />
      </a>
    </div>
  );
}
