import React, { useEffect, useState } from 'react'; // Assuming you're using React
import  getTrendingMovies  from '../../components/api/api'; // Adjust the path based on your project structure

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    // Call the API function when the component mounts
    getTrendingMovies()
      .then(data => {
        setTrendingMovies(data.results); // Assuming the API response has a 'results' property
      })
      .catch(error => {
        // Handle errors
        console.error(error);
      });
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <>
      <div>HomePage</div>

      {/* Display the trending movies */}
      <div>
        <h2>Trending Movies</h2>
        <ul>
          {trendingMovies.map(movie => (
            <li key={movie.id}>{movie.title}</li>
            // Adjust 'title' to the actual property you want to display
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
