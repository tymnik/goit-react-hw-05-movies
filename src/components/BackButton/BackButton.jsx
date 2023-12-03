import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './BackButton.module.css';

const BackButton = ({ onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate('/');
    }
  };

  return (
    <button onClick={handleClick} className={styles.backButton}>
      Go Back
    </button>
  );
};

export default BackButton;
