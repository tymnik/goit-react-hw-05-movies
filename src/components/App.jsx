import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import SearchMovies from '../pages/SearchMovies/SearchMovies';
import MovieDetails from '../pages/MovieDetails/MovieDetails';
import Layout from './Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="search" element={<SearchMovies />} />
        <Route path="details" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
