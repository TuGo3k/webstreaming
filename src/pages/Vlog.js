import React, { useState } from "react";
import BgPic from "../assets/images/blog_bg.jpg";
import MovieCard03 from "../components/Cards/MovieCard03";
import { VlogSidebar } from "../components/Vlog/VlogSidebar";

const Vlog = ({
  data = [],
  selectedId,
  handleSelectVlog,
  setIsMobileMenuOpen,
}) => {
  return (
    <div
      className="lg:mt-6 px-6 md:px-[10%] lg:px-[15%] pt-[20%] pb-[5%] md:py-[5%] flex flex-col lg:flex-row bg-cover bg-center bg-no-repeat gap-8 md:gap-12 lg:gap-16"
      style={{ backgroundImage: `url(${BgPic})` }}
    >
      <div className="w-full lg:w-2/3 gap-6 md:gap-10 flex flex-col">
        {data.length > 0 ? (
          data
            .filter((el) => (selectedId ? el.id === selectedId : true))
            .map((el, index) => (
              <MovieCard03
                key={index}
                data={el}
                id={el.id}
                onClick={() => {
                  handleSelectVlog(el.id);
                }}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              />
            ))
        ) : (
          <p className="text-white">No vlogs available.</p>
        )}
      </div>
      <VlogSidebar data={data} />
    </div>
  );
};

export default Vlog;
