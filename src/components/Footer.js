import React, { useState } from "react";
import { FiSearch, FiPlay } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import logo from "../assets/images/logo.png";

const Footer = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-gray-900 text-white w-full flex flex-col items-center px-6 md:px-[15%]">
      {/* Top Section */}
      <div className="container w-full flex flex-col md:flex-row items-center justify-between py-8">
        <div className="flex items-center mb-6 md:mb-0">
          {/* Logo */}
          <img src={logo} alt="Logo" className="w-28 md:w-32" />
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-6 md:w-[60%]">
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-10">
            <a href="#" className="hover:text-yellow-500 text-sm md:text-base cursor-pointer">
              Home
            </a>
            <a href="#" className="hover:text-yellow-500 text-sm md:text-base cursor-pointer">
              Movie
            </a>
            <a href="#" className="hover:text-yellow-500 text-sm md:text-base cursor-pointer">
              TV Show
            </a>
            <a href="#" className="hover:text-yellow-500 text-sm md:text-base cursor-pointer">
              Pages
            </a>
            <a href="#" className="hover:text-yellow-500 text-sm md:text-base cursor-pointer">
              Pricing
            </a>
          </nav>

          {/* Search Bar */}
          <div className="input flex items-center bg-[#12151e] h-[46px] p-2 md:p-3 rounded-full w-full md:w-auto">
            <input
              type="text"
              placeholder="Find Favorite Movie"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 text-sm md:text-base border-none text-white bg-[#12151e] outline-none placeholder-gray-400"
            />
            <div className="text-[#78a3af] mx-2 hidden md:block">|</div>
            <FiSearch className="text-yellow-300 text-lg hover:cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 py-8 border-t border-gray-700">
        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-10 text-slate-200 font-semibold text-xs md:text-sm">
          <a className="cursor-pointer hover:text-slate-400">FAQ</a>
          <a className="cursor-pointer hover:text-slate-400">HELP CENTER</a>
          <a className="cursor-pointer hover:text-slate-400">TERMS OF USE</a>
          <a className="cursor-pointer hover:text-slate-400">PRIVACY</a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4">
          {[
            { icon: <FaFacebookF /> },
            { icon: <FaXTwitter /> },
            { icon: <FaPinterestP /> },
            { icon: <IoLogoInstagram /> },
          ].map((social, index) => (
            <div
              className="cursor-pointer rounded-full border-2 p-3 text-gray-300 hover:text-slate-400"
              key={index}
            >
              {social.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
