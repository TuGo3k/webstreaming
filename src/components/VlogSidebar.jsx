import React from "react";
import SearchBox from "./SearchBox";
import RecentPosts from "./RecentPosts";
import TagPost from "./TagPost";
import Categories from "./Categories";

export const VlogSidebar = ({ data }) => {
  return (
    <div className="w-full lg:w-1/3 gap-6 flex flex-col">
      <SearchBox />
      <Categories />
      <RecentPosts data={data} />
      <TagPost />
    </div>
  );
};
