import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './views/Homepage';
import MovieId from './views/MovieId';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/movie/:imdbId" element={<MovieId />} />
    </Routes>
  </BrowserRouter>
);
