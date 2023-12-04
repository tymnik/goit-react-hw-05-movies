import React from 'react';
import styles from './ReviewItem.module.css';

const ReviewItem = ({ review }) => {
  const { author, content } = review;

  return (
    <li className={styles.reviewItem}>
      <h2 className={styles.author}>Author: {author}</h2>
      <p className={styles.content}>{content}</p>
    </li>
  );
};

export default ReviewItem;
