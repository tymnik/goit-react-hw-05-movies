import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const KEY_API = '034807affda3ec91f179dd3de3e4274d';

const getTrendingMovies = async () => {
  try {
    const response = await axios.get('/trending/all/day', {
      params: {
        api_key: KEY_API,
        language: 'en-US',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};

const searchMovies = async keyword => {
  try {
    const response = await axios.get('/search/movie', {
      params: {
        api_key: KEY_API,
        language: 'en-US',
        query: keyword,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error searching movies:', error);
    throw error;
  }
};


const fetchMovieDetails = async movieId => {
  try {
    const response = await axios.get(`/movie/${movieId}`, {
      params: {
        api_key: KEY_API,
        language: 'en-US',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

const fetchCredits = async movieId => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${KEY_API}&language=en-US`;

  try {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    };

    const response = await fetch(url, options);
    const data = await response.json();

    return data.cast;
  } catch (error) {
    throw error;
  }
};

const fetchReviews = async movieId => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY_API}&language=en-US`;

  try {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    };

    const response = await fetch(url, options);
    const data = await response.json();

    return data.results || [];
  } catch (error) {
    throw error;
  }
};

const fetchMovieVideos = async movieId => {
  try {
    const response = await axios.get(`/movie/${movieId}/videos`, {
      params: {
        api_key: KEY_API,
        language: 'en-US',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching movie videos:', error);
    throw error;
  }
};

export {
  getTrendingMovies,
  searchMovies,
  fetchMovieDetails,
  fetchCredits,
  fetchReviews,
  fetchMovieVideos,
};
