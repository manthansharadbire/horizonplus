import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route,  Routes } from "react-router";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/movie" element={<Movie/>}/>
    <Route path="/movie/id" element={<MovieId/>}/>
    </Routes>
    </BrowserRouter>
)
