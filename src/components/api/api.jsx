import axios from 'axios';

const KEY_API = '034807affda3ec91f179dd3de3e4274d';

const options = {
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${KEY_API}`,
  },
};

const getTrendingMovies = () => {
  return axios
    .get(
      'https://api.themoviedb.org/3/trending/all/day?language=en-US',
      options
    )
    .then(response => response.data)
    .catch(err => {
      console.error(err);
      throw err;
    });
};

export default getTrendingMovies;
