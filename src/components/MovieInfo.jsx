import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

function MovieInfo() {
  const [movieInfo, setMovieInfo] = useState([]);

  const { imdbID } = useParams();

  const fetchMovieInfo = async () => {
    const response = await axios.get(
      `https://www.omdbapi.com/?i=${imdbID}&apikey=5350614b`
    );
    setMovieInfo(response.data);
  };
  useEffect(() => {
    fetchMovieInfo();
  }, [imdbID]);

  const {
    Title,
    Year,
    Rated,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    Country,
    Awards,
    Poster,
  } = movieInfo;

  return (
    <div>
    <div>
      <h1>{Title}</h1>
      <h1>{Year}</h1>
      Rated={Rated}
      Released={Released}
      Runtime={Runtime}
      Genre={Genre}
      Director={Director}
      Writer={Writer}
      Actors={Actors}
      Plot={Plot}
      Language={Language}
      Country={Country}
      Awards={Awards}
      Poster={Poster}
    </div>
    </div>
  );
}

export default MovieInfo;
