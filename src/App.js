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
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import PostPage from "./components/VlogDetailCard";
import  MOVIESDATA from "./data/vlog.json";
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

  const data = MOVIESDATA.vlog;
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
      <Route path="/vlog" element={<Vlog data={data}/>} />  
      <Route path="/post/:id" element={<PostPage Vlogs={data} />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login  bg={bgImage} isFading={isFading}/>} />
      <Route path="/signup" element={<CreateAccount bg={bgImage} isFading={isFading} />} />
    </Routes>
  );
}

export default App;
