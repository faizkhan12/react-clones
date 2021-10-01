import React, { useEffect, useState } from "react"
import axios from "../api/axios"
import requests from "../api/Requests"
import "./Banner.css"

const Banner = () => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const req = await axios.get(requests.fetchNetflixOriginals)
      setMovie(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      )
      return req
    }
    fetchData()
  }, [])

  // Function to cut out the long text by ...(ellipse function)
  const truncate = (string, n) => {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string
  }

  return (
    <header
      className='banner'
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className='banner__contents'>
        <h1 className='banner__title'>
          {movie?.name || movie?.original_name || movie?.title}
        </h1>
        <p className='banner__description'>{truncate(movie?.overview, 150)}</p>
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>More info</button>
        </div>
      </div>
      <div className='banner__fadeButton'></div>
    </header>
  )
}

export default Banner
