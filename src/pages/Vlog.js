import React from "react";
import MovieCard03 from "../components/MovieCard03";
import SearchBox from "../components/SearchBox";
import RecentPosts from "../components/RecentPosts";
import TagPost from "../components/TagPost";
import Categories from "../components/Categories";
import BgPic from "../assets/images/blog_bg.jpg";
import { Outlet } from "react-router-dom";

const Vlog = ({ data = [] }) => {
  return (
    <div
      className="lg:mt-6 px-6 md:px-[10%] lg:px-[15%] py-6 md:py-[5%] flex flex-col lg:flex-row bg-cover bg-center bg-no-repeat gap-8 md:gap-12 lg:gap-16"
      style={{ backgroundImage: `url(${BgPic})` }}
    >
      <div className="w-full lg:w-2/3 gap-6 md:gap-10 flex flex-col">
        {data.length > 0 ? (
          data.map((el, index) => (
            <MovieCard03 key={index} data={el} id={el.id} />
          ))
        ) : (
          <p className="text-white">No vlogs available.</p>
        )}
      <Outlet />
      </div>
      <div className="w-full lg:w-1/3 gap-6 flex flex-col">
        <SearchBox />
        <Categories />
        <RecentPosts data={data} />
        <TagPost />
      </div>

      {/* Outlet for nested PostPage */}
      
    </div>
  );
};

export default Vlog;
