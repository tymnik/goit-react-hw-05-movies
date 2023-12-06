import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './BackButton.module.css';

const BackButton = ({ onClick }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const backLink = location.state?.from ?? '/';

  const handleClick = (event) => {
    if (onClick) {
      onClick();
    } else {
      navigate(-1 ?? backLink);
    }

    event.preventDefault();
  };

  return (
    <button onClick={handleClick} className={styles.backButton}>
      Go Back
    </button>
  );
};

export default BackButton;
