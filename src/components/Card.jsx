// src/components/Card.js

import React, { useState } from 'react';
import './Card.css'; // Import CSS for styling

function Card({ movie, addMovieToList}) {
  const [added, setAdded] = useState(false);

  const handleAddClick = () => {
    setAdded(true);
    addMovieToList(movie);
  };
  return (
    <div className="card">
      <img className="card-poster" src={movie.image.medium} alt={movie.name} />
      <div className="card-content">
        <h3 className="card-title">{movie.name}</h3>
        <p className="card-summary">{movie.summary}</p>
        <button className="card-add-btn" onClick={handleAddClick} disabled={added}>
          {added ? 'Added' : 'Add to list'}
        </button>
      </div>
    </div>
  );
}

export default Card;
