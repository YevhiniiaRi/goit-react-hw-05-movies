import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const Movie = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('query') || '';
  const [movies, setMovies] = React.useState([]);

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
    const inputValue = e.target.value;
    setSearchParams({ query: inputValue });

    if (inputValue.trim() === '') {
      setSearchParams({});
    } else {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=8e0989dbac705c526907a37342af002c&query=${inputValue}`
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error searching movies:', error);
      }
    }
  };

  return (
    <div>
      <div>
        <Link to=".." className="go-back-link">
          Go back
        </Link>
      </div>

      <input
        className="input"
        type="text"
        value={keyword}
        onChange={handleInputChange}
      />
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
