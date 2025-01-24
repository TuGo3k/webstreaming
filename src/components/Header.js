import React from "react";
import { FiSearch } from "react-icons/fi";
import Logo from "../assets/images/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [active, setActive] = useState("НҮҮР");
  const [search, setSearch] = useState("");
  const categories = [
    { title: "НҮҮР", route: "/" },
    { title: "БҮГД", route: "/asd" },
    { title: "ҮНЭ", route: "" },
    { title: "ВЛОГ", route: "" },
    { title: "ХОЛБОО БАРИХ", route: "" },
  ];
  return (
    <div
      className={`fixed top-0 left-0 Category bg-[#252631] w-full h-[106px] flex justify-evenly px-[9%] items-center z-20 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="logo h-full flex items-center">
        <img
          src={Logo}
          className="Logo w-[151px] h-[44px] hover:cursor-pointer"
          alt="logo"
        />
      </div>

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

      <div className="flex items-center bg-[#12151e] h-[46px] p-3 rounded-full">
        <input
          type="text"
          placeholder="Find Favorite Movie"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border-none text-white bg-[#12151e] p- outline-none placeholder-gray-400"
        />
        <div className="text-[#78a3af]">|</div>
        <FiSearch className="text-yellow-300 text-lg ml-3 hover:cursor-pointer" />
      </div>
      <button className="text-[14px] border-2 border-yellow-400 rounded-full px-9 py-3 text-white font-bold bg-[#12151e] hover:bg-yellow-300 hover:text-black">
        SIGN IN
      </button>
    </div>
  );
};

export default Header;
