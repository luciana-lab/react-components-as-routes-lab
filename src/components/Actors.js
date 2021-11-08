import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {actors.map(actor => (
        <div key={actor.name}>
          <h3>Name: {actor.name}</h3>
          <p>Movies:</p>
          {actor.movies.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Actors;