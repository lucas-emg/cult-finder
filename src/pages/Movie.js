import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import apiMovies from "../utils/apiMovies"


const Movie = () => {

    const [movie, setMovie] = useState({})

    const {id} = useParams()

    const handleGetOneMovie = async () => {
      const data = await apiMovies.getOnemovie(id)
      setMovie(data)
    }

    
   useEffect(() =>{ 
    handleGetOneMovie()      
    }, [id])

    
   

  return (
  <div className="individual-movie-container">
    
    
        <img src={"https://image.tmdb.org/t/p/w780/"+ movie.poster_path} alt=""/>
  
    <div className="individual-movie-text">
        <span className="individual-movie-title"><h2>{movie.title}</h2></span>
        <h3><span className="individual-movie-details"><span className="individual-movie-bold">Released:</span> {movie.release_date}</span></h3>
        <h3><span className="individual-movie-details"><span className="individual-movie-bold">Genres:</span> {movie.genres && movie.genres.map(genre => <span className="results-cards" key={genre.name}>{genre.name} </span>)}</span></h3>
        <h3><span className="individual-movie-details"><span className="individual-movie-bold">Production Countries:</span> {movie.production_countries && movie.production_countries.map( country => <span className="results-cards" key={country.name}>{country.name} </span>)}</span></h3>
        <h3><span className="individual-movie-details"><span className="individual-movie-bold">Spoken Languages:</span> {movie.spoken_languages && movie.spoken_languages.map(language => <span className="results-cards" key={language.english_name}>{language.english_name} </span>)}</span>  </h3>
        <span className="individual-movie-details description-margin"><p>{movie.overview}</p></span>
    </div>
    <div className="individual-movie-imdb">
        <h2 className="find-more-details">More details on:</h2>
        <a target="_blank" href={`https://www.imdb.com/title/${movie.imdb_id}`} rel="noopener noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/IMDb_Logo_Square.svg/2048px-IMDb_Logo_Square.svg.png" alt=""/></a>
    </div>
  </div>
  );
};

export default Movie;
