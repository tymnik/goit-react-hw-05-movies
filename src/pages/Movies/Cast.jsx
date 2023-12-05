import React, { useEffect, useState } from 'react';
import CastItem from 'components/CastItem/CastItem';
import Loader from 'components/Loader/Loader';
import { useParams } from 'react-router-dom';
import styles from './Cast.module.css';
import { fetchCredits } from '../../components/api/api';

const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!movieId) return;

      try {
        const castData = await fetchCredits(movieId);
        setCredits(castData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [movieId]);

  if (loading) {
    return <Loader />;
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
