import React, { useEffect, useState } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import MovieCard from '../../components/MovieCard/MovieCard';
import Loader from 'components/Loader/Loader';
import BackButton from 'components/BackButton/BackButton';
import styles from './MovieDetails.module.css';
import { fetchMovieDetails } from '../../components/api/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (movieId) {
        try {
          const details = await fetchMovieDetails(movieId);
          setMovieDetails(details);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
  }, [movieId]);

    const renderLoaderOrContent = () => {
    if (!movieDetails) {
      return <Loader />;
    }

    return (
      <div>
        <BackButton />
        <div>
          <MovieCard movieDetails={movieDetails} />
          <div className={styles.additionalBlock}>
            <h4 className={styles.additionalBlockTitle}>
              Additional information
            </h4>
            <ul className={styles.additionalNavLinks}>
              <li>
                <Link
                  to={`/movies/${movieDetails.id}/cast`}
                  className={styles.movieNavLink}
                >
                  Cast
                </Link>
              </li>
              <li>
                <Link
                  to={`/movies/${movieDetails.id}/reviews`}
                  className={styles.movieNavLink}
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Outlet />
      </div>
    );
  };

  return renderLoaderOrContent();
};

export default MovieDetails;
