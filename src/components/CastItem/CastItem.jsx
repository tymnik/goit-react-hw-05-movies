import React from 'react';
import styles from './CastItem.module.css'

const defaultActorImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const CastItem = ({ actor }) => {
  const imageUrl = actor.profile_path
    ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
    : defaultActorImg;

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
