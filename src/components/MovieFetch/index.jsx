import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MoviesContainer from '../MovieContainer';
import.meta.env.MODE;

const API_KEY = (import.meta.env.VITE_APP_APIKEY);
const API_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=pt-br`;

export default function MovieFetch() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
  }, []);

  if (loading) return <p>Loading</p>
  else return (
    <div>
      <MoviesContainer movies={movies} />
    </div>
  )
}