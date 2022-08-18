import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import MovieContent from '../MovieContent';
import BackButton from '../BackButton';
import Loading from '../Loading';

const API_KEY = (import.meta.env.VITE_APP_APIKEY);

export default function Movie() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    let API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=pt-br`;

    setLoading(true);
    let cancel;
    axios.get(API_URL, {
      cancelToken: axios.CancelToken(c => cancel = c)
    })
      .then(res => {
        setMovie(res.data);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  if (loading) return <Loading />
  return (
    <>
      <BackButton />
      <MovieContent movie={movie} />
    </>
  )
}
