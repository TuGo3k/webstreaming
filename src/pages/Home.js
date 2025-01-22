import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiPlay } from "react-icons/fi";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import Logo from "../assets/images/logo.png";
import moviebg from "../assets/images/moviesbg.jpg";
import { fadeIn } from "../variants";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import NewRelease from './NewReleaseMovies' // Import EffectFade styles
import TopShowWatch from './TopShowWatch'
import PricingStrategy from "./PricingStrategy";
import Footer from "../components/Footer";
const Home = () => {
  const [active, setActive] = useState("НҮҮР");
  const [search, setSearch] = useState("");
  const categories = [
    { title: "НҮҮР", route: "/" },
    { title: "БҮГД", route: "" },
    { title: "ҮНЭ", route: "" },
    { title: "ВЛОГ", route: "" },
    { title: "ХОЛБОО БАРИХ", route: "" },
  ];
  const slidemovies = [
    {
      title: "Unlimited",
      pic: "/pro1.jpg",
      genre: "Romance, Drama",
      releaseDate: "2021",
      length: "120",
    },
    // {
    //   title: "Unlimited",
    //   pic: "/pro2.jpg",
    //   genre: "Horror, Drama",
    //   releaseDate: "2011",
    //   length: "173",
    // },
    // {
    //   title: "Unlimited",
    //   pic: "/pro3.jpg",
    //   genre: "Romance, action",
    //   releaseDate: "2008",
    //   length: "117",
    // },
    // {
    //   title: "Unlimited",
    //   pic: "/pro4.jpg",
    //   genre: "thriller animation",
    //   releaseDate: "2015",
    //   length: "159",
    // },
  ];
  const fadeInOut = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slidemovies.length);
    }, 3000); // Change card every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="fixed top-0 left-0 Category bg-[#252631] w-full h-[106px] flex justify-evenly px-[9%] items-center z-20">
        <div className="logo h-full flex items-center">
          <img
            src={Logo}
            className="Logo w-[151px] h-[44px] hover:cursor-pointer"
            alt="logo"
          />
        </div>

        {categories.map((category, index) => (
          <button
            key={index}
            className={`text-white font-semibold p-2 ${
              active === category.title ? "text-yellow-300" : "text-white"
            }`}
            onClick={() => setActive(category.title)}
          >
            {category.title}
          </button>
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
      <div
        className="relative mt-[100px] bg-cover bg-center bg-no-repeat h-[650px] flex items-center justify-center "
        style={{ backgroundImage: `url(${moviebg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <AnimatePresence>
          {slidemovies.map(
            (el, index) =>
              index === activeIndex && (
                <div
                  key={el.title}
                  className="relative z-10 flex w-full h-full items-center gap-8 mx-[13%]  text-white p-8"
                >
                  <motion.div
                    className="flex-1"
                    variants={fadeInOut}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <motion.h1
                      variants={fadeIn("up", 0.5)}
                      initial="hidden"
                      animate="show"
                        exit="exit"
                      className="text-4xl md:text-6xl font-bold"
                    >
                      {el.title}
                      <span className="text-yellow-300"> Movie</span>, TV Shows, & More.
                    </motion.h1>
                    <motion.div
                      variants={fadeIn("up", 0.8)}
                      initial="hidden"
                      animate="show"
                        exit="exit"
                      className="flex items-center gap-4 mt-4"
                    >
                      <span className="bg-white text-black px-3 py-1 rounded-lg text-sm font-bold">
                        PG 18
                      </span>
                      <span className="bg-white text-black px-3 py-1 rounded-lg text-sm font-bold">
                        HD
                      </span>
                      <span className="text-sm">{el.genre}</span>
                      <FaRegCalendarAlt className="text-yellow-300" />
                      <span className="text-sm">{el.releaseDate}</span>
                      <FaRegClock className="text-yellow-300" />
                      <span className="text-sm">{el.length} min</span>
                    </motion.div>
                    <motion.button
                      variants={fadeIn("up", 1.1)}
                      initial="hidden"
                      animate="show"
                        exit="exit"
                      className="mt-8 px-6 py-3 border-yellow-300 border-2 rounded-full flex items-center gap-2 font-bold text-white hover:bg-yellow-300 hover:text-black"
                    >
                      <FiPlay className="text-lg" />
                      Watch Now
                    </motion.button>
                  </motion.div>
                  <motion.div
                    variants={fadeIn("left", 0.5)}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    className="flex-shrink-0 w-[610px] h-[470px] border-4 border-yellow-300 rounded-lg overflow-hidden relative"
                  >
                    <img
                      src={el.pic}
                      alt="Movie Thumbnail"
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
                    />
                  </motion.div>
                </div>
              )
          )}
        </AnimatePresence>
      </div>
      <NewRelease/>
      <TopShowWatch />
      <PricingStrategy />
      <Footer />
    </div>
  );
};

export default Home;
