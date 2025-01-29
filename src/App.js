import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MovieDetail from "./components/MovieDetail";
import DATA from "./data/movies.json";
import DATA2 from "./data/movies2.json";
import Header from "./components/Header";
import Movies from "./pages/Movies";
import Pricing from "./pages/Pricing";
import Vlog from "./pages/Vlog";
import Contact from "./pages/Contact";
import { useState, useEffect } from "react";
import AuthPage from "./pages/AuthPage";

function App() {
  const allMovies = [...DATA.movies, ...DATA2.movies];
  const [active, setActive] = useState("НҮҮР");

  return (
    <Router>
      <Header active={active} setActive={setActive} />

      {/* Wrap the Routes inside a component where useLocation() is valid */}
      <MainContent setActive={setActive} allMovies={allMovies} />
    </Router>
  );
}

function MainContent({ setActive, allMovies }) {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("/movie/")) {
      setActive("КИНО");
    }
  }, [location, setActive]);

  return (
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
      <Route exact path="/all" element={<Movies movies={allMovies} />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/vlog" element={<Vlog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<AuthPage key={location.pathname} />} />
      <Route path="/signup" element={<AuthPage key={location.pathname} />} />
    </Routes>
  );
}

export default App;
