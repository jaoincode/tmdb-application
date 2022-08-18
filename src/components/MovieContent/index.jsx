import React from 'react';
import styles from './index.module.css';
import IMDBLogo from '../../assets/img/imdb.png';

export default function MovieContent({ movie }) {
  console.log(movie);

  movie.genres.map(genre => console.log(genre.name, genre.id));

  
  return (
    <section className={styles.allContent}>
      <div className={styles.content}>
        <div className={styles.filmInfos}>
          <h1 className={styles.title}>{movie.title}</h1>
          <p className={styles.overview}>{movie.overview}</p>
          <ul className={styles.genres}>
            <h2>Gêneros: </h2>
            {movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
          </ul>
          <p className={styles.durationTime}>Duração: {movie.runtime} minutos</p>
          <p className={styles.releaseDate}>
            Data de lançamento:
            <span>{movie.release_date}</span>
          </p>

          <div className={styles.imdbRating}>
            <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target='_blank'>
              <img src={IMDBLogo} alt="imdb logo" aria-label='Clique para ir ao site do IMDB' />
            </a>
            <p>{movie.vote_average.toFixed(2)} / 10</p>
          </div>
        </div>


        <div className={styles.filmPoster}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
        </div>
      </div>

      <div className={styles.background}>
        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
      </div>
    </section>
  )
}
