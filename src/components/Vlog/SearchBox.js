import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  return (
    <div className="bg-gray-900 p-4 md:p-6 rounded-lg shadow-lg max-w-full md:max-w-sm">
      <h2 className="text-white text-lg md:text-xl font-bold mb-2">Search Objects</h2>
      <div className="w-8 md:w-10 border-b-4 border-yellow-400 rounded-b-md mb-4"></div>

      {/* Search Input */}
      <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden">
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-gray-800 text-white p-2 md:p-3 outline-none"
        />
        <button className="bg-yellow-400 p-2
         md:p-3 flex items-center justify-center">
          <FaSearch className="text-black" />
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
