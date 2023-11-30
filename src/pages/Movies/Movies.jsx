import { Link } from 'react-router-dom';

const Movies = () => {
  return (
    <div>
      <Link to={':movieId'}>Details</Link>
    </div>
  );
};

export default Movies;
