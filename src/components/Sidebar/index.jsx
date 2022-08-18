import React from 'react';
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faFire } from '@fortawesome/free-solid-svg-icons';


export default function Sidebar() {
  return (
    <aside className={styles.menu}>
      <ul className={styles.menuList}>
        <li className={styles.menuItem}>
          <a href="#">
            <FontAwesomeIcon
              className={styles.icons}
              icon={faHome}
            />
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href="#">
            <FontAwesomeIcon
              className={styles.icons}
              icon={faFire}
            />
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href="#">
            <FontAwesomeIcon
              className={styles.icons}
              icon={faThumbsUp}
            />
          </a>
        </li>
        <li className={styles.menuItem}>
          <a href="#">
            <FontAwesomeIcon
              className={styles.icons}
              icon={faStar}
            />
          </a>
        </li>
      </ul>
    </aside>
  )
}
