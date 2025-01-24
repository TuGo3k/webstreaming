import { IoIosStar } from "react-icons/io";
import { BiSolidLike } from "react-icons/bi";
import { Link } from "react-router-dom";
import DATA from "../data/movies.json";
export const MovieCard = ({ movie, id }) => {

  return (
    <Link to={`/movie/${id}`} className="bg-gray-800 flex flex-col  justify-between text-white p-4 rounded-lg shadow-md h-[486px]">
      <div className="fuck w-full h-full flex flex-col items-center justify-between mb-7">
      <img
        src={movie.image}
        alt={movie.title}
        className="w-full h-[283px] object-cover rounded-lg"
      />
      <div className="flex">
        {Array.from({ length: 5 }).map((_, index) => (
          <IoIosStar key={index} className="text-yellow-400" />
        ))}
      </div>
      <h3 className="text-xl font-bold">{movie.title}</h3>
      <p className="text-sm text-gray-400">{movie.genre}</p>
      
      </div>
      <div className="flex justify-between px-3">
       <div className="w-[60%] flex gap-5">
       {movie.hd && (
          <span className="bg-white text-black px-2 py-1 rounded text-xs font-bold">
            HD
          </span>
        )}
        <span className="bg-white text-black px-2 py-1 rounded text-xs font-bold">
          {movie.language}
        </span>
       </div>
        <span className="flex items-center gap-1 text-sm">
          <BiSolidLike className="text-yellow-400" />
          {movie.rating}
        </span>
      </div>
    </Link>
  );
};
