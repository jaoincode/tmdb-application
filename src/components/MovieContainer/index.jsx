import React, { useEffect, useState } from 'react';
import MovieCard from '../MovieCard';
import styles from './index.module.css';

export default function MoviesContainer({ ...props }) {
  const [movies, setMovies] = useState(props.movies);

  return (
    <section className={styles.moviesContainer}>
      {movies.map(movie => <MovieCard {...movie} />)}
    </section>
  )
}
