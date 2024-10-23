import { Route, Routes } from "react-router-dom";
import "./App.css";
import MovieComponent from "./Components/MovieComponent";
import MovieDetails from "./Components/MovieDetails";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import { MovieData } from "./MockData";
import EditMovies from "./Components/EditMovies";
import NotFound from "./Components/NotFound";

function App() {
  const [moviesData, setMoviesData] = useState(MovieData);
  return (
    <>
      <Navbar setMovieData={setMoviesData} movieData={moviesData} />
      <Routes>
        <Route
          exact
          path="/"
          element={<MovieComponent MovieData={moviesData} />}
        />
        <Route
          path="/movie/:id"
          element={<MovieDetails MovieData={moviesData} />}
        />
        <Route
          path="/edit"
          element={
            <EditMovies MovieData={moviesData} setMovieData={setMoviesData} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
