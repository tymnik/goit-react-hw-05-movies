import React from 'react';
import styles from './BackButton.module.css';

const BackButton = ({ text }) => {

  return (
    <button type='button' className={styles.backButton}>
      Go Back
    </button>
  );
};

export default BackButton;
