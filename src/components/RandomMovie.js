import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import apiMovies from '../utils/apiMovies'
import loadingWheel from "../images/h6viz.gif"

const RandomMovie = () => {

  const [randomMovie, setRandomMovie] = useState({})
  const [loading, setLoading] = useState(false)

  const handleRandomMovie = async () => {
    setLoading(true)
    try {
      const data = await apiMovies.getRandomMovie()
      setRandomMovie(data)
    } catch(error) {
      console.log(error.response)
    } finally {
      setLoading(false)
    }
      

      
  }

  useEffect(() => {
    handleRandomMovie()
  }, [])
  

  return (
    <div className="random-container">

    <h2>Movie suggestion of the day!</h2>

    
    <Link className='random-movie-link' to={"/movie/" + randomMovie.id}>

    
    <div className="random-movie-card">
    {loading
    ? <div className='loading-random'><img src={loadingWheel} alt="Loading Wheel"/></div>
      : <>
      { randomMovie.poster_path
        ? <img src={"https://image.tmdb.org/t/p/w780/" + randomMovie.poster_path} alt="Movie Poster"/>
        : <img src="https://www.prokerala.com/movies/assets/img/no-poster-available.jpg" alt="Movie Poster"/>}
      
      <div className="random-movie-text">
        <h3><span className="random-movie-title">{randomMovie.title}</span></h3>
        { randomMovie.overview
          ? <p className='random-movie-details'><span className="text-bold">Sinopsis</span>: {randomMovie.overview}</p>
          : <p className='random-movie-details'><span className="text-bold">Sinopsis</span>: No sinopsis available</p>}
        { randomMovie.release_date
          ? <p className='random-movie-details'><span className="text-bold">Release</span>: {randomMovie.release_date}</p>
          : <p className='random-movie-details'><span className="text-bold">Release</span>: No release date available</p>}
      </div></>
    }
    </div>
    </Link>
    <button className="random-movie-btn" onClick={handleRandomMovie} variant="outlined">Get a new suggestion!</button>
      
    </div>
  )
}

export default RandomMovie