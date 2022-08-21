import React, { useEffect, useState } from 'react';
import MovieCard from '../MovieCard';
import styles from './index.module.css';

export default function MoviesContainer({ movies, isSearchMovie }) {
  return (
    <section className={styles.moviesContainer}>
      {movies.map(movie => <MovieCard key={movie.id} {...movie} isSearchMovie={isSearchMovie} />)}
    </section>
  )
}
