import { useContext } from "react";
import { MovieContext } from "./MovieContext";

export const MovieContextConsumerTest = () => {
  const { movies } = useContext(MovieContext);
  return <p>{movies}</p>;
};
