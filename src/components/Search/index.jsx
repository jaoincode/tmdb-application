import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.css';
import axios from 'axios';
import BackButton from '../BackButton';
import MoviesContainer from '../MovieContainer';
import Loading from '../Loading';

const API_KEY = (import.meta.env.VITE_APP_APIKEY);

export default function Search() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!search) {
      setSearch('');
      setMovies([]);
      setLoading(false);
    }
  }, [search])

  useEffect(() => {
    if (!search) return;

    let API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=pt-br&query=${search}`;

    setLoading(true);
    let cancel;
    axios.get(API_URL, {
      cancelToken: axios.CancelToken(c => cancel = c)
    })
      .then(res => {
        setMovies(res.data.results);
        setLoading(false);
      });


    return () => cancel();
  }, [search]);

  return (
    <section className={styles.searchSection}>
      <BackButton className={styles.link} />
      <header className={styles.header}>
        <input
          type="text"
          name="buscar"
          id="buscar"
          placeholder="Procure um filme.."
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        />
      </header>
      {!search && <div className={styles.empty}><h2>Procure por algo..</h2></div>}
      {loading && <Loading />}
      {movies && <div className={styles.allMovies}><MoviesContainer movies={movies} isSearchMovie={true} /></div>}
    </section>
  )
}
