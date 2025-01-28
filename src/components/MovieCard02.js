import { IoIosStar } from "react-icons/io";
import { BiSolidLike } from "react-icons/bi";
import { Link } from "react-router-dom";
import DATA from "../data/movies.json";
export const MovieCard02 = ({ movie, id }) => {
  return (
    <div>
      <Link
        to={`/movie/${id}`}
        className="flex flex-col lg:w-[300px]  lg:h-full justify-between text-white   rounded-lg shadow-md lg:mb-10 duration-150px transition-all ease-in-out"
      >
        <div className="fuck w-full flex flex-col lg:h-full items-center gap-1 mb-5">
          <div className="lg:w-full h-full">
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex justify-between w-full items-center">
            <h3 className="lg:text-xl text-[9px] flex text-center font-bold ">
              {movie.title}
            </h3>
            <p className="hidden font-bold text-yellow-400 lg:flex text-sm  ">
              {movie.date}
            </p>
          </div>
        </div>
        <div className="flex  justify-between lg:px-0 px-3">
          <div className="w-[60%] lg:flex hidden gap-5">
            {movie.hd && (
              <span className="bg-white text-black px-2 py-1 rounded text-xs font-bold">
                HD
              </span>
            )}
          </div>
          <span className="lg:flex hidden items-center gap-1 text-sm">
            <BiSolidLike className="text-yellow-400" />
            {movie.rating}
          </span>
        </div>
      </Link>
    </div>
  );
};
