// src/Components/WhatsAppButton.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton({
  number = "51955081075",
  message = "Hola! Quisiera más información sobre Varela 2.",
}) {
  const whatsappURL = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:bg-green-600 transition duration-300 ease-in-out"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7" />
      </a>
    </div>
  );
}
