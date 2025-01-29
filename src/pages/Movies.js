import { MovieCard02 } from "../components/MovieCard02";
import Pagination from "../components/Pagination";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";

const Movies = ({ movies }) => {
  const [chosen, setChosen] = useState(0); // Tracks the selected category index

  const [activeCategory, setActiveCategory] = useState("All");

  const cateNames = [
    { title: "All" },
    { title: "Animation" },
    { title: "Romantic" },
    { title: "Drama" },
    { title: "Horror" },
  ];

  const filteredMovies = movies.filter(
    (movie) => activeCategory === "All" || movie.category === activeCategory
  );

  return (
    <div className="h-full w-full ">
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(/ucm_bg02.jpg)` }}
      ></div>
      <div className="lg:mt-[5%] px-[15%] py-[5%] ">
        {/* Category Slider */}
        <div className="flex flex-col md:flex-row w-full justify-between items-center text-center py-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-0 text-white place-items-center lg:place-items-start">
            New Release Movies
            <div className="section-title w-[98px] rounded-b-md h-[4px] lg:h-[5px] bg-[#e4d804] mt-1 lg:mt-3 text-center mb-70 flex justify-center">
              <div className="w-[30px] rounded-b-md mt-1  h-[3px] bg-[#e4d804]"></div>
            </div>
          </h2>
          <div className="w-full px-0 lg:mx-0 lg:w-[35%] flex justify-center lg:justify-end items-center">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              className="custom-swiper2"
              spaceBetween={10}
              breakpoints={{
                0: {
                  slidesPerView: 4, // For small screens
                },
                768: {
                  slidesPerView: 3, // For tablets
                },
                1024: {
                  slidesPerView: 4, // For larger screens
                },
              }}
            >
              {cateNames.map((el, index) => (
                <SwiperSlide key={index}>
                  <button
                    onClick={() => {
                      setChosen(index);
                      setActiveCategory(el.title);
                    }}
                    className={`rounded-full border-2 px-2 lg:px-5 py-1 lg:py-3 text-[8px] lg:text-[12px] font-bold text-white ${
                      chosen === index ? "border-yellow-300" : "border-white"
                    }`}
                  >
                    {el.title}
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Movies Slider */}

        <div className="grid grid-cols-3 lg:grid-cols-4 lg:grid-cols-4 gap-3 lg:gap-10 transition-all duration-300 ease-in-out">
          {filteredMovies.map((movie, index) => (
            <MovieCard02 key={index} movie={movie} id={movie.id} />
          ))}
        </div>

        <div className="fixed bottom-0  ">
        <Pagination
          totalPages={4}
          onPageChange={(page) => console.log("Page:", page)}
        />
        </div>
      </div>
    </div>
  );
};

export default Movies;
