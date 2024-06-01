import React, { useState, useEffect } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import { API_URL } from "./Context";
import { saveMovie } from "./authService";  // Import saveMovie function

const SingleMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize useNavigate

  const [isLoading, setLoading] = useState(true);
  const [ismovie, setMovie] = useState("");
  const [isError, setIsError] = useState({ show: "false", msg: "" });

  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.Response === "True") {
        setLoading(false);
        setMovie(data);
      } else {
        setIsError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovies(`${API_URL}&i=${id}`);
    }, 900);
    return () => clearTimeout(timerOut);
  }, [id]);

  const handleSaveMovie = async () => {
    try {
      await saveMovie(ismovie);
      navigate("/my-list"); // Navigate to MyList page after saving the movie
    } catch (error) {
      console.error("Error saving movie: ", error);
    }
  };

  if (isLoading) {
    return (
      <div className="movie-section">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  return (
    <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={ismovie.Poster} alt="poster" />
        </figure>
        <div className="card-content">
          <p className="title">{ismovie.Title}</p>
          <p className="card-text">{ismovie.Released}</p>
          <p className="card-text">{ismovie.Genre}</p>
          <p className="card-text">{ismovie.imdbRating} / 10</p>
          <p className="card-text">{ismovie.Country}</p>
          <p className="card-text">{ismovie.Awards}</p>
          <div className="btn-flex">
            <NavLink to="/" className="back-btn">
              Go Back
            </NavLink>
          </div>
            <button className="signup-btn neo" onClick={handleSaveMovie}>
              Add To List
            </button>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie;
