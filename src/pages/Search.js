import React from "react";
import { MovieCard02 } from "../components/MovieCard02";
import Pagination from "../components/Pagination";
const Search = ({ filteredMovies, search }) => {
  
  return (
    <div
      className=" w-full h-full bg-cover bg-center -z-10 px-[5%] pt-[20%] lg:pt-[9%] pb-[25%] lg:pb-[7%]"
    >
        <img className="object-cover w-full bg-cover bg-center h-full fixed top-0 left-0 -z-10" src="/ucm_bg02.jpg"></img>
      <h2 className="text-white text-2xl pb-[5%] lg:pb-[3%]">Search Results</h2>
      <div className="w-full h-full  gap-5  grid grid-cols-3 lg:grid-cols-5">
        {filteredMovies.length > 0 && (
          filteredMovies.map(
            (movie) => <MovieCard02 id={movie.id} movie={movie} />
            //   <div key={movie.id}>{movie.title}</div>
          )
        ) }
        </div>
         {filteredMovies.length === 0 && (
          <div className="text-white text-2xl">No movies found {search}</div>
        )}
      
      {filteredMovies.length > 0 && <div className="fixed bottom-0  ">
        <Pagination
          totalPages={4}
          onPageChange={(page) => console.log("Page:", page)}
        />
        </div>}
    </div>
  );
};

export default Search;
