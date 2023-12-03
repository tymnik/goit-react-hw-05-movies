import React from 'react';
import styles from './MovieGallery.module.css';
import MovieGalleryItem from '../MovieGalleryItem/MovieGalleryItem';

const MovieGallery = ({ movies }) => {
  return (
    <ul className={styles.gallery}>
      {images.map(image => (
        <MovieGalleryItem
        //   key={image.id}
        //   src={image.webformatURL}
        //   alt={image.id}
        />
      ))}
    </ul>
  );
};

export default MovieGallery;
