import React from 'react';

function MyList({ addedMovies }) {
  return (
    <div>
      <h1>My List</h1>
      <ul>
        {addedMovies.map((movie) => (
          <li key={movie.id}>
            <h3>{movie.name}</h3>
            <img src={movie.image.medium} alt={movie.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyList;
