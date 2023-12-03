import Loader from 'components/Loader/Loader';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './MovieCard.module.css';

const MovieCard = ({ movieDetails, isDetails }) => {
  const location = useLocation();
  const releaseYear = movieDetails.release_date.split('-')[0];

  if (!movieDetails) {
    return <Loader />;
  }

  return (
    <section className={styles.movieCard}>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
          alt={movieDetails.title}
          className={styles.movieCardPoster}
        />
      </div>
      <div className={styles.movieCardInfo}>
        <h2 className={styles.movieCardTitle}>
          {movieDetails.title} ({releaseYear})
        </h2>
        <p className={styles.movieCardDetails}>
          User Score: {Math.round(movieDetails.popularity)}%
        </p>
        <h3 className={styles.movieCardDetailsHeading}>Overview</h3>
        <p className={styles.movieCardDetails}>{movieDetails.overview}</p>
        <h3 className={styles.movieCardDetailsHeading}>Genres</h3>
        <ul className={styles.genresList}>
          {movieDetails.genres.map(genre => (
            <li key={genre.id} className={styles.genreItem}>
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MovieCard;
