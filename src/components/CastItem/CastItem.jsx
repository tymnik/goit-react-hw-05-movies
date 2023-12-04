import React from 'react';
import styles from './CastItem.module.css'

const CastItem = ({ actor }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w200${actor.profile_path}`;

  return (
    <li className={styles.castCard}>
      <img src={imageUrl} alt={actor.name} className={styles.castImg} />
      <div className={styles.castText}>
        <h2 className={styles.castName}>{actor.name}</h2>
        <p className={styles.castCharacter}>Character: {actor.character}</p>
      </div>
    </li>
  );
};

export default CastItem;
