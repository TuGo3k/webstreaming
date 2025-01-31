import { FaUser, FaComment, FaClock } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { Link } from "react-router-dom";

const MovieCard03 = ({ data, id }) => {
 
  return (
    <div className="mx-auto bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg">
      {/* Image Section */}
      <img src={data.image} alt="Movie Banner" className="w-full  object-cover" />

      {/* Content Section */}
      <div className="p-4 md:p-6">
        {/* Date */}
        <div className="flex items-center text-yellow-400 text-xs md:text-sm mb-2">
          <FaClock className="mr-1" />
          <span>{data.date}</span>
        </div>

        {/* Title */}
        <h2 className="text-lg md:text-2xl font-bold mb-3">{data.title}</h2>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4">{data.description}</p>

        {/* Metadata */}
        <div className="flex items-center text-gray-400 text-xs md:text-sm space-x-4 md:space-x-6 mb-4">
          <span className="flex items-center">
            <FaUser className="mr-1 text-yellow-400" /> by {data.author}
          </span>
          <span className="flex items-center">
            <FaComment className="mr-1 text-yellow-400" /> {data.comments} Comments
          </span>
          <span className="flex items-center">
            <BiSolidLike className="mr-1 text-yellow-400" />
            {data.likes}
          </span>
        </div>

        {/* Read More */}
        <div className="flex justify-end">
          <Link to={`/vlogs/${id}`} className="text-yellow-400 font-bold text-sm hover:underline flex items-center">
            Read More <span className="ml-1">»</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard03;
