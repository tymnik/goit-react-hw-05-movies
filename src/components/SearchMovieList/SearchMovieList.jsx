import React from 'react';
import styles from './SearchMovieList.module.css';
import { Link } from 'react-router-dom';

const SearchMovieList = ({ searchResults }) => {
  return (
    <section className={styles.searchedMovies}>
      {searchResults &&
      Array.isArray(searchResults) &&
      searchResults.length > 0 ? (
        <ul className={styles.moviesList}>
          {searchResults.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} className={styles.movieLink}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.noMoviesText}>Let's try to find some movies.</p>
      )}
    </section>
  );
};

export default SearchMovieList;
