import React, { useEffect, useState } from "react";
import MovieCard from "./../components/MovieCard";
import Loader from "./../components/Loader";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

const dummyMovieCards = [
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_.jpg",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_.jpg",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjg2NmM0MTEtYWY2Yy00NmFlLTllNTMtMjVkZjEwMGVlNzdjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    Poster:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9155926_b_v10_au.jpg",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOWJjMGViY2UtNTAzNS00ZGFjLWFkNTMtMDBiMDMyZTM1NTY3XkEyXkFqcGc@._V1_.jpg",
  },
  {
    Poster:
      "https://resizing.flixster.com/LVwKsZtPtzPe_-xiQLtIz_x4wfw=/fit-in/705x460/v2/https://resizing.flixster.com/lKCL0DL4PSd7X3KWyzAIDmk2Npw=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjc4MDcxMS53ZWJw",
  },
  {
    Poster:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8815512_p_v8_ax.jpg",
  },
  {
    Poster:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p9259673_p_v10_an.jpg",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjBjNGYwYjktYjIwZS00OWI1LWEyMmYtNzc1ZTAwNjIxNzNmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZjNlYmViNzAtYjk0ZC00NTVjLTkwOTAtMmI0NWYxYjQxZDE3XkEyXkFqcGc@._V1_.jpg",
  },
  {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDdjNTEzMjMtYjM3Mi00NzQ3LWFlNWMtZjdmYWU3ZDkzMjk1XkEyXkFqcGc@._V1_.jpg",
  },
];

function Homepage() {
  const [searchMovie, setSearchMovie] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [homepageMovieCards, setHomepageMovieCards] = useState([]);
  const [showDummy, setShowDummy] = useState(true);

  useEffect(() => {
    setHomepageMovieCards(dummyMovieCards);
    setShowDummy(true);
  }, []);

  const fetchSearchedMovieCards = async (query) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/?s=${query}&apikey=${import.meta.env.VITE_API_KEY}`
      );
      const allMovies = response?.data?.Search || [];
      setIsLoading(false);
      setHomepageMovieCards(allMovies);
      setShowDummy(false);
      if (query && allMovies.length === 0) {
        toast.error(`No results found for "${query}"`);
      }
    } catch (err) {
      setIsLoading(false);
      toast.error("Error fetching movies");
    }
  };

  const handleSearch = () => {
    if (!searchMovie) {
      toast.error("Please enter a Movie or TV Show");
      return;
    }
    fetchSearchedMovieCards(searchMovie);
  };

  const clearSearch = () => {
    if (!searchMovie) {
      toast.error("Nothing to clear");
      return;
    }
    setSearchMovie("");
    setHomepageMovieCards(dummyMovieCards);
    setShowDummy(true);
  };

  return (
    <div className="px-4 py-6 max-w-screen-xl mx-auto">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-center flex-wrap">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-600 text-transparent bg-clip-text tracking-wide">
          Horizon+
        </h1>

        <input
          type="text"
          placeholder="Enter Movie or TV Show"
          className="border outline-none w-full sm:w-[90%] md:w-[400px] lg:w-[600px] xl:w-[800px] py-2 sm:py-3 px-3 sm:px-4 rounded-xl shadow-md border-gray-300 font-medium transition duration-300 focus:ring-2 focus:ring-yellow-400 text-sm sm:text-base"
          value={searchMovie}
          onChange={(e) => setSearchMovie(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />

        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto justify-center">
          <button
            className="w-full sm:w-auto border border-green-600 py-2 px-3 sm:py-3 sm:px-6 bg-green-600 text-white rounded-xl shadow-md hover:scale-105 transition-transform font-semibold text-sm sm:text-base"
            onClick={handleSearch}
          >
            Search
          </button>

          <button
            className="w-full sm:w-auto border border-red-600 py-2 px-3 sm:py-3 sm:px-6 bg-red-600 text-white rounded-xl shadow-md hover:scale-105 transition-transform font-semibold text-sm sm:text-base"
            onClick={clearSearch}
          >
            Clear
          </button>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 justify-items-center">
        {homepageMovieCards.map((movieObj, i) => {
          const { Poster } = movieObj;
          return (
            <div key={i} className="w-full max-w-[180px] sm:max-w-full">
              <MovieCard Poster={Poster} />
            </div>
          );
        })}
      </div>

      {!isLoading && homepageMovieCards.length === 0 && searchMovie && (
        <p className="text-red-500 font-semibold text-base sm:text-xl mt-8 text-center">
          No movies found for "{searchMovie}"
        </p>
      )}

      <Toaster position="top-center" />
      <Loader loading={isLoading} loadingText={"Please wait..."} />
    </div>
  );
}

export default Homepage;
