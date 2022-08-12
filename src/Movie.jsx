import { useContext } from "react";
import { MovieContext } from "./MovieContext";

export const Movie = () => {
  const { movies, setMovies, prices, setPrices } = useContext(MovieContext);
  return (
    <p>
      Movie component
      <button onClick={() => setMovies(movies + 1)}>Click me!!</button>
    </p>
  );
};
