import React from 'react';
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
} from 'react-icons/fa';

const quickLinks = [
  "Home",
  "About",
  "Service",
  "Gallery",
  "Contact Us",
];

const contactInfo = [
  { label: "Address", value: "123 Glamwiz Street, India" },
  { label: "Phone", value: "+91 98765 43210" },
  { label: "Email", value: "info@glamwiz.com" },
];

const socialIcons = [
  { icon: <FaFacebookF />, href: "https://facebook.com" },
  { icon: <FaYoutube />, href: "https://youtube.com" },
  { icon: <FaInstagram />, href: "https://instagram.com" },
];

const Footer = () => {
  return (
    <footer className="bg-[#f4e3dc] text-[#333] pt-12 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About</h3>
          <p className="text-sm leading-relaxed mb-4">
            Glamwiz offers authentic Indian sarees handpicked from all regions of India. We blend tradition with modern style for the perfect wardrobe addition.
          </p>
          {/* Logo */}
          <div className="flex items-center gap-3 mb-4 font-bold text-lg">
            <span className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center">ⓖ</span>
            <span>glamwiz</span>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-4 text-xl text-gray-700">
            {socialIcons.map(({ icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-700"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((item, idx) => (
              <li key={idx}>
                <a href="#" className="hover:underline">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3 text-sm">
            {contactInfo.map(({ label, value }, idx) => (
              <li key={idx}>
                <strong>{label}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Follow Again */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <p className="text-sm mb-4">
            Stay connected with us on social media for the latest updates.
          </p>
          <div className="flex space-x-6 text-2xl text-gray-700">
            {socialIcons.map(({ icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-700"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-12 bg-pink-500 text-white py-4 text-center text-sm">
        © {new Date().getFullYear()} Glamwiz. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
