import React, { useState, useEffect, useRef } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { useLocation } from "react-router-dom";

const Header = ({ active, setActive, allMovies }) => {
  // const [showNavbar, setShowNavbar] = useState(true);
  const [search, setSearch] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const searchRef = useRef(null); // Ref to detect outside clicks
  const mobileMenuRef = useRef(null); // Ref to detect clicks outside mobile menu

  const categories = [
    { title: "НҮҮР", route: "/" },
    { title: "КИНО", route: "/category" },
    { title: "БҮГД", route: "/all" },
    { title: "ҮНЭ", route: "/pricing" },
    { title: "ВЛОГ", route: "/vlogs" },
    { title: "ХОЛБОО БАРИХ", route: "/contact" },
  ];

  // Handle search & update filtered movies
  const handleSearch = async (e) => {
    const { value } = e.target;
    setSearch(value);
    const filtered = await allMovies.filter((movie) =>
      movie.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setSearch(""); // Clear search when clicking outside
        setIsMobileMenuOpen(false); // Close the mobile menu when clicking outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const location = useLocation();
  const [invisibleLogin, setInvisibleLogin] = useState(false);

  useEffect(() => {
    if (
      location.pathname.includes("/login") ||
      location.pathname.includes("/signup")
    ) {
      setInvisibleLogin(true);
    } else {
      setInvisibleLogin(false);
    }
  }, [location.pathname]);

  return (
    <div className="w-full fixed top-0 left-0 bg-[#252631] lg:h-[106px] lg:flex justify-evenly items-center py-5 px-[5%] md:px-[9%] z-20">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to={"/"}>
          <div className="logo flex items-center z-20">
            <img
              onClick={() => setActive(categories[0].title)}
              src={Logo}
              className="z-30 w-[120px] lg:w-[151px] lg:h-[44px] hover:cursor-pointer"
              alt="logo"
            />
          </div>
        </Link>
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

      {/* Desktop Search Bar */}
      <div
        ref={searchRef}
        className="relative hidden md:flex items-center bg-[#12151e] h-[46px] p-3 rounded-full"
      >
        <input
          type="text"
          placeholder="Find Favorite Movie"
          value={search}
          onChange={handleSearch}
          className="flex-1 border-none text-white bg-[#12151e] outline-none placeholder-gray-400"
        />
        <div className="text-[#78a3af]">|</div>
        <FiSearch className="text-yellow-300 text-lg ml-3 hover:cursor-pointer" />

        {/* Desktop Search Results */}
        {search && (
          <div className="absolute left-0 top-full w-full bg-[#242c38] mt-1 shadow-lg rounded-md">
            {filteredMovies.length > 0 && (
              <div className="max-h-72 overflow-auto">
                {filteredMovies.map((movie) => (
                  <Link
                    key={movie.id}
                    to={"/movie/" + movie.id}
                    onClick={() => setSearch("")}
                    className="w-full h-full"
                  >
                    <div className="w-full text-md py-3 text-white px-2 hover:bg-[#12151e] hover:text-white">
                      {movie.title}
                    </div>
                  </Link>
                ))}
              </div>
            )}
            {filteredMovies.length === 0 && (
              <div className="p-2 text-gray-500">Movie not found</div>
            )}
          </div>
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="MOBILE_SEARCHBAR absolute transition-all duration-1000 ease-in-out left-0 w-full bg-[#252631] text-white flex flex-col gap-4 p-4 z-30 md:hidden"
        >
          {/* Mobile search bar */}
          <div className="relative flex items-center bg-[#12151e] h-[46px] p-3 rounded-full mt-4">
            <input
              type="text"
              placeholder="Find Favorite Movie"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value); // Update state
                handleSearch(e); // Call the function properly
              }}
              className="flex-1 border-none text-white bg-[#12151e] outline-none placeholder-gray-400"
            />
            <div className="text-[#78a3af]">|</div>
            <FiSearch className="text-yellow-300 text-lg ml-3 hover:cursor-pointer" />

            {/* Mobile Search Results */}
            {search && (
              <div className="absolute left-0 top-full w-full bg-[#242c38] mt-1 shadow-lg rounded-md">
                {filteredMovies.length > 0 && (
                  <div className="max-h-72 overflow-auto">
                    {filteredMovies.map((movie) => (
                      <Link
                        key={movie.id}
                        to={"/movie/" + movie.id}
                        onClick={() => {
                          setSearch("");
                          setIsMobileMenuOpen(false);
                        }}
                        className="w-full h-full"
                      >
                        <div className="w-full text-md py-3 text-white px-2 hover:bg-[#12151e] hover:text-white">
                          {movie.title}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
                {filteredMovies.length === 0 && (
                  <div className="p-2 text-gray-500">Movie not found</div>
                )}
              </div>
            )}
          </div>

          {/* Mobile menu categories */}
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
          <Link
            to={"/login"}
            onClick={() => {
              setIsMobileMenuOpen(false);
              setActive("");
            }}
            className={`text-[14px] border-2 border-yellow-400 rounded-full px-9 py-3 text-white font-bold bg-[#12151e] hover:bg-[#e4d804] hover:text-black ${
              invisibleLogin ? "hidden" : "block lg:hidden"
            }`}
          >
            SIGN IN
          </Link>
        </div>
      )}

      {/* Desktop Sign-In Button */}
      <Link
        to={"/login"}
        onClick={() => {
          setIsMobileMenuOpen(false);
          setActive("");
        }}
        className={`${
          invisibleLogin ? " hidden" : "hidden lg:block "
        } text-[14px] border-2 border-yellow-400 rounded-full px-9 py-3 text-white font-bold bg-[#12151e] hover:bg-[#e4d804] hover:text-black`}
      >
        SIGN IN
      </Link>
    </div>
  );
};

export default Header;
