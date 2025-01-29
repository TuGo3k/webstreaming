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
  const { id } = useParams(); // Extract the movie ID from URL
  const [movie, setMovie] = useState(null); // Initialize movie state as null

  useEffect(() => {
    // Find the movie by ID and update the state
    const foundMovie = movies.find((m) => m.id === parseInt(id));
    setMovie(foundMovie);
  }, [id, movies]); // Use id and movies as dependencies

  // Handle case where movie is not found or is null
  if (!movie) {
    return <div className="text-white p-6">Movie not found.</div>;
  }

  return (
    <div>
      <div
        className="bg-gray-900 mt-[105px] text-white p-6  shadow-lg w-full  px-[15%] py-[4%]"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className=" flex items-center gap-12">
          {/* Image Section */}
          <div className=" flex justify-center h-[430px] w-[300px] ">
            <img
              src={movie.image} // Replace with actual image field
              alt={movie.title} // Use movie title as alt text
              className="rounded-lg shadow-md  "
            />
       
          </div>

          {/* Text Section */}
          <div className="h-full w-2/4">
            <h1 className="text-4xl md:text-6xl font-bold">
              {movie.title}
          
            </h1>
            <div className="flex items-center gap-4 mt-4">
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
            <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum est leo, hendrerit eget hendrerit sed, ultrices imperdiet sem. Vestibulum eget ligula nunc. Phasellus 
            </p>
           <div className="w-[475px] bg-[#242c38] flex items-center justify-between p-6 mt-8">
            <div className="flex gap-5">
            <div className="flex items-center flex-col pr-5 border-r-2 border-[#3a4553]">
            <FaShareAlt />
            <p className="text-[3a4553]">Share</p>
            </div>
            <div>
                <h4 className="font-bold text-[16px]">Prime Video</h4>
                <h6 className="text-[12px]">Streaming Channels</h6>
                
            </div>
            </div>
           <button className=" px-7 py-3.5 border-[#e4d804] border-2 rounded-full flex items-center gap-2 font-bold text-[10px] text-white hover:bg-yellow-300 hover:text-black">
              <FiPlay className="text-md" />
              Watch Now
            </button>
           </div>
          </div>
            <div className="w-1/4 h-full relative">
            <div className=" bg-yellow-400 rounded-lg h-[110px] w-[240px] absolute -right-[50px]  flex items-center justify-center transform rotate-90 gap-3 cursor-pointer">
                      <p className="text-black text-sm font-semibold tracking-widest ">
                        DOWNLOAD
                      </p>
                      <GoDownload className="size-[24px] text-black -rotate-90" />
                    </div>
            </div>
        </div>
      </div>
      <WatchEpisode image={movie.image}/>
    </div>
  );
};

export default MovieDetail;
