import React, { useEffect, useState } from 'react';
import ReviewItem from 'components/ReviewItem/ReviewItem';
import Loader from 'components/Loader/Loader';
import { useParams } from 'react-router-dom';
import styles from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const KEY_API = '034807affda3ec91f179dd3de3e4274d';
        const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${KEY_API}&language=en-US`;

        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
          },
        };

        const response = await fetch(url, options);
        const data = await response.json();

        setReviews(data.results || []);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    if (!movieId) return;

    fetchReviews();
  }, [movieId]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error fetching reviews: {error.message}</p>;
  }

  return (
    <section className={styles.reviews}>
      {reviews.length > 0 ? (
        <ul className={styles.reviewsList}>
          {reviews.map(review => (
            <ReviewItem key={review.id} review={review} />
          ))}
        </ul>
      ) : (
        <p className={styles.noReviewsText}>No reviews yet for this movie.</p>
      )}
    </section>
  );
};

export default Reviews;
