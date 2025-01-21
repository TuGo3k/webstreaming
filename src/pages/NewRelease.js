import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper";  // Correct way to import Navigation module
import "swiper/css";
import "swiper/css/navigation";

const movies = [
  {
    title: "Message in a Bottle",
    genre: "Adventure",
    image: "/poster1.jpg",
    rating: 3.5,
    hd: true,
    language: "English",
  },
  {
    title: "The Parkar Legend",
    genre: "Adventure",
    image: "/poster2.jpg",
    rating: 3.5,
    hd: true,
    language: "English",
  },
  {
    title: "The Tonoy 88 Bottle",
    genre: "Adventure",
    image: "/poster3.jpg",
    rating: 3.5,
    hd: true,
    language: "English",
  },
  {
    title: "The Ackle Bottle",
    genre: "Adventure",
    image: "/poster4.jpg",
    rating: 3.5,
    hd: true,
    language: "English",
  },
  {
    title: "The Legend of Emo",
    genre: "Adventure",
    image: "/poster5.jpg",
    rating: 3.5,
    hd: true,
    language: "English",
  },
  {
    title: "Message in a Bottle",
    genre: "Adventure",
    image: "/poster6.jpg",
    rating: 3.5,
    hd: true,
    language: "English",
  },
  {
    title: "The Parkar Legend",
    genre: "Adventure",
    image: "/poster7.jpg",
    rating: 3.5,
    hd: true,
    language: "English",
  },
  {
    title: "The Tonoy 88 Bottle",
    genre: "Adventure",
    image: "/poster8.jpg",
    rating: 3.5,
    hd: true,
    language: "English",
  },
  {
    title: "The Ackle Bottle",
    genre: "Adventure",
    image: "/poster9.jpg",
    rating: 3.5,
    hd: true,
    language: "English",
  },
  {
    title: "The Legend of Emo",
    genre: "Adventure",
    image: "/poster10.jpg",
    rating: 3.5,
    hd: true,
    language: "English",
  },
];

const MovieCard = ({ movie }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-64 object-cover rounded-lg"
      />
      <div className="mt-4">
        <h3 className="text-xl font-bold">{movie.title}</h3>
        <p className="text-sm text-gray-400">{movie.genre}</p>
        <div className="flex items-center gap-2 mt-2">
          {movie.hd && (
            <span className="bg-white text-black px-2 py-1 rounded text-xs font-bold">
              HD
            </span>
          )}
          <span className="bg-white text-black px-2 py-1 rounded text-xs font-bold">
            {movie.language}
          </span>
          <span className="flex items-center gap-1 text-sm">
            <i className="fas fa-thumbs-up text-yellow-400"></i>
            {movie.rating}
          </span>
        </div>
      </div>
    </div>
  );
};

const NewReleaseMovies = () => {
  return (
    <div className="bg-black text-white py-10 px-[13%]">
      <h2 className="text-4xl font-bold mb-6">New Release Movies</h2>
      <Swiper
        // modules={[Navigation]}  // Correct usage of Navigation module
        // navigation
        spaceBetween={50}
        slidesPerView={5}
        loop={true}
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
