import React from "react"
import requests from "../../api/Requests"
import Banner from "../../components/Banner"
import NavBar from "../../components/NavBar"
import Row from "../../components/Row"
import "./HomeScreen.css"

const HomeScreen = () => {
  return (
    <div className='home__screen'>
      {/* Navbar */}
      <NavBar />
      {/* Banner */}
      <Banner />
      {/* Row */}
      <Row
        title='NETFLIX ORIGINALS'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  )
}

export default HomeScreen
