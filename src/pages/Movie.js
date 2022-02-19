import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios'


const Movie = () => {

    const [movie, setMovie] = useState({})

    const {id} = useParams()

    
   useEffect(() =>{ 
       
    const getOnemovie = async () => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=6774c2e6f6d436c76de285ed46784876&language=en-US`)
        setMovie(data)
        
      }
      getOnemovie()
      
    }, [id])

    
   

  return (
  <div style={{display: 'flex'}}>
    
    <div>
        <img style={{width: "200px"}} src={"https://image.tmdb.org/t/p/w780/"+ movie.poster_path} alt=""/>
    </div>
    <div>
        <h2>{movie.title}</h2>
        <h3>Released: {movie.release_date}</h3>
        <h3>Genres: {movie.genres && movie.genres.map(genre => <span>{genre.name} </span>)}</h3>
        <h3>Production Countries: {movie.production_countries && movie.production_countries.map( country => <span>{country.name} </span>)}</h3>
        <h3>Spoken Languages: {movie.spoken_languages && movie.spoken_languages.map(language => <span>{language.english_name} </span>)}</h3>
        <p>{movie.overview}</p>
    </div>
    <div>
        <a target="_blank" href={`https://www.imdb.com/title/${movie.imdb_id}`} rel="noopener noreferrer"><img style={{width:"100px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/IMDb_Logo_Square.svg/2048px-IMDb_Logo_Square.svg.png" alt=""/></a>
    </div>
  </div>
  );
};

export default Movie;