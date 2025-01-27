import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { MovieCard } from "./MovieCard";
import DATA from "../data/movies.json";

const cateNames = [
  { title: "Animation" },
  { title: "Movies" },
  { title: "Romantic" },
  { title: "Drama" },
];

const NewReleaseMovies = () => {
  const [chosen, setChosen] = useState(1); // Default to "Movies"
  const [activeCategory, setActiveCategory] = useState("Movies");
  const movies = DATA.movies;

  // Filter movies based on active category
  const filteredMovies =
    activeCategory === "Movies"
      ? movies // Show all movies when "Movies" is selected
      : movies.filter((movie) => movie.category === activeCategory);

  return (
    <div
      className="text-white py-10 px-6 md:px-[16%]"
      style={{ backgroundImage: `url(/ucm_bg02.jpg)` }}
    >
      {/* Category Swiper */}
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
                slidesPerView: 2, // For very small screens (mobile phones)
              },
              768: {
                slidesPerView: 3, // For tablets
              },
              1024: {
                slidesPerView: 4, // For desktops and larger screens
              },
            }}
          >
            {cateNames.map((category, index) => (
              <SwiperSlide key={index}>
                <button
                  onClick={() => {
                    setChosen(index);
                    setActiveCategory(category.title);
                  }}
                  className={`rounded-full border-2 px-4 lg:px-6 py-2 text-sm font-bold ${
                    chosen === index
                      ? "border-yellow-300 text-yellow-300"
                      : "border-white text-white"
                  }`}
                >
                  {category.title}
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Movies Swiper */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        spaceBetween={20}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          0: { slidesPerView: 2, spaceBetween: 10 }, // For very small screens
          768: { slidesPerView: 3, spaceBetween: 15 }, // For tablets
          1024: { slidesPerView: 5, spaceBetween: 20 }, // For larger screens
        }}
      >
        {filteredMovies.map((movie, index) => (
          <SwiperSlide key={index}>
            <MovieCard movie={movie} id={movie.id} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Grid layout fallback for mobile */}
      <div className="md:hidden grid grid-cols-2 gap-4 mt-8">
        {filteredMovies.slice(0, 4).map((movie, index) => (
          <div key={index}>
            <MovieCard movie={movie} id={movie.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewReleaseMovies;
