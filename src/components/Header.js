import React, { useState, useEffect } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/images/logo.png";

const Header = ({ active, setActive }) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [search, setSearch] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = [
    { title: "НҮҮР", route: "/" },
    { title: "КИНО", route: "/category" },
    { title: "БҮГД", route: "/all" },
    { title: "ҮНЭ", route: "/pricing" },
    { title: "ВЛОГ", route: "/vlog" },
    { title: "ХОЛБОО БАРИХ", route: "/contact" },
  ];

  // Automatically set the active category based on the route

  return (
    <div
      className={`w-full lg:fixed top-0 left-0 bg-[#252631] lg:h-[106px] lg:flex justify-evenly items-center py-5 px-[5%] md:px-[9%] z-20 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="logo flex items-center">
          <img
            src={Logo}
            className="w-[120px] lg:w-[151px] lg:h-[44px] hover:cursor-pointer"
            alt="logo"
          />
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
      </div>

      {/* Desktop Navbar */}
      <div className="hidden md:flex gap-6">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={category.route}
            className={`text-white font-semibold p-2 hover:text-yellow-300 ${
              active === category.title ? "text-yellow-300" : "text-white"
            }`}
            onClick={() => setActive(category.title)}
          >
            {category.title}
          </Link>
        ))}
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
      <Link
        to={"login"}
        className="hidden md:block text-[14px] border-2 border-yellow-400 rounded-full px-9 py-3 text-white font-bold bg-[#12151e] hover:bg-[#e4d804] hover:text-black"
      >
        SIGN IN
      </Link>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="transition-all duration-1000 ease-in-out left-0 w-full bg-[#252631] text-white flex flex-col gap-4 p-4 z-30 md:hidden">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.route}
              className={`text-white font-semibold p-2 ${
                active === category.title ? "text-yellow-300" : "text-white"
              }`}
              onClick={() => {
                setActive(category.title);
                setIsMobileMenuOpen(false);
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
          <Link
            to={"/login"}
            className="text-[14px] border-2 border-[#e4d804] rounded-full px-6 py-3 text-white font-bold bg-[#12151e] hover:bg-yellow-300 hover:text-black"
          >
            SIGN IN
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
