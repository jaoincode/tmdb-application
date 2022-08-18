import React from 'react';
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function BackButton() {
  return (
    <Link class={styles.link} to="/">
      <FontAwesomeIcon className={styles.icon} icon=
        {faArrowLeft} />
    </Link>
  )
}
