import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Movie from './components/Movie';
import Search from './components/Search';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="filme/:id" element={<Movie />} />
        <Route path="procurar" element={<Search />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
