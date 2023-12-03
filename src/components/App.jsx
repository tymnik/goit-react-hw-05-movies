import { Route, Routes, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from '../Layout/Layout';
import Loader from './Loader/Loader';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/Movies/MovieDetails'));
const Cast = lazy(() => import('pages/Movies/Cast'));
const Reviews = lazy(() => import('pages/Movies/Reviews'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
export default App;
