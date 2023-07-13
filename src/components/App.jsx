import { NavLink, Route, Routes } from "react-router-dom";

import Home from 'pages/Home';
import Movie from "pages/Movies";
import MovieDetails from "pages/MovieDetails";

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movie />}></Route>
        <Route
          path="/movies/:movieId"
          element={<MovieDetails />}
        ></Route>
      </Routes>
    </div>
  );
};
