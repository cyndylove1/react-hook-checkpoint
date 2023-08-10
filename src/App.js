import React, { useState } from 'react';
import MovieList from './component/MovieList';
import Filter from './component/Filter';

const App = () => {
  const [movies, setMovies] = useState([
    // Initial movie data
    // { title: "Movie Title", description: "Description", posterURL: "URL", rating: 5 },
    // ...
  ]);
  

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState('');

  const handleTitleChange = (event) => {
    setTitleFilter(event.target.value);
  };

  const handleRateChange = (event) => {
    setRatingFilter(event.target.value);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      (!ratingFilter || movie.rating >= parseFloat(ratingFilter))
  );

  const handleAddMovie = () => {
    // Implement adding a new movie
  };

  return (
    <div className="app">
      <h1>My Movie App</h1>
      <Filter
        title={titleFilter}
        rate={ratingFilter}
        onTitleChange={handleTitleChange}
        onRateChange={handleRateChange}
      />
      <MovieList movies={filteredMovies} />
      <button onClick={handleAddMovie}>Add New Movie</button>
    </div>
  );
};

export default App;
