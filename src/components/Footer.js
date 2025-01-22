import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white w-full">
      <div className="container px-[15%] w-full flex-col flex items-center justify-between py-4 ">
        <div className="flex w-full justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-yellow-500 text-black font-bold text-xl rounded-full p-2 mr-2">
              🎥
            </div>
            <span className="text-2xl font-semibold">Movflix</span>
          </div>

       <div className="flex gap-10 items-center">
           {/* Navigation */}
           <nav className="hidden md:flex gap-8">
            <a href="#" className="hover:text-yellow-500">
              Home
            </a>
            <a href="#" className="hover:text-yellow-500">
              Movie
            </a>
            <a href="#" className="hover:text-yellow-500">
              TV Show
            </a>
            <a href="#" className="hover:text-yellow-500">
              Pages
            </a>
            <a href="#" className="hover:text-yellow-500">
              Pricing
            </a>
          </nav>

          {/* Search Bar */}
          <div className="flex items-center bg-gray-800 rounded-full px-4 py-2">
            <input
              type="text"
              placeholder="Find Favorite Movie"
              className="bg-transparent text-white placeholder-gray-400 outline-none w-40"
            />
            <button className="ml-2 text-yellow-500">🔍</button>
          </div>
       </div>
        </div>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            🐦
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            📘
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            📌
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            🔗
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
