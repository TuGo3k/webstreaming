import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { MovieCard } from "./MovieCard";
import data from "../data/movies.json";

const cateNames = [
  { title: "Categories" },
  { title: "Categories2" },
  { title: "Categories3" },
  { title: "Categories4" },
];

const NewReleaseMovies = () => {
  const [active, setActive] = useState([0]);
  const [chosen, setChosen] = useState(0);
  const [bg, setBg] = useState(0);
  const movies = data.movies;
  return (
    <div className="bg-black text-white py-10 px-[16%]">
      <div className="flex w-full justify-between items-center text-center mb-8">
        <h2 className="text-4xl font-bold mb-6">New Release Movies</h2>
        <div className="w-[35%] flex justify-end">
          <Swiper
            modules={[Navigation]}
            navigation
            slidesPerView={3}
            className="custom-swiper"
          >
            {cateNames.map((el, index) => (
              <SwiperSlide key={index}>
                <button
                  onClick={() => {
                    setChosen(index);
                    setBg(0);
                  }}
                  className={`rounded-full border-2 px-5 py-3 text-[12px] font-bold ${
                    chosen === index ? "border-yellow-300" : "border-white "
                  }`}
                >
                  {el.title}
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        spaceBetween={50}
        slidesPerView={5}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewReleaseMovies;
