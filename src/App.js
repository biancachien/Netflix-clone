import React from 'react'
import './App.css'
import requests from './requests'
import Row from './Row'

function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Drama Movies" fetchUrl={requests.fetchDramaMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Science Fiction" fetchUrl={requests.fetchSciFiMovies} />
      <Row title="Animation" fetchUrl={requests.fetchAnimation} />
      <Row title="Popular TV Shows" fetchUrl={requests.fetchPopularTV} />
    </div>
  );
}

export default App;
