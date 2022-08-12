import { Movie } from "./Movie";
import { MovieProvider } from "./MovieContext";
import { MovieContextConsumerTest } from "./MovieContextConsumerTest";
import "./styles.css";

export default function App() {
  return (
    <MovieProvider>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Movie />
        <MovieContextConsumerTest />
      </div>
    </MovieProvider>
  );
}
