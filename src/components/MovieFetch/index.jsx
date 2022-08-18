import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../../GlobalContext';
import Loading from '../Loading';
import MoviesContainer from '../MovieContainer';
import.meta.env.MODE;

const API_KEY = (import.meta.env.VITE_APP_APIKEY);

export default function MovieFetch() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const { actualSection } = useContext(GlobalContext);

  useEffect(() => {
    let API_URL = `https://api.themoviedb.org/3/movie/${actualSection}?api_key=${API_KEY}&language=pt-br`;

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
  }, [actualSection]);

  if (loading) return <Loading />
  else return (
    <div>
      <MoviesContainer movies={movies} />
    </div>
  )
}