import React, { useState } from "react";

export const MovieContext = React.createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState(0);
  const [prices, setPrices] = useState();
  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        prices,
        setPrices
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
