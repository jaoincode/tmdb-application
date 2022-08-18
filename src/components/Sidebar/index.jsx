import React, { useContext, useState } from 'react';
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStar, faThumbsUp, faFire } from '@fortawesome/free-solid-svg-icons';
import { GlobalContext } from '../../../GlobalContext';


export default function Sidebar() {
  const { setActualSection } = useContext(GlobalContext);

  return (
    <aside className={styles.menu}>
      <ul className={styles.menuList}>
        <li
          aria-label='Popular'
          onClick={() => setActualSection('popular')}
          className={styles.menuItem}>
          <span>Populares</span>
          <FontAwesomeIcon
            className={styles.icons}
            icon={faHome}
          />
        </li>
        <li
          aria-label='Filmes que estão por vir'
          onClick={() => setActualSection('upcoming')}
          className={styles.menuItem}>
          <span>Por vir</span>
          <FontAwesomeIcon
            className={styles.icons}
            icon={faFire}
          />
        </li>
        <li
          aria-label='Mais assistidos agora'
          onClick={() => setActualSection('now_playing')}
          className={styles.menuItem}>
          <span>Mais assistidos</span>
          <FontAwesomeIcon
            className={styles.icons}
            icon={faThumbsUp}
          />
        </li>
        <li
          aria-label='Mais bem avaliados'
          onClick={() => setActualSection('top_rated')}
          className={styles.menuItem}>
          <span>Bem avaliados</span>
          <FontAwesomeIcon
            className={styles.icons}
            icon={faStar}
          />
        </li>
      </ul>
    </aside>
  )
}
