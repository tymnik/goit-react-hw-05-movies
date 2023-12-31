import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  return (
    <div className={styles.navBar}>
      <ul className={styles.navList}>
        <li>
          <NavLink className={styles.navLink} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.navLink} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
