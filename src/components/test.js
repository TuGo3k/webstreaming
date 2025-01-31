import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom"; // Navigation ашиглах

export default function SearchBox() {
  const [allLessons, setAllLessons] = useState([]);
  const [filteredLessons, setFilteredLessons] = useState([]);
  const [lessonName, setLessonName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [debouncedLessonName, setDebouncedLessonName] = useState(lessonName);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedLessonName(lessonName);
    }, 500);
    return () => clearTimeout(timer);
  }, [lessonName]);

  useEffect(() => {
    const fetchLessons = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get(
          "https://erhem.templateapi.xyz/online/api/v1/lesson"
        );
        setAllLessons(response.data.data);
      } catch (err) {
        setError("Өгөгдөл татах явцад алдаа гарлаа. Дахин оролдоно уу.");
      } finally {
        setLoading(false);
      }
    };

    fetchLessons();
  }, []);

  useEffect(() => {
    if (debouncedLessonName) {
      const filtered = allLessons.filter((item) =>
        item.title.toLowerCase().includes(debouncedLessonName.toLowerCase())
      );
      setFilteredLessons(filtered);
      setIsDropdownOpen(true);
    } else {
      setFilteredLessons([]);
      setIsDropdownOpen(false);
    }
  }, [debouncedLessonName, allLessons]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLessonClick = (lesson) => {
    navigate(/lesson/${lesson._id});
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto" ref={searchRef}>
      <div className="relative">
        <input
          id="lesson"
          type="text"
          value={lessonName}
          onChange={(e) => setLessonName(e.target.value)}
          placeholder="Хичээлийн хайх ..."
          className="p-2 border rounded-full w-full border-[#865BFF] px-8"
        />
        <CiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#865BFF]" />
        {loading && <p className="text-blue-500 mt-2">Ачаалж байна...</p>}
        {error && <p className="text-red-500 mt-2">{error}</p>}

        {isDropdownOpen && filteredLessons.length > 0 && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg border rounded-md max-h-72 overflow-y-auto z-10">
            {filteredLessons.map((lesson, index) => (
              <div
                key={index}
                className="flex items-center border-b p-4 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleLessonClick(lesson)} 
              >
                <img
                  src={`https://erhem.templateapi.xyz/online/uploads/${lesson.cover}`}
                  alt={lesson.title}
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />
                <h2 className="text-gray-700 text-lg font-medium">
                  {lesson.title}
                </h2>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
erhem.templateapi.xyz