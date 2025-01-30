import React from "react";
import bg from "../assets/images/tv_series_bg02.jpg";
import { IoMdTime } from "react-icons/io";
import { BiSolidLike } from "react-icons/bi";
const TVSeries = () => {
  const seriesData = [
    {
      title: "Women's Day",
      year: "2021",
      image: "/pic1.jpg", // Replace with actual image paths
      duration: "128 min",
      rating: "3.5",
      quality: "HD",
    },
    {
      title: "The Perfect Match",
      year: "2021",
      image: "/pic2.jpg",
      duration: "128 min",
      rating: "3.5",
      quality: "4K",
    },
    {
      title: "The Dog Woof",
      year: "2021",
      image: "/pic3.jpg",
      duration: "128 min",
      rating: "3.5",
      quality: "HD",
    },
    {
      title: "The Easy Reach",
      year: "2021",
      image: "/pic4.jpg",
      duration: "128 min",
      rating: "3.5",
      quality: "HD",
    },
  ];

  return (
    <div
      className=" text-white py-10  px-[15%] "
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="w-full">
        <h2 className="text-lg text-yellow-400 uppercase text-center">
          Best TV Series
        </h2>
        <h1 className="text-3xl font-bold text-center mb-8">
          World Best TV Series
        </h1>
        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {seriesData.map((series, index) => (
            <div
              key={index}
              className="bg-transparent rounded-lg overflow-hidden cursor-pointer lg:text-start text-center"
            >
              <img
                src={series.image}
                alt={series.title}
                className="w-full lg:h-[430px] object-cover"
              />
              <div className="p-1 lg:p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm lg:text-lg font-bold mb-2">{series.title}</h3>
                  <p className="hidden lg:block text-sm text-gray-400">{series.year}</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="mt-2 hidden lg:inline-block text-xs font-bold text-black bg-yellow-400 px-2 py-1 rounded ">
                    {series.quality}
                  </span>
                  <div className="hidden lg:flex items-center justify-between lg:mt-4 text-sm text-gray-400 gap-2">
                    <span className="flex items-center">
                      <span className="material-icons text-yellow-400 text-base mr-1">
                        <IoMdTime />
                      </span>
                      {series.duration}
                    </span>
                    <span className="flex items-center">
                      <span className="material-icons text-yellow-400 text-base mr-1">
                        <BiSolidLike />
                      </span>
                      {series.rating}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TVSeries;
