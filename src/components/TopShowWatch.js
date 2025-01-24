import React from "react";
import { MovieCard } from "./MovieCard";
import data from "../data/movies.json";
const TopShowWatch = () => {
  const movies = data.movies;
  return (
    <div className="bg-[#13111a] py-24">
      <div className="flex flex-col items-center text-slate-200 pb-24">
        <h5 className="text-[12px]">TOP RATED MOVIES</h5>
        <h1 className="text-[36px] font-bold">Top Online Shows Watch</h1>
      </div>
      <div className="px-[16%] grid grid-cols-5 gap-5 ">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} id={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default TopShowWatch;
