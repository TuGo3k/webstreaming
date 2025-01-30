import React, { useState, useEffect } from "react";
import { FaRegComment, FaRegHeart, FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";

const PostPage = ({ Vlogs = [] }) => {
  const { id } = useParams();
  const [vlog, setVlog] = useState(null);

  useEffect(() => {
    // Log to check if Vlogs is an array
    console.log("Vlogs:", Vlogs);

    if (Array.isArray(Vlogs)) {
      const foundVlog = Vlogs.find((m) => m.id === parseInt(id));
      setVlog(foundVlog);
    }
  }, [id, Vlogs]);

  // Handle case where vlog is not found
  if (!vlog) {
    return <div className="text-white p-6">Vlog not found.</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      <div className="max-w-3xl bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg">
      <h2 className="text-3xl font-bold mt-2 p-6">{vlog.title || "Untitled Vlog"}</h2>
        <img
          src={vlog.image || "/default-image.jpg"} // Use vlog's image if available
          alt={vlog.title || "Vlog Image"}
          className="w-full h-full object-cover"
        />
        <div className="p-6">
          <div className="flex items-center justify-between text-yellow-400 text-sm">
            <span className="flex items-center gap-2">📅 {vlog.date || "Unknown Date"}</span>
            <span className="flex items-center gap-2"><FaUserCircle /> {vlog.author || "Admin"}</span>
          </div>
          
          <p className="text-gray-400 mt-3 leading-relaxed">
            {vlog.description || "No description available."}
          </p>
          <div className="flex items-center justify-between mt-4 text-gray-300 text-sm">
            <span className="flex items-center gap-2">
              <FaRegComment /> {vlog.comments || 0} Comments
            </span>
            <span className="flex items-center gap-2">
              <FaRegHeart /> {vlog.likes || 0} Likes
            </span>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default PostPage;
