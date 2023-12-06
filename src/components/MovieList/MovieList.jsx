import React from 'react';
import styles from './MovieList.module.css';
import { Link } from 'react-router-dom';
import MovieListItem from 'components/MovieListItem/MovieListItem';

const MovieList = ({ movies }) => {
  if (
    !movies ||
    !Array.isArray(movies.results) ||
    movies.results.length === 0
  ) {
    return <p className={styles.noMoviesText}>No movies to display.</p>;
  }

  return (
    <section className={styles.trendingMovies}>
      <h1 className={styles.moviesListTitle}>Trending today</h1>
      <ul className={styles.moviesList}>
        {movies.results.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} className={styles.movieLink}>
              <MovieListItem movieDetails={movie} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MovieList;
