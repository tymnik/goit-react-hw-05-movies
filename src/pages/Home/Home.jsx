import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../components/api/api';
import MovieList from '../../components/MovieList/MovieList';
import Loader from '../../components/Loader/Loader';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const movies = await getTrendingMovies();
        setTrendingMovies(movies);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching trending movies:', error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div>{loading ? <Loader /> : <MovieList movies={trendingMovies} />}</div>
  );
};

export default Home;
