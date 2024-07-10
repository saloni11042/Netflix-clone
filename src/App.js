import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Row from './components/Row';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import TVShows from './pages/TVShows';
import Movies from './pages/Movies';
import NewPopular from './pages/NewPopular';
import MyList from './pages/MyList';

function App() {
  const [addedMovies, setAddedMovies] = useState([]);

  const addMovieToList = (movie) => {
    setAddedMovies((prevMovies) => [...prevMovies, movie]);
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home addMovieToList={addMovieToList} />} />
          <Route path='/tvshows' element={<TVShows addMovieToList={addMovieToList} />} />
          <Route path='/movies' element={<Movies addMovieToList={addMovieToList} />} />
          <Route path='/newpopular' element={<NewPopular addMovieToList={addMovieToList} />} />
          <Route path='/mylist' element={<MyList addedMovies={addedMovies} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
