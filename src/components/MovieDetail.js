import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import bg from "../assets/images/moviesbg2.jpg";
import { FiPlay } from "react-icons/fi";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import { FaShareAlt } from "react-icons/fa";
import WatchEpisode from "./WatchEpisode";

const MovieDetail = ({ movies }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const foundMovie = movies.find((m) => m.id === parseInt(id));
    setMovie(foundMovie);
  }, [id, movies]);

  if (!movie) {
    return <div className="text-white p-6">Movie not found.</div>;
  }

  return (
    <div>
      <div
        className="bg-gray-900 lg:mt-[105px] text-white px-6 md:px-[10%] py-6 md:py-[4%] shadow-lg w-full"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          {/* Image Section */}
          <div className="flex justify-center w-1/2 md:w-[300px]">
            <img
              src={movie.image}
              alt={movie.title}
              className="rounded-lg shadow-md w-full md:w-[300px] h-auto"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-2/4">
            <h1 className="text-3xl md:text-5xl font-bold text-center lg:text-left">
              {movie.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-4">
              <span className="bg-white text-black px-3 py-1 rounded-lg text-sm font-bold">
                PG 18
              </span>
              <span className="bg-white text-black px-3 py-1 rounded-lg text-sm font-bold">
                HD
              </span>
              <span className="text-sm">{movie.genre}</span>
              <FaRegCalendarAlt className="text-yellow-300" />
              <span className="text-sm">{movie.releaseDate}</span>
              <FaRegClock className="text-yellow-300" />
              <span className="text-sm">{movie.length} min</span>
            </div>

            <p className="mt-4 text-sm md:text-base leading-relaxed max-h-[100px] md:max-h-none overflow-hidden">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
              est leo, hendrerit eget hendrerit sed, ultrices imperdiet sem.
              Vestibulum eget ligula nunc. Phasellus...
            </p>

            {/* Streaming and Watch Now */}
            <div className="w-full md:w-[475px] bg-[#242c38] flex flex-col md:flex-row items-center justify-between p-6 mt-8 rounded-lg">
              <div className="flex gap-5 items-center">
                <div className="flex flex-col items-center pr-5 border-r-2 border-[#3a4553]">
                  <FaShareAlt />
                  <p className="text-gray-400 text-xs">Share</p>
                </div>
                <div>
                  <h4 className="font-bold text-[16px]">Prime Video</h4>
                  <h6 className="text-[12px] text-gray-400">Streaming Channels</h6>
                </div>
              </div>

              <button className="mt-4 md:mt-0 px-6 py-3 border-[#e4d804] border-2 rounded-full flex items-center gap-2 font-bold text-xs text-white hover:bg-yellow-300 hover:text-black transition">
                <FiPlay className="text-md" />
                Watch Now
              </button>
            </div>
          </div>

          {/* Download Button (Moves Below on Mobile) */}
          <div className="w-full lg:w-auto flex justify-center lg:block mt-4 lg:mt-0">
            <button className="bg-yellow-400 rounded-lg px-6 py-3 flex items-center gap-3 font-semibold tracking-widest text-black shadow-md hover:bg-yellow-500 transition">
              DOWNLOAD
              <GoDownload className="text-black" />
            </button>
          </div>
        </div>
      </div>

      {/* Watch Episode Section */}
      <WatchEpisode image={movie.image} />
    </div>
  );
};

export default MovieDetail;
