import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_29y0kes', 'template_2ucwaj8', form.current, {
        publicKey: '59e7wX_ssDcB982BE',
      })
      .then(
        () => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          alert('Failed to send message. Please try again.');
        },
      );
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center items-center p-6"
      style={{ backgroundImage: "url('https://i.pinimg.com/736x/59/07/12/590712beaf5acac6a01b70c3ea600910.jpg')" }} // 👈 Replace with your saree image
    >
      <div className="bg-white/20 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 w-full max-w-6xl">
        {/* Form Section */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="p-10"
        >
          <h2 className="text-3xl font-bold text-pink-600 mb-6">📬 Get in Touch</h2>

          <div className="mb-5">
            <label className="block text-gray-700 font-semibold mb-2">Your Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 font-semibold mb-2">Your Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Your Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 text-white font-semibold py-3 rounded-lg hover:bg-purple-600 transition duration-300"
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
