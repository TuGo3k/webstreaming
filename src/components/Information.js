import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Information = () => {
  return (
    <div>
      <h2 className="text-white text-xl md:text-2xl font-bold mb-3">Information</h2>
      <div className="w-12 h-1 bg-yellow-400 mb-6"></div>
      <div className="bg-[#1f1e24] p-6 md:p-8 rounded-lg shadow-lg w-full">
        <p className="text-gray-400 mb-4">
          <strong className="text-white">Find solutions</strong>: to common
          problems, or get help from a support agent industry’s standard.
        </p>
        <div className="space-y-6">
          {/* Address */}
          <div className="flex items-center space-x-4 border-t border-gray-700 pt-4">
            <div className="bg-yellow-400 text-black w-10 h-10 flex items-center justify-center rounded-full">
              <FaMapMarkerAlt size={18} />
            </div>
            <p className="text-white">
              <strong>Address:</strong> W38 Park Road, New York
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-4 border-t border-gray-700 pt-4">
            <div className="bg-yellow-400 text-black w-10 h-10 flex items-center justify-center rounded-full">
              <FaPhoneAlt size={18} />
            </div>
            <p className="text-white">
              <strong>Phone:</strong> (09) 123 854 365
            </p>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-4 border-t border-gray-700 pt-4">
            <div className="bg-yellow-400 text-black w-10 h-10 flex items-center justify-center rounded-full">
              <FaEnvelope size={18} />
            </div>
            <p className="text-white">
              <strong>Email:</strong> support@movflix.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
