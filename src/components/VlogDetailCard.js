import React, { useState, useEffect } from "react";
import { FaRegComment, FaRegHeart, FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { VlogSidebar } from "./VlogSidebar";
import BgPic from "../assets/images/blog_bg.jpg";
const PostPage = ({ data = [] }) => {
  const { id } = useParams();
  const [vlog, setVlog] = useState(null);

  useEffect(() => {
    // Log to check if Vlogs is an array
    console.log("Vlogs:", data);

    if (Array.isArray(data)) {
      const foundVlog = data.find((m) => m.id === parseInt(id));
      setVlog(foundVlog);
    }
  }, [id, data]);

  // Handle case where vlog is not found
  if (!vlog) {
    return <div className="text-white p-6">Vlog not found.</div>;
  }

  return (
    // lg:mt-6 px-6 md:px-[10%] lg:px-[15%] py-6 md:py-[5%] flex flex-col lg:flex-row bg-cover bg-center bg-no-repeat gap-8 md:gap-12 lg:gap-16
    <div
      className="min-h-screen w-full lg:px-[15%] pt-[20%] lg:pt-[5%] pb-[5%] lg:pb-0 lg:mt-6   lg:gap-16 flex items-start justify-between  bg-gray-900 p-4"
      style={{ backgroundImage: `url(${BgPic})` }}
    >
      <div className="lg:w-2/3 bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg">
        <h2 className="text-3xl font-bold mt-2 p-6">
          {vlog.title || "Untitled Vlog"}
        </h2>
        <img
          src={vlog.image || "/default-image.jpg"} // Use vlog's image if available
          alt={vlog.title || "Vlog Image"}
          className="w-full h-full object-cover"
        />
        <div className="p-6">
          <div className="flex items-center justify-between text-yellow-400 text-sm">
            <span className="flex items-center gap-2">
              📅 {vlog.date || "Unknown Date"}
            </span>
            <span className="flex items-center gap-2">
              <FaUserCircle /> {vlog.author || "Admin"}
            </span>
          </div>

          <p className="text-gray-400 mt-3 leading-relaxed">
            {vlog.description || "No description available."}
          </p>
          <div className="flex items-center justify-start gap-5 mt-4 text-gray-300 text-sm">
            <span className="flex items-center gap-2">
              <FaRegComment /> {vlog.comments || 0} Comments
            </span>
            <span className="flex items-center gap-2">
              <FaRegHeart /> {vlog.likes || 0} Likes
            </span>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <VlogSidebar data={data} />
      </div>
    </div>
  );
};

export default PostPage;
