import { useState } from "react";
import { useLocation, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DATA from "./data/movies.json";
import DATA2 from "./data/movies2.json";
import Header from "./components/Header";

function App() {
  const allMovies = [...DATA.movies, ...DATA2.movies];

  const location = useLocation(); // Get the current location (pathname)

  // Determine the active route directly based on location.pathname
  const getActive = () => {
    const currentPath = location.pathname;
    if (currentPath.includes("/movie/")) {
      return "КИНО";
    } else if (currentPath === "/") {
      return "НҮҮР";
    } else if (currentPath.includes("/category")) {
      return "КИНО";
    } else if (currentPath === "/pricing") {
      return "ҮНЭ";
    } else if (currentPath.includes("/vlogs")) {
      return "ВЛОГ";
    } else if (currentPath === "/contact") {
      return "ХОЛБОО БАРИХ";
    }
    return "НҮҮР"; // Default
  };

  return (
    <Router>
      <Header active={getActive()} setActive={() => {}} allMovies={allMovies} />
      <Routes>
        {/* Your routes here */}
      </Routes>
    </Router>
  );
}

export default App;
