import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Row from '../components/Row';

function Home({ addMovieToList }) {
    return (
        <>
            <Header />
            <Row title="Popular Movies" fetchDataUrl="https://api.tvmaze.com/shows" addMovieToList={addMovieToList} />
        </>
    );
}

export default Home;
