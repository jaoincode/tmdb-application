import axios from 'axios';
import React, { useEffect, useState } from 'react'
import GlobalStorage from './GlobalContext';
import MovieFetch from './components/MovieFetch';
import Sidebar from './components/Sidebar';


export default function App() {

  return (
    <main>
      <GlobalStorage>
        <Sidebar />
        <MovieFetch />
      </GlobalStorage>
    </main>
  )
}
