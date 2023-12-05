import React, { useState } from 'react';
import SearchBar from 'components/SearchBar/SearchBar';
import SearchMovieList from 'components/SearchMovieList/SearchMovieList';
import { searchMovies } from '../../components/api/api';
import { Outlet } from 'react-router-dom';

const MoviePage = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async searchTerm => {
    try {
      const results = await searchMovies(searchTerm);
      setSearchResults(results.results || []);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };



  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      <SearchMovieList searchResults={searchResults} />
      <Outlet/>
    </div>
  );
};

export default MoviePage;
