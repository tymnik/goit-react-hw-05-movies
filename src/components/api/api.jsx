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

export default getTrendingMovies;
