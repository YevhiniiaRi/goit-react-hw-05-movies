import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';


const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=8e0989dbac705c526907a37342af002c`
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const { title, release_date, vote_average, overview, genres, poster_path } =
    movieDetails;

  return (
    <div>
      <div>
        <Link to=".." className="go-back-link">
          Go back
        </Link>
      </div>

      <div style={{ display: 'flex' }}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          style={{ marginRight: '20px', marginTop: '20px' }}
        />
        <div>
          <h2>
            {title} ({release_date.slice(0, 4)})
          </h2>
          <p>User Score: {vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres </h3>
          <p>
            {genres.map(genre => (
              <span key={genre.id}>{genre.name} </span>
            ))}
          </p>
        </div>
      </div>
      <div>
        <ul>
          <p>Additional information</p>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  movieId: PropTypes.string,
};

export default MovieDetails;
