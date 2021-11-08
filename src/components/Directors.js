import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Directors Page</h1>
      {directors.map(director => (
        <div key={director.name}>
          <h3>Name: {director.name}</h3>
          <p>Movies:</p>
          {director.movies.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Directors
