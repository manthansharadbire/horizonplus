import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route,  Routes } from "react-router";
import Homepage from './views/Homepage';
import Movie from './views/Movie';
import MovieId from './views/MovieId';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/movie" element={<Movie/>}/>
    <Route path="/movie/id" element={<MovieId/>}/>
    </Routes>
    </BrowserRouter>
)
