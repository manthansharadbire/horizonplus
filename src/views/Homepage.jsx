import React from "react";
import MovieCard from "./../components/MovieCard";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";


function Homepage() {
  const [searchMovie, setSearchMovie] = useState("");

  const [homepageMovieCards, setHomepageMovieCards] = useState([]);

  const fetchSearchedMovieCards = async (query) => {
    const response = await axios.get(
      `https://www.omdbapi.com/?s=${query}&apikey=5350614b`
    );
    setHomepageMovieCards(response.data.Search || []);
  };

  const handleSearch = () => {
    fetchSearchedMovieCards(searchMovie);
  };

  const clearSearch = () => {
    fetchSearchedMovieCards("");
    setSearchMovie("")
  };

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="bg-black min-h-screen" >
      <input
        type="text"
        placeholder="Enter Movie or a TV Show here"
        className="border outline-none w-1/2 py-4 px-2 rounded-md shadow-lg "
        value={searchMovie}
        onChange={(e) => setSearchMovie(e.target.value)}
      />

      <button
        className="border border-green-600 py-4 w-[90px] ml-2 bg-green-500 text-white rounded-md shadow-md cursor-pointer"
        onClick={handleSearch}
      >
        Search
      </button>
      <button className="border border-red-600 py-4 w-[90px] ml-2 bg-red-600 text-white rounded-md shadow-md cursor-pointer" onClick={clearSearch}>
        Clear
      </button>
      <div>
        {homepageMovieCards.map((movieObj, i) => {
          const { Title, Year, Poster, imdbID } = movieObj;
          return (
            <div key={i}>
            <MovieCard Title={Title} Year={Year} Poster={Poster} 
            onClick={()=>handleNavigation(`/movie/${imdbID}`)} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Homepage;
