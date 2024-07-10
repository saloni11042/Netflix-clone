// src/components/Row.js

import React, { useEffect, useState } from 'react';
import Card from './Card';
import './Row.css'; // Import CSS for styling

function Row({ title, fetchDataUrl, addMovieToList }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {fetchData();}, []); // Empty dependency array to run effect only once on mount

  const fetchData = async () => {
    try {
      const response = await fetch(fetchDataUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="row">
      <h2 className="row-title">{title}</h2>
      <div className="row-cards">
        <div className="card-list">
          {movies.slice(0, 6).map((movie) => (
            <Card key={movie.id} movie={movie} addMovieToList={addMovieToList}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Row;
