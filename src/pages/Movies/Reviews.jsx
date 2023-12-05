import React, { useEffect, useState } from 'react';
import ReviewItem from 'components/ReviewItem/ReviewItem';
import Loader from 'components/Loader/Loader';
import { useParams } from 'react-router-dom';
import styles from './Reviews.module.css';
import { fetchReviews } from '../../components/api/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!movieId) return;

      try {
        const reviewsData = await fetchReviews(movieId);
        setReviews(reviewsData);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
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
