import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import apiMovies from '../utils/apiMovies'
import Button from '@mui/material/Button';

const RandomMovie = () => {

  const [randomMovie, setRandomMovie] = useState({})
  const [loading, setLoading] = useState(false)

  const handleRandomMovie = async () => {
      const data = await apiMovies.getRandomMovie()

      setRandomMovie(data)
  }

  useEffect(() => {
    handleRandomMovie()
  }, [])
  

  return (
    <div className="random-container">

    <h2>Movie suggestion of the day!</h2>

    <Link className="random-container" to={"/movie/" + randomMovie.id}>

    <div className="random-movie-card">

      { randomMovie.poster_path
        ? <img src={"https://image.tmdb.org/t/p/w780/" + randomMovie.poster_path} alt="Movie Poster"/>
        : <img src="https://www.prokerala.com/movies/assets/img/no-poster-available.jpg" alt="Movie Poster"/>}
      
      <div className="random-movie-text">
        <h3><span className="text-bold">Title</span>: {randomMovie.title}</h3>
        { randomMovie.overview
          ? <p><span className="text-bold">Sinopsis</span>: {randomMovie.overview}</p>
          : <p><span className="text-bold">Sinopsis</span>: No sinopsis available</p>}
        { randomMovie.release_date
          ? <p><span className="text-bold">Release</span>: {randomMovie.release_date}</p>
          : <p><span className="text-bold">Release</span>: No release date available</p>}
        
      </div>
    
    </div>
    </Link>
    <Button onClick={handleRandomMovie} variant="contained">Get a new suggestion!</Button>
      
    </div>
  )
}

export default RandomMovie