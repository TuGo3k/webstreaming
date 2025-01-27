import { MovieCard02 } from "../components/MovieCard02";
import DATA from "../data/movies.json";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";

const Movies = ({ movies }) => {
  const [chosen, setChosen] = useState(0); // Tracks the selected category index

  const [activeCategory, setActiveCategory] = useState("Movies");

  const cateNames = [
    { title: "Animation", route: "/category" },
    { title: "Movies" },
    { title: "Romantic" },
    { title: "Drama" },
  ];

  const filteredMovies = movies.filter(
    (movie) => activeCategory === "Movies" || movie.category === activeCategory
  );

  return (
    <div
      className="mt-[5%] px-[15%] "
      style={{ backgroundImage: `url(/ucm_bg02.jpg)` }}
    >
      {/* Category Slider */}
      <div className="flex flex-col md:flex-row w-full justify-between items-center text-center mb-8">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-0">
          New Release Movies
        </h2>
        <div className="w-full px-0 lg:mx-0 lg:w-[35%] flex justify-center lg:justify-end">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 3000 }}
            className="custom-swiper2"
            spaceBetween={10}
            breakpoints={{
              0: {
                slidesPerView: 2, // For small screens
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
                  className={`rounded-full border-2 px-2 lg:px-5 py-1 lg:py-3 text-[8px] lg:text-[12px] font-bold ${
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

      <div className="grid grid-cols-4 gap-5">
        {filteredMovies.map((movie, index) => (
          <MovieCard02 key={index} movie={movie} id={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
