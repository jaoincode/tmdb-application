import axios from 'axios';
import React, { useEffect, useState } from 'react'
import GlobalStorage from './GlobalContext';
import MovieFetch from './components/MovieFetch';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './components/Search';


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
