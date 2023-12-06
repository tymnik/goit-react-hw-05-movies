import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './BackButton.module.css';

const BackButton = ({ onClick }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const fromLink = {
    pathname: location.pathname,
    search: location.search,
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(-1, { state: { from: fromLink } });
    }
  };

  return (
    <button onClick={handleClick} className={styles.backButton}>
      Go Back
    </button>
  );
};

export default BackButton;
