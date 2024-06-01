import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./Context";

const Movies = () => {
  const { ismovie } = useGlobalContext();
  return (
    
    <section className="movie-page">
      <div className="container grid grid-4-col">

      { ismovie.map((curMovie) => {
        const {imdbID,Title,Poster}=curMovie
        const movieName = Title.substring(0,15)
        return (
         <NavLink to={`movie/${imdbID}`} key={imdbID}>
              <div className="card">
                <div className="card-info">
                  <h2>{movieName.length >=15 ? `${movieName} ...` : movieName}</h2>
                  <img src={Poster} alt="{imdbID}" />
                </div>
              </div>
         </NavLink>
        )
      })}
      </div>

    </section>
    
  );
};

export default Movies;
