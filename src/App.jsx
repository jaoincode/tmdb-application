import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MoviesContainer from './components/MovieContainer';

const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=292bd376c6491bb11d3290841b7c77fb&language=pt-br';

export default function App() {
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
