import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MovieDetail from "./components/Movie/MovieDetail";
import DATA from "./data/movies.json";
import DATA2 from "./data/movies2.json";
import Header from "./components/Header";
import Movies from "./pages/Movies";
import Pricing from "./pages/Pricing";
import Vlog from "./pages/Vlog";
import Contact from "./pages/Contact";
import { useState, useEffect } from "react";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import PostPage from "./components/Cards/VlogDetailCard";
import VLOGSDATA from "./data/vlog.json";
import Search from "./pages/Search";
import { useRef } from "react";
function App() {
  const allMovies = [...DATA.movies, ...DATA2.movies];
  // const [active, setActive] = useState("НҮҮР");

  const [active, setActive] = useState(() => {
    const currentUrl = window.location.pathname;
    if (currentUrl.includes("/movie/")) {
      return "КИНО";
    } else if (currentUrl === "/") {
      return "НҮҮР";
    } else if (currentUrl.includes("/category")) {
      return "КИНО";
    } else if (currentUrl === "/pricing") {
      return "ҮНЭ";
    } else if (currentUrl.includes("/vlogs")) {
      return "ВЛОГ";
    } else if (currentUrl === "/contact") {
      return "ХОЛБОО БАРИХ";
    } else if (currentUrl === "/login") {
      return "";
    } else if (currentUrl === "/search") {
      return "";
    }
    return "НҮҮР"; // Default
  });
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [search, setSearch] = useState("");
  const searchRef = useRef(null); // Ref to detect outside clicks
  const mobileMenuRef = useRef(null); // Ref to detect clicks outside mobile menu
  const desktopResultRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <Router>
      <Header
        active={active}
        setActive={setActive}
        allMovies={allMovies}
        filteredMovies={filteredMovies}
        setFilteredMovies={setFilteredMovies}
        setSearch={setSearch}
        search={search}
        searchRef={searchRef}
        mobileMenuRef={mobileMenuRef}
        desktopResultRef={desktopResultRef}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        isMobileMenuOpen={isMobileMenuOpen}
      />

      {/* Wrap the Routes inside a component where useLocation() is valid */}
      <MainContent
        setActive={setActive}
        allMovies={allMovies}
        filteredMovies={filteredMovies}
        search={search}
        searchRef={searchRef}
        mobileMenuRef={mobileMenuRef}
        desktopResultRef={desktopResultRef}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
    </Router>
  );
}

function MainContent({
  setActive,
  allMovies,
  filteredMovies,
  search,
  searchRef,
  mobileMenuRef,
  desktopResultRef,
  setIsMobileMenuOpen,
}) {
  const location = useLocation();

  const value = search;
  useEffect(() => {
    if (location.pathname.includes("/movie/")) {
      setActive("КИНО");
    }
  }, [location, setActive]);
  const images = [
    "https://picsum.photos/800/600?random=1",
    "https://picsum.photos/800/600?random=2",
    "https://picsum.photos/800/600?random=3",
    "https://picsum.photos/800/600?random=4",
    "https://picsum.photos/800/600?random=5",
  ];
  const [bgImage, setBgImage] = useState(images[0]);
  const [isFading, setIsFading] = useState(false);
  let imageIndex = 0; // Keep track of image index

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true); // Start fading out

      setTimeout(() => {
        imageIndex = (imageIndex + 1) % images.length; // Loop infinitely
        setBgImage(images[imageIndex]);
        setIsFading(false); // Fade back in
      }, 1000); // Fade-out duration (0.5s)
    }, 10000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const data = VLOGSDATA.vlog;

  const [selectedId, setSelectedId] = useState(null);

  const handleSelectVlog = (id) => {
    setSelectedId(id);
  };
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Home
            searchRef={searchRef}
            mobileMenuRef={mobileMenuRef}
            desktopResultRef={desktopResultRef}
          />
        }
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <Route
        exact
        path="/movie/:id"
        element={
          <MovieDetail
            movies={allMovies}
            searchRef={searchRef}
            mobileMenuRef={mobileMenuRef}
            desktopResultRef={desktopResultRef}
          />
        }
      />
      <Route
        exact
        path="/category"
        element={
          <Movies
            movies={DATA2.movies}
            searchRef={searchRef}
            mobileMenuRef={mobileMenuRef}
            desktopResultRef={desktopResultRef}
          />
        }
      />
      <Route
        exact
        path="/search"
        element={
          <Search
            search={value}
            filteredMovies={filteredMovies}
            searchRef={searchRef}
            mobileMenuRef={mobileMenuRef}
            desktopResultRef={desktopResultRef}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
        }
      />
      <Route
        exact
        path="/all"
        element={
          <Movies
            movies={allMovies}
            searchRef={searchRef}
            mobileMenuRef={mobileMenuRef}
            desktopResultRef={desktopResultRef}
          />
        }
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <Route
        path="/pricing"
        element={
          <Pricing
            searchRef={searchRef}
            mobileMenuRef={mobileMenuRef}
            desktopResultRef={desktopResultRef}
          />
        }
      />
      <Route
        path="/vlogs/"
        element={
          <Vlog
            handleSelectVlog={handleSelectVlog}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            data={data}
            searchRef={searchRef}
            mobileMenuRef={mobileMenuRef}
            desktopResultRef={desktopResultRef}
          />
        }
      />
      <Route
        path="/vlogs/:id"
        element={
          <PostPage
            data={data}
            // handleSelectVlog={handleSelectVlog}
            // selectedId={selectedId}
            // setSelectedId={setSelectedId}
            searchRef={searchRef}
            mobileMenuRef={mobileMenuRef}
            desktopResultRef={desktopResultRef}
          />
        }
      />
      <Route
        path="/contact"
        element={
          <Contact
            searchRef={searchRef}
            mobileMenuRef={mobileMenuRef}
            desktopResultRef={desktopResultRef}
          />
        }
      />
      <Route
        path="/login"
        element={
          <Login
            bg={bgImage}
            isFading={isFading}
            searchRef={searchRef}
            mobileMenuRef={mobileMenuRef}
            desktopResultRef={desktopResultRef}
          />
        }
      />
      <Route
        path="/signup"
        element={
          <CreateAccount
            bg={bgImage}
            isFading={isFading}
            searchRef={searchRef}
            mobileMenuRef={mobileMenuRef}
            desktopResultRef={desktopResultRef}
          />
        }
      />
    </Routes>
  );
}

export default App;
