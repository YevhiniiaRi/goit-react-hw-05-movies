import React, { useEffect, useRef } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';

const Movie = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('query') || '';
  const [movies, setMovies] = React.useState([]);
  const [isSearchPerformed, setIsSearchPerformed] = React.useState(false);
  const [searchTrigger, setSearchTrigger] = React.useState(false); // Додали стан searchTrigger
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  const searchMovies = async inputValue => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=8e0989dbac705c526907a37342af002c&query=${inputValue}`
      );
      const data = await response.json();
      setMovies(data.results);
      localStorage.setItem('movies', JSON.stringify(data.results)); // Зберігаємо колекцію фільмів у localStorage
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  useEffect(() => {
    const storedMovies = localStorage.getItem('movies');
    if (storedMovies) {
      setMovies(JSON.parse(storedMovies)); // Відновлюємо колекцію фільмів з localStorage
      setIsSearchPerformed(true);
    }
  }, []);

  useEffect(() => {
    if (searchTrigger && keyword.trim() !== '') {
      searchMovies(keyword);
      setIsSearchPerformed(true);
    }
  }, [searchTrigger, keyword]);

  const handleSearch = () => {
    if (keyword.trim() === '') {
      setIsSearchPerformed(false);
      setMovies([]);
    } else {
      setSearchTrigger(true);
    }
  };

  const handleInputChange = e => {
    const inputValue = e.target.value;

    if (inputValue.trim() === '') {
      setSearchParams(prevParams => {
        const newParams = new URLSearchParams(prevParams);
        newParams.delete('query');
        return newParams;
      });
      setIsSearchPerformed(false);
      setMovies([]);
    } else {
      setSearchParams({ query: inputValue });
    }
  };

  return (
    <div>
      <div>
        <Link to={backLinkLocationRef.current} className="go-back-link">
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
      {isSearchPerformed && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movie;
