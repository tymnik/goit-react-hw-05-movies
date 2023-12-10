import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieVideos } from '../../components/api/api';
import styles from './Trailer.module.css';

const Trailer = () => {
  const { movieId } = useParams();
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      try {
        const videos = await fetchMovieVideos(movieId);
        const trailer = videos.results.find(video => video.type === 'Trailer');
        setTrailer(trailer);
      } catch (error) {
        console.error('Error fetching trailer:', error);
      }
    };

    fetchTrailer();
  }, [movieId]);

  return (
    <div className={styles.trailer}>
      {trailer ? (
        <div>
          <iframe
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title={trailer.name}
            frameBorder="0"
            allowFullScreen
            className={styles.trailerFrame}
          ></iframe>
        </div>
      ) : (
        <p className={styles.noTrailerText}>No trailer available</p>
      )}
    </div>
  );
};

export default Trailer;
