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
    <div className="bg-gray-900 text-white w-full flex flex-col items-center px-[15%]">
      <div className="container  w-full flex-col flex items-center justify-between py-4">
        <div className="up-left py-10 flex w-full justify-between items-center ">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo}></img>
          </div>

          <div className="up-right flex gap-10 justify-between w-[60%] items-center">
            {/* Navigation */}

            <a href="#" className="hover:text-yellow-500 cursor-pointer">
              Home
            </a>
            <a href="#" className="hover:text-yellow-500 cursor-pointer">
              Movie
            </a>
            <a href="#" className="hover:text-yellow-500 cursor-pointer">
              TV Show
            </a>
            <a href="#" className="hover:text-yellow-500 cursor-pointer">
              Pages
            </a>
            <a href="#" className="hover:text-yellow-500 cursor-pointer">
              Pricing
            </a>

            {/* Search Bar */}
            <div className="input flex items-center bg-[#12151e] h-[46px] p-3 rounded-full">
              <input
                type="text"
                placeholder="Find Favorite Movie"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 w-[285px] border-none text-white bg-[#12151e] p-2 outline-none placeholder-gray-400"
              />
              <div className="text-[#78a3af]">|</div>
              <FiSearch className="text-yellow-300 text-lg ml-3 hover:cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="down w-full justify-between flex gap-5 items-center ">
          <div className="left flex gap-10 text-slate-200 font-semibold ">
            <a className="cursor-pointer hover:text-slate-400">FAQ</a>
            <a className="cursor-pointer hover:text-slate-400">HELP CENTER</a>
            <a className="cursor-pointer hover:text-slate-400">TERMS OF USE</a>
            <a className="cursor-pointer hover:text-slate-400">PRIVACY</a>
          </div>

          {/* Social Icons */}
          <div className="right flex space-x-4 py-10">
            {[
              { icon: <FaFacebookF /> },
              { icon: <FaXTwitter /> },
              { icon: <FaPinterestP /> },
              { icon: <IoLogoInstagram /> },
            ].map((social, index) => (
              <div
                href="#"
                className="cursor-pointer rounded-full border-2 p-3 text-grey-300 hover:text-slate-400"
                key={index}
              >
                {social.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
