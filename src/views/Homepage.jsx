import React from "react";
import MovieCard from "./../components/MovieCard";
import Loader from "./../components/Loader";
import axios from "axios";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

function Homepage() {
  const [searchMovie, setSearchMovie] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [homepageMovieCards, setHomepageMovieCards] = useState([]);

  const fetchSearchedMovieCards = async (query) => {
    setIsLoading(true);
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/?s=${query}&apikey=${import.meta.env.VITE_API_KEY}`
    );
    setIsLoading(false);
    const allMovies = response?.data?.Search || [];
    setHomepageMovieCards(allMovies);
    if (query && allMovies.length === 0) {
      toast.error(`No results found for "${query}"`);
    }
    setHomepageMovieCards(allMovies);
  };

  const handleSearch = () => {
    fetchSearchedMovieCards(searchMovie);

    if (!searchMovie) {
      toast.error("Please enter a Movie or Tv Show");
      return;
    }
  };

  const clearSearch = () => {
    fetchSearchedMovieCards("");
    setSearchMovie("");
    if (!searchMovie) {
      toast.error("Nothing to clear");
      return;
    }
  };

  return (
    <div className="px-4 py-6 max-w-screen-xl mx-auto">
   
      <div className="flex flex-col gap-4 md:flex-row items-center justify-center flex-wrap">
        <h1 className="bg-yellow-500 text-white text-center rounded-xl font-bold text-2xl px-6 py-3 shadow-lg">
          Horizon+
        </h1>

        <input
          type="text"
          placeholder="Enter Movie or a TV Show here"
          className="border outline-none w-full md:w-[400px] lg:w-[600px] xl:w-[800px] py-3 px-4 rounded-xl shadow-md border-gray-300 font-medium transition duration-300 focus:ring-2 focus:ring-yellow-400"
          value={searchMovie}
          onChange={(e) => setSearchMovie(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />

        <div className="flex gap-2 w-full md:w-auto justify-center">
          <button
            className="flex-1 md:flex-none border border-green-600 py-3 px-6 bg-green-600 text-white rounded-xl shadow-md hover:scale-105 transition-transform font-semibold"
            onClick={handleSearch}
          >
            Search
          </button>

          <button
            className="flex-1 md:flex-none border border-red-600 py-3 px-6 bg-red-600 text-white rounded-xl shadow-md hover:scale-105 transition-transform font-semibold"
            onClick={clearSearch}
          >
            Clear
          </button>
        </div>
      </div>

    
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 justify-center">
        {homepageMovieCards.map((movieObj, i) => {
          const { Poster } = movieObj;
          return (
            <div key={i} className="w-full">
              <MovieCard Poster={Poster} />
            </div>
          );
        })}
      </div>

     
      {!isLoading && homepageMovieCards.length === 0 && searchMovie && (
        <p className="text-red-500 font-semibold text-xl mt-8 text-center">
          No movies found for "{searchMovie}"
        </p>
      )}

    
      <Toaster position="top-center" />
      <Loader loading={isLoading} loadingText={"Please wait..."} />
    </div>
  );
}

export default Homepage;
