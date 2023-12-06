import Loader from 'components/Loader/Loader';
import React from 'react';
import styles from './MovieListItem.module.css';

const defaultPosterImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MovieListItem = ({ movieDetails }) => {
  if (!movieDetails) {
    return <Loader />;
  }

  return (
    <div className={styles.movieListItem}>
      <img
        src={
          movieDetails.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
            : defaultPosterImg
        }
        alt={movieDetails.title || movieDetails.name}
        className={styles.movieListItemPoster}
      />
      <h2 className={styles.movieListItemTitle}>
        {movieDetails.title || movieDetails.name}
      </h2>{' '}
    </div>
  );
};

export default MovieListItem;
