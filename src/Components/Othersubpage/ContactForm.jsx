import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h5615ls",      // ✅ Your service ID
        "template_sd2281j",     // ✅ Your template ID
        form.current,
        "zBCZPaU4IU0LNVDEt"     // ✅ Your public key
      )
      .then(() => {
        alert("✅ Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        alert("❌ Failed to send message. Please try again.");
        console.error("EmailJS error:", error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-purple-700">Contact Us</h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Your Name</label>
          <input
            type="text"
            name="user_name"
            required
            className="w-full p-3 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Your Email</label>
          <input
            type="email"
            name="user_email"
            required
            className="w-full p-3 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Your Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full p-3 border rounded"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-3 rounded hover:bg-purple-700 transition"
        >
          ✉️ Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
