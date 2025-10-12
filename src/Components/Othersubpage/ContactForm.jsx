import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_h5615ls', 'template_u51axsj', form.current, {
        publicKey: 'zBCZPaU4IU0LNVDEt',
      })
      .then(
        () => {
          alert('✅ Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('❌ Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center p-6 relative"
      style={{
        backgroundImage: "url('https://i.pinimg.com/1200x/ef/30/03/ef3003c1a8e9fc26d7d35354bd83f682.jpg')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0  bg-opacity-50 z-0"></div>

      <div className="relative z-10 bg-white/30 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 w-full max-w-6xl border border-white/10">
        {/* Form Section */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="p-10 text-white"
        >
          <h2 className="text-4xl font-bold text-pink-200 mb-6">📬 Get in Touch</h2>
          <p className="mb-6 text-sm text-white/80">We'd love to hear from you. Fill out the form and we'll get back to you as soon as possible!</p>

          <div className="mb-5">
            <label className="block font-medium mb-1">👤 Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 bg-white/80 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div className="mb-5">
            <label className="block font-medium mb-1">📧 Your Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 bg-white/80 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div className="mb-6">
            <label className="block font-medium mb-1">💬 Your Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full p-3 bg-white/80 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500  text-white font-semibold py-3 rounded-lg hover:opacity-90 transition duration-300"
          >
            ✉️ Send Message
          </button>
        </form>

        {/* Map Section */}
        <div className="w-full h-96 lg:h-auto">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.084857226744!2d-122.42177868468102!3d37.7749297797595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085815735f4b6f7%3A0x76f1e0d1e0217ac4!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1634162043129!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="grayscale hover:grayscale-0 transition-all duration-300"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
