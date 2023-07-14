import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';


const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=8e0989dbac705c526907a37342af002c`
        );
        setCast(response.data.cast);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCast();
  }, [movieId]);

  if (cast.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <ul>
        {cast.map(actor => {
          if (!actor.profile_path) {
            return null; // Пропустити акторів без зображень профілю
          }

          return (
            <li key={actor.id} style={{ marginBottom: '20px' }}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
                alt={actor.name}
                style={{ marginRight: '20px' }}
              />
              <div>
                <p>
                  <strong>{actor.name}</strong>
                </p>
                <p>Character: {actor.character}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Cast.propTypes = {
  movieId: PropTypes.string,
};

export default Cast;
