import { IoIosStar } from "react-icons/io";
import { BiSolidLike } from "react-icons/bi";
import { Link } from "react-router-dom";
import DATA from "../data/movies.json";
export const MovieCard02 = ({ movie, id }) => {
  return (
    <Link
      to={`/movie/${id}`}
      className="bg-gray-800 flex flex-col  justify-between text-white p-1 lg:p-4 rounded-lg shadow-md h-[180px] lg:h-[486px]"
    >
      <div className="fuck w-full  flex flex-col lg:h-full items-center justify-between lg:mb-7">
        <div className="lg:h-[283px] h-[133px]">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, index) => (
            <IoIosStar
              key={index}
              className="text-yellow-400 size-2 lg:size-4"
            />
          ))}
        </div>
        <h3 className="lg:text-xl text-[9px] flex text-center font-bold ">
          {movie.title}
        </h3>
        <p className="hidden lg:flex text-sm  text-gray-400">{movie.genre}</p>
      </div>
      <div className="flex justify-between px-3">
        <div className="w-[60%] lg:flex hidden gap-5">
          {movie.hd && (
            <span className="bg-white text-black px-2 py-1 rounded text-xs font-bold">
              HD
            </span>
          )}
          <span className="bg-white text-black px-2 py-1 rounded text-xs font-bold">
            {movie.language}
          </span>
        </div>
        <span className="lg:flex hidden items-center gap-1 text-sm">
          <BiSolidLike className="text-yellow-400" />
          {movie.rating}
        </span>
      </div>
    </Link>
  );
};
