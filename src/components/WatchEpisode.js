import React, { useState } from "react";
import { IoMdTime } from "react-icons/io";
import { FaPlay } from "react-icons/fa6";
import AboutHistory from "./AboutHistory";
import bg from "../assets/images/episode_bg.jpg";
import { IoEyeSharp } from "react-icons/io5";
import TVSeries from "./TVSeries";
import Footer from "./Footer";
const WatchEpisode = ({ image }) => {
  // State to track which season is expanded
  const [activeSeason, setActiveSeason] = useState(0);

  const seasons = [
    {
      title: "Season 1",
      episodes: [
        { id: 1, title: "The World Is Purple", duration: "28 Min" },
        { id: 2, title: "Meaner Than Evil", duration: "28 Min" },
        { id: 3, title: "I Killed a Man Today", duration: "28 Min" },
        { id: 4, title: "Cowboys and Dreamers", duration: "28 Min" },
        { id: 5, title: "Freight Trains and Monsters", duration: "28 Min" },
        { id: 1, title: "The World Is Purple", duration: "28 Min" },
        { id: 2, title: "Meaner Than Evil", duration: "28 Min" },
        { id: 3, title: "I Killed a Man Today", duration: "28 Min" },
        { id: 4, title: "Cowboys and Dreamers", duration: "28 Min" },
        { id: 5, title: "Freight Trains and Monsters", duration: "28 Min" },
        { id: 1, title: "The World Is Purple", duration: "28 Min" },
        { id: 2, title: "Meaner Than Evil", duration: "28 Min" },
        { id: 3, title: "I Killed a Man Today", duration: "28 Min" },
        { id: 4, title: "Cowboys and Dreamers", duration: "28 Min" },
        { id: 5, title: "Freight Trains and Monsters", duration: "28 Min" },
        { id: 1, title: "The World Is Purple", duration: "28 Min" },
        { id: 2, title: "Meaner Than Evil", duration: "28 Min" },
        { id: 3, title: "I Killed a Man Today", duration: "28 Min" },
        { id: 4, title: "Cowboys and Dreamers", duration: "28 Min" },
        { id: 5, title: "Freight Trains and Monsters", duration: "28 Min" },
        { id: 1, title: "The World Is Purple", duration: "28 Min" },
        { id: 2, title: "Meaner Than Evil", duration: "28 Min" },
        { id: 3, title: "I Killed a Man Today", duration: "28 Min" },
        { id: 4, title: "Cowboys and Dreamers", duration: "28 Min" },
        { id: 5, title: "Freight Trains and Monsters", duration: "28 Min" },
        { id: 1, title: "The World Is Purple", duration: "28 Min" },
        { id: 2, title: "Meaner Than Evil", duration: "28 Min" },
        { id: 3, title: "I Killed a Man Today", duration: "28 Min" },
        { id: 4, title: "Cowboys and Dreamers", duration: "28 Min" },
        { id: 5, title: "Freight Trains and Monsters", duration: "28 Min" },
      ],
    },
    {
      title: "Season 2",
      episodes: [
        { id: 1, title: "The World Is Purple", duration: "28 Min" },
        { id: 2, title: "Meaner Than Evil", duration: "28 Min" },
        { id: 3, title: "I Killed a Man Today", duration: "28 Min" },
        { id: 4, title: "Cowboys and Dreamers", duration: "28 Min" },
        { id: 5, title: "Freight Trains and Monsters", duration: "28 Min" },
        { id: 1, title: "The World Is Purple", duration: "28 Min" },
        { id: 2, title: "Meaner Than Evil", duration: "28 Min" },
        { id: 3, title: "I Killed a Man Today", duration: "28 Min" },
        { id: 4, title: "Cowboys and Dreamers", duration: "28 Min" },
        { id: 5, title: "Freight Trains and Monsters", duration: "28 Min" },
        { id: 1, title: "The World Is Purple", duration: "28 Min" },
        { id: 2, title: "Meaner Than Evil", duration: "28 Min" },
        { id: 3, title: "I Killed a Man Today", duration: "28 Min" },
        { id: 4, title: "Cowboys and Dreamers", duration: "28 Min" },
        { id: 5, title: "Freight Trains and Monsters", duration: "28 Min" },
      ],
    },
  ];

  const toggleSeason = (index) => {
    setActiveSeason(activeSeason === index ? null : index); // Toggle active season
  };

  return (
    <div>
        <div
      className="min-h-screen  text-white flex flex-col items-center py-10 px-[15%]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Main Title */}
      <div className="text-center mb-8">
        <p className="text-yellow-500 uppercase tracking-wide font-bold">
          Online Streaming
        </p>
        <h1 className="text-4xl font-bold mt-2">Watch Full Episode</h1>
      </div>

      <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:items-start  w-full overflow-hidden ">
        {/* Left Side: Episodes */}
        <div className="lg:w-2/3 ">
          <div className="container flex justify-between items-center mb-4 space-y-4">
            <div className="left float-left">
              <span className="text-yellow-300 text-[12px]">ONLINE STREAMING</span>
              <h1 className="text-[30px] font-extrabold">Watch Full Episode</h1>
            </div>
            <div className="flex gap-2 items-center">2.7 million <IoEyeSharp className="text-yellow-300"/></div>
          </div>
          <hr className="border-b-2 border-black shadow-sm shadow-border mb-4 shadow-white"/>

          {seasons.map((season, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 onClick={() => toggleSeason(index)} className="text-xl font-bold cursor-pointer">{season.title}</h2>
                <button
                  onClick={() => toggleSeason(index)}
                  className={`text-black px-4 py-2 rounded-lgtext-white hover:text-yellow-500 ${
                    activeSeason === index ? "text-yellow-300" : "text-white"
                  }`}
                >
                  Full Episodes
                </button>
              </div>
              <div
                className={`transition-all duration-500 ease-in bg-black  overflow-auto ${
                  activeSeason === index ? "max-h-[380px]" : "max-h-0"
                }`}
              >
                <ul>
                  {season.episodes.map((episode) => (
                    <li
                      key={episode.id}
                      className="flex items-center justify-between bg-black   mx-5 py-5 border-b  hover:bg-gray-700 transition"
                    >
                      <div className="flex items-center space-x-4 ">
                        <FaPlay className="text-yellow-300" />
                        <span>{episode.title}</span>
                      </div>
                      <div className="flex items-center space-x-2 ">
                        <IoMdTime className="text-yellow-300" />
                        <span>{episode.duration}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <hr className="border-b-2 border-black shadow-sm shadow-border shadow-white"/>
        </div>

        {/* Right Side: Poster */}
        <div className="lg:w-1/3 flex flex-col items-center lg:items-end mt-10 lg:mt-0 h-[526px]">
          <img
            src={image} // Replace with your actual image URL
            alt="Movie Poster"
            className="rounded-lg shadow-lg h-full w-full object-cover"
          />
        </div>
      </div>
      <AboutHistory />
    </div>
      <TVSeries />
      <Footer />
    </div>
  );
};

export default WatchEpisode;
