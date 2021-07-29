# Basics

- returns a promise
- is async

# Example

```javascript
function App() {
  const [movies, setMovies] = useState([]);

  const fetchMoviesHandler = () => {
    fetch("https://swapi.dev/api/films/")
      .then((response) => {
        return response.json(); // returns promise
      })
      .then((data) => {
        const transformedMovies = data.results.map((movieData) => {
          return {
            id: movieData.episode.id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          }; // returns actual data data
        });
        setMovies(transformedMovies);
      });
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}
```
