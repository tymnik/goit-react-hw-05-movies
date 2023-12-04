import React, { useEffect, useState } from 'react';
import CastItem from 'components/CastItem/CastItem';
import Loader from 'components/Loader/Loader';
import { useParams } from 'react-router-dom';
import styles from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const KEY_API = '034807affda3ec91f179dd3de3e4274d';
        const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY_API}&language=en-US`;

        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
          },
        };

        const response = await fetch(url, options);
        const data = await response.json();

        setCredits(data.cast);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

if (!movieId) return;

    fetchCredits();
  }, [movieId]);

  if (loading) {
    return <Loader/>;
  }

  if (error) {
    return <p>Error fetching cast information: {error.message}</p>;
  }

  return (
    <section className={styles.cast}>
      <ul className={styles.castList}>
        {credits.map(actor => (
          <CastItem key={actor.id} actor={actor} />
        ))}
      </ul>
    </section>
  );
};

export default Cast;
