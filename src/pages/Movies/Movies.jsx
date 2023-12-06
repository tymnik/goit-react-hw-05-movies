import React, { useState, useEffect } from 'react';
import SearchBar from 'components/SearchBar/SearchBar';
import SearchMovieList from 'components/SearchMovieList/SearchMovieList';
import { searchMovies } from '../../components/api/api';
import { Outlet, useSearchParams } from 'react-router-dom';

const MoviePage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = async searchTerm => {
    try {
      const results = await searchMovies(searchTerm);
      setSearchResults(results.results || []);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      handleSearch(query);
    }
  }, [searchParams]);

  const handleSubmit = value => {
    setSearchParams({ query: value });
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <SearchMovieList searchResults={searchResults} />
      <Outlet />
    </div>
  );
};

export default MoviePage;
