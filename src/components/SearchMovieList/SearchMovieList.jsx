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
        <p className={styles.noMoviesText}>No matching movies found.</p>
      )}
    </section>
  );
};

export default SearchMovieList;
