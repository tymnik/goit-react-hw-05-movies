import { useParams, Link, Outlet } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);
  return (
    <div>
      <ul>
        <li>
          <Link to={'/movies/:movieId/cast'}>Cast</Link>
        </li>
        <li>
          <Link to={'/movies/:movieId/reviews'}>Reviews</Link>
        </li>
      </ul>
      <Outlet/>
    </div>
  );
};

export default MovieDetails;
