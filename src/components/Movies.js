import React from 'react';
import { movies } from '../data';

const Movies = () => {

  return (
    <div>
      {/*{code here}*/}
      <h1>Movies Page</h1>
      {movies.map(movie => (
        <div key={movie.title}>
          <h2>Name: {movie.title}</h2>
          <p>Time: {movie.time}</p>
          <p>Genres:</p>
          {movie.genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Movies;
