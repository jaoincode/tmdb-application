import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MoviesContainer from './components/MovieContainer';
import MovieFetch from './components/MovieFetch';
import Sidebar from './components/Sidebar';
import.meta.env.MODE;

const API_KEY = (import.meta.env.VITE_APP_APIKEY);
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-br`;

export default function App() {
  return (
    <main>
      <Sidebar />
      <MovieFetch />
    </main>
  )
}
