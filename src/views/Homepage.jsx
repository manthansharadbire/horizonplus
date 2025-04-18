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
    setIsLoading(true)
    const response = await axios.get(
      `${import.meta.env.VITE_API_URL}/?s=${query}&apikey=${import.meta.env.VITE_API_KEY}`
    );
    setIsLoading(false)
    const allMoviews = response?.data?.Search || []
    setHomepageMovieCards(allMoviews);

    if(allMoviews.length==0){
      toast.error("No movies found for this search")
    }
  };

  const handleSearch = () => {
    fetchSearchedMovieCards(searchMovie);
    if(!searchMovie){
      return;
    };
  };

  const clearSearch = () => {
    fetchSearchedMovieCards("");
    setSearchMovie("");
    if(!searchMovie){
  return;
  }};

  return (
    <div>
      <div className="flex justify-center mt-4 flex-wrap">
        <h1 className="bg-yellow-500 text-center rounded-md font-semibold w-[110px] text-xl pt-3.5 rounded-r-none pl-1">
          Horizon+
        </h1>
        <input
          type="text"
          placeholder="Enter Movie or a TV Show here"
          className="border outline-none w-[1000px] py-4 px-2 rounded-md shadow-lg border-gray-300 rounded-l-none font-bold"
          value={searchMovie}
          onChange={(e) => setSearchMovie(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />

        <button
          className="border border-green-600 py-4 w-[90px] ml-2 bg-green-600 text-white rounded-md shadow-md hover:cursor-pointer
          transition-transform duration-300 ease-in-out hover:scale-105  font-semibold"
          onClick={handleSearch}
        >
          Search
        </button>
        <button
          className="border border-red-600 py-4 w-[90px] ml-2 bg-red-600 text-white rounded-md shadow-md hover:cursor-pointer
          transition-transform duration-300 ease-in-out hover:scale-105 font-semibold"
          onClick={clearSearch}
        >
          Clear
        </button>
        <div className="flex flex-wrap justify-center"></div>
        {homepageMovieCards.map((movieObj, i) => {
          const { Poster, Title, Year,} = movieObj;
          return (
            <div key={i}>
              <MovieCard
                Poster={Poster}
                Title={Title} 
                Year={Year}
              />
            </div>
          );
        })}
      </div>
      <Toaster />
      <Loader loading={isLoading} loadingText={"Please wait..."}/>
    </div>
  );
}

export default Homepage;
