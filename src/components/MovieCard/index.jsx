import React, { useContext, useState } from 'react'
import styles from './index.module.css';
import { Link } from 'react-router-dom';

export default function MovieCard({ ...props }) {
  const { title, id, poster_path, vote_average, isSearchMovie } = props;


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
        <Link to={`${isSearchMovie ? `../filme/${id}` : `filme/${id}`}`}>
          <button className={styles.verMais}>Ver mais</button>
        </Link>
      </div>
    </div >
  )
}
