import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Movie = () => {
  const [keyword, setKeyword] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=8e0989dbac705c526907a37342af002c&query=${keyword}`
      );
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  const handleInputChange = async e => {
    setKeyword(e.target.value);
    handleSearch();
  };

  return (
    <div>
      <input type="text" value={keyword} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movie;
