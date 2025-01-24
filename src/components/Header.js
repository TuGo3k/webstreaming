import React, { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [active, setActive] = useState("НҮҮР");
  const [search, setSearch] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = [
    { title: "НҮҮР", route: "/" },
    { title: "БҮГД", route: "/asd" },
    { title: "ҮНЭ", route: "" },
    { title: "ВЛОГ", route: "" },
    { title: "ХОЛБОО БАРИХ", route: "" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 bg-[#252631] w-full h-[106px] flex justify-between items-center px-[5%] md:px-[9%] z-20 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Logo */}
      <div className="logo flex items-center">
        <img
          src={Logo}
          className="w-[120px] sm:w-[151px] h-[44px] hover:cursor-pointer"
          alt="logo"
        />
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:flex gap-6">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={category.route}
            className={`text-white font-semibold p-2 ${
              active === category.title ? "text-yellow-300" : "text-white"
            }`}
            onClick={() => setActive(category.title)}
          >
            {category.title}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        {isMobileMenuOpen ? (
          <FiX
            className="text-white text-3xl hover:cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        ) : (
          <FiMenu
            className="text-white text-3xl hover:cursor-pointer"
            onClick={() => setIsMobileMenuOpen(true)}
          />
        )}
      </div>

      {/* Search Bar */}
      <div className="hidden md:flex items-center bg-[#12151e] h-[46px] p-3 rounded-full">
        <input
          type="text"
          placeholder="Find Favorite Movie"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border-none text-white bg-[#12151e] outline-none placeholder-gray-400"
        />
        <div className="text-[#78a3af]">|</div>
        <FiSearch className="text-yellow-300 text-lg ml-3 hover:cursor-pointer" />
      </div>

      {/* Sign-In Button */}
      <button className="hidden md:block text-[14px] border-2 border-yellow-400 rounded-full px-9 py-3 text-white font-bold bg-[#12151e] hover:bg-yellow-300 hover:text-black">
        SIGN IN
      </button>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[106px] left-0 w-full bg-[#252631] text-white flex flex-col gap-4 p-4 z-30 md:hidden">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.route}
              className={`text-white font-semibold p-2 ${
                active === category.title ? "text-yellow-300" : "text-white"
              }`}
              onClick={() => {
                setActive(category.title);
                setIsMobileMenuOpen(false); // Close menu on selection
              }}
            >
              {category.title}
            </Link>
          ))}
          <div className="flex items-center bg-[#12151e] h-[46px] p-3 rounded-full mt-4">
            <input
              type="text"
              placeholder="Find Favorite Movie"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 border-none text-white bg-[#12151e] outline-none placeholder-gray-400"
            />
            <div className="text-[#78a3af]">|</div>
            <FiSearch className="text-yellow-300 text-lg ml-3 hover:cursor-pointer" />
          </div>
          <button className="text-[14px] border-2 border-yellow-400 rounded-full px-6 py-3 text-white font-bold bg-[#12151e] hover:bg-yellow-300 hover:text-black">
            SIGN IN
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
