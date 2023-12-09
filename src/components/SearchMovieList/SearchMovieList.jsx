import React from 'react';
import styles from './SearchMovieList.module.css';
import { Link, useLocation } from 'react-router-dom';
import MovieListItem from 'components/MovieListItem/MovieListItem';

const SearchMovieList = ({ searchResults }) => {
  const location = useLocation();
  
  return (
    <section className={styles.searchedMovies}>
      {searchResults &&
      Array.isArray(searchResults) &&
      searchResults.length > 0 ? (
        <ul className={styles.moviesList}>
          {searchResults.map(movie => (
            <li key={movie.id}>
              <Link
                to={`/movies/${movie.id}`}
                state={{ from: location }}
                className={styles.movieLink}
              >
                <MovieListItem movieDetails={movie} />
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
