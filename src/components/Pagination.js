import { useState } from "react";

const Pagination = ({ totalPages = 4, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (page) => {
    setCurrentPage(page);
    if (onPageChange) onPageChange(page);
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      handlePageClick(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center space-x-2 my-10 ">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageClick(index + 1)}
          className={`px-4 py-2 border ${
            currentPage === index + 1
              ? "bg-yellow-400 text-black font-bold"
              : "bg-gray-800 text-white"
          }`}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={handleNextClick}
        className="px-4 py-2 border bg-gray-800 text-white"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
