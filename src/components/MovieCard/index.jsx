import React from 'react'
import styles from './index.module.css';

export default function MovieCard({ ...props }) {
  const { title, overview, realese_date, id, poster_path, vote_average, adult } = props;

  return (
    <div className={styles.movieCard}>
      <img
        className={styles.moviePoster}
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        alt={`Capa do filme ${title ? title : ''}`}
      />
      <div className={styles.movieInfo}>
        <h1 className={styles.movieTitle}>{title}</h1>
        {/* <p className={styles.Overview}>{overview}</p> */}
      </div>
    </div>
  )
}
