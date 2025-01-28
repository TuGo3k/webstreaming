import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MovieDetail from "./components/MovieDetail";
import DATA from "./data/movies.json"; // Import JSON directly
import DATA2 from "./data/movies2.json"; // Import JSON directly
import Header from "./components/Header";
import Movies from "./pages/Movies";
import Pricing from "./pages/Pricing";
import Vlog from "./pages/Vlog";
import Contact from "./pages/Contact";
function App() {
  // Merge the movie data from both JSON files
  const allMovies = [...DATA.movies, ...DATA2.movies];

  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/movie/:id"
          element={<MovieDetail movies={allMovies} />}
        />
        <Route
          exact
          path="/category"
          element={<Movies movies={DATA2.movies} />}
        />
        <Route
          exact
          path="/all"
          element={<Movies movies={allMovies} />}
        />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/vlog" element={<Vlog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
