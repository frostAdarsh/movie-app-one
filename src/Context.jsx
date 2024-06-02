import React, { useContext, useEffect } from "react";
import { useState } from "react";
export const API_URL = `https://www.omdbapi.com/?apikey=3dab8791&s`;
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [ismovie, setMovie] = useState([]);
  const [isError, setIsError] = useState({ show: "false", msg: "" });
  const [query, setQuery] = useState('Avengers');
  const getMovies = async (url) => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      if (data.Response === "True") {
        setIsError({
          show: false,
          msg: '',
        });
        setLoading(false);
        setMovie(data.Search);
      } else {
        setIsError({
          show: true,
          msg:data.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovies(`${API_URL}&s=${query}`);
    }, 500);
    return () => clearTimeout(timerOut);
  }, [query]);

  return (
    <AppContext.Provider
      value={{ isLoading, isError, ismovie, query, setQuery }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext, useGlobalContext };
