import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MovieDetail from "./components/MovieDetail";
import DATA from "./data/movies.json"; // Import JSON directly
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/movie/:id"
          element={<MovieDetail movies={DATA.movies} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
