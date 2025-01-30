import React from "react";
import { MovieCard } from "./MovieCard01";
import data from "../data/movies.json";
const TopShowWatch = () => {
  const movies = data.movies;
  return (
    <div className="bg-[#13111a] py-12 lg:py-24">
      <div className="flex flex-col items-center text-slate-200 lg:pb-24 pb-12">
        <h5 className="lg:text-[12px] text-sm">TOP RATED MOVIES</h5>
        <h1 className="lg:text-[36px] text-2xl font-bold  place-items-center ">
          Top Online Shows Watch
          <div className=" w-[98px] rounded-b-md h-[5px] bg-[#e4d804] mt-3 flex justify-center">
              <div className="w-[30px] rounded-b-md mt-1 h-[5px] bg-[#e4d804]"></div>
            </div>
        </h1>
      </div>
      <div className="px-[5%] lg:px-[16%] grid lg:grid-cols-5 grid-cols-3 gap-3 lg:gap-5 ">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} id={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default TopShowWatch;
