import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import MoviesList from "./components/MoviesList";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Hoisting makes that all "const" statements are processed
  // at the beginning, therefore useEffect needs to be moved
  // after "const fetchMoviesHandler ..."
  // and NOT like before can stay before it
  // when the normal function() syntax is used
  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null); // Clear previous error
    try {
      const response = await fetch("https://swapi.dev/api/films/");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode.id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []); // state updating functions (e.g. setError) don't need to be included
  // because they are automatically added by react

  // HTTP requests is a side-effect that may change component state
  // Such side-effect should go into useEffect
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]); // only runes for the first time

  let content = <p>Found no movies</p>;
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Data is loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
