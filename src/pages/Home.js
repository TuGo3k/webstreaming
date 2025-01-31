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
import NewRelease from "../components/NewReleaseMovies"; // Import EffectFade styles
import TopShowWatch from "../components/TopShowWatch";
import PricingStrategy from "../components/PricingStrategy";
import Footer from "../components/Footer";
import DownloadSection from "../components/DownloadSection";
import Header from "../components/Header";
const Home = () => {

  const slidemovies = [
    {
      title: "Unlimited",
      pic: "/pro1.jpg",
      genre: "Romance, Drama",
      releaseDate: "2021",
      length: "120",
    },
    {
      title: "Unlimited",
      pic: "/pro2.jpg",
      genre: "Horror, Drama",
      releaseDate: "2011",
      length: "173",
    },
    {
      title: "Unlimited",
      pic: "/pro3.jpg",
      genre: "Romance, action",
      releaseDate: "2008",
      length: "117",
    },
    {
      title: "Unlimited",
      pic: "/pro4.jpg",
      genre: "thriller animation",
      releaseDate: "2015",
      length: "159",
    },
  ];
  const fadeInOut = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.5,
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
    }, 5000); // Change card every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setShowNavbar(false);
      setShowNavbar(false);
    } else {
      // Scrolling up
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div>
      <div
  className="relative lg:mt-[100px] bg-cover bg-center bg-no-repeat h-[650px] flex items-center justify-center"
  style={{ backgroundImage: `url(${moviebg})` }}
>
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  <AnimatePresence>
    {slidemovies.map(
      (el, index) =>
        index === activeIndex && (
          <div
            key={el.title}
            className="relative z-10 flex flex-col md:flex-row w-full h-full items-center gap-8 mx-[5%] md:mx-[13%] text-white p-8"
          >
            {/* Left Side: Text Content */}
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
                className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center md:text-left"
              >
                {el.title}
                <span className="text-yellow-300"> Movie</span>, TV Shows, &
                More.
              </motion.h1>
              <motion.div
                variants={fadeIn("up", 0.8)}
                initial="hidden"
                animate="show"
                exit="exit"
                className="flex flex-wrap items-center gap-2 sm:gap-4 mt-4 justify-center md:justify-start"
              >
                <span className="bg-white text-black px-3 py-1 rounded-lg text-xs sm:text-sm font-bold">
                  PG 18
                </span>
                <span className="bg-white text-black px-3 py-1 rounded-lg text-xs sm:text-sm font-bold">
                  HD
                </span>
                <span className="text-xs sm:text-sm">{el.genre}</span>
                <FaRegCalendarAlt className="text-yellow-300" />
                <span className="text-xs sm:text-sm">{el.releaseDate}</span>
                <FaRegClock className="text-yellow-300" />
                <span className="text-xs sm:text-sm">{el.length} min</span>
              </motion.div>
              <motion.button
                variants={fadeIn("up", 1.1)}
                initial="hidden"
                animate="show"
                exit="exit"
                className="hidden lg:flex mt-8 px-6 py-3 border-[#e4d804] border-2 rounded-full items-center gap-2 font-bold text-white hover:bg-yellow-300 hover:text-black mx-auto md:mx-0"
              >
                <FiPlay className="text-lg" />
                Watch Now
              </motion.button>
            </motion.div>

            {/* Right Side: Image */}
            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              animate="show"
              exit="exit"
              className="flex-shrink-0 w-full md:w-[610px] h-[300px] md:h-[470px] border-4 border-yellow-300 rounded-lg overflow-hidden relative"
            >
              <img
                src={el.pic}
                alt="Movie Thumbnail"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
            </motion.div>
            <motion.button
                variants={fadeIn("up", 1.1)}
                initial="hidden"
                animate="show"
                exit="exit"
                className="flex lg:hidden my-5 px-6 py-3 border-[#e4d804] border-2 rounded-full  items-center gap-2 font-bold text-white hover:bg-yellow-300 hover:text-black mx-auto md:mx-0"
              >
                <FiPlay className="text-lg" />
                Watch Now
              </motion.button>
          </div>
        )
    )}
  </AnimatePresence>
</div>

      <NewRelease />
      <DownloadSection />
      <TopShowWatch />
      <PricingStrategy />
      <Footer />
    </div>
  );
};

export default Home;
