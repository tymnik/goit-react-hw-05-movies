import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import MovieCard from '../../components/MovieCard/MovieCard';
import Loader from 'components/Loader/Loader';
import BackButton from 'components/BackButton/BackButton';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=034807affda3ec91f179dd3de3e4274d&language=en-US`
        );
        setMovieDetails(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

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
    </div>
  );
};

export default MovieDetails;
