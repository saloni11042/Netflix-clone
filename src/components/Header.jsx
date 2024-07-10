import React from 'react';
import movieData from '../data/data.json'; 
import './Header.css'; 

function Header() {
  const show = movieData;

  return (
    <header className="header" style={{ backgroundImage: `url(${show.image.original})` }}>
    <div className="header-content">
      <h1 className="header-title">{show.name}</h1>
      <p className="header-summary">{show.summary}</p>
      <div className="header-buttons">
        <button className="header-button play-button">Play</button>
        <button className="header-button info-button">More Info</button>
      </div>
    </div>
  </header>
  );
}

export default Header;
