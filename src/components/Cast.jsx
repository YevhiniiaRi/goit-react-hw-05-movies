import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
        <li>
          {cast.map(actor => (
            <div key={actor.id} style={{ marginBottom: '20px' }}>
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
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default Cast;
