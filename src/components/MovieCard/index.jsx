import React from 'react'
import styles from './index.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'

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
        <h1 className="movieTitle">
          {title}
          <span>{vote_average}</span>
        </h1>
        <button className={styles.verMais}>Ver mais</button>
        {/* <p className={styles.Overview}>{overview}</p> */}
      </div>
    </div>
  )
}
