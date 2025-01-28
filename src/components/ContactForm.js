import React from "react";

const ContactForm = () => {
  return (
    <div>
      <h2 className="text-white text-xl md:text-2xl font-bold mb-4">Contact Form</h2>
      <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
      <div className="border border-slate-800 p-6 md:p-8 rounded-lg shadow-lg w-full">
        <form className="space-y-4">
          {/* Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name *"
              className="bg-[#1f1e24] text-white px-4 py-3 w-full rounded-md focus:border-yellow-400 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email *"
              className="bg-[#1f1e24] text-white px-4 py-3 w-full rounded-md focus:border-yellow-400 focus:outline-none"
            />
          </div>

          {/* Subject */}
          <input
            type="text"
            placeholder="Subject *"
            className="bg-[#1f1e24] text-white px-4 py-3 w-full rounded-md focus:border-yellow-400 focus:outline-none"
          />

          {/* Message */}
          <textarea
            placeholder="Type Your Message..."
            rows="5"
            className="bg-[#1f1e24] text-white px-4 py-3 w-full rounded-md focus:border-yellow-400 focus:outline-none"
          ></textarea>

          {/* Button */}
          <div className="flex justify-start">
            <button className="px-6 py-3 text-white font-bold border-2 border-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition duration-300">
              SEND MESSAGE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
