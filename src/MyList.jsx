import React, { useEffect, useState } from "react";
import { fetchMovies, deleteMovie } from "./authService";
import { NavLink } from "react-router-dom";

const MyList = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getSavedMovies = async () => {
      try {
        const moviesList = await fetchMovies();
        setMovies(moviesList);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies: ", error);
      }
    };

    getSavedMovies();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteMovie(id);
      setMovies(movies.filter((movie) => movie.id !== id));
    } catch (error) {
      console.error("Error deleting movie: ", error);
    }
  };

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="my-list">
      <h2>List Of Movies And Shows</h2>
      <NavLink to="/" className="back-btn">
        Go Back
      </NavLink>
      <div className="movies-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card mylist-effect">
            <img src={movie.Poster} alt={movie.Title} />
            <div className="fontstyle">
              <h3>{movie.Title}</h3>
              <h3>{movie.Year}</h3>
              <h3>{movie.Country}</h3>
              <h3>{movie.imdbRating}</h3>
              <h3>{movie.Awards}</h3>
              <button
                className="signup-btn del"
                onClick={() => handleDelete(movie.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyList;
