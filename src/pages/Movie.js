import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import axios from 'axios'


const Movie = () => {

    const [movie, setMovie] = useState({})

    const {id} = useParams()

   useEffect(()=>{ 
       
    const getOnemovie = async () => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=6774c2e6f6d436c76de285ed46784876&language=en-US`)
        setMovie(data)
    }
    getOnemovie()
}, [id])

  return (
  <div>
    
    <div>
        <img style={{width: "200px"}} src={"https://image.tmdb.org/t/p/w780/"+ movie.poster_path} />
        <h2>{movie.original_title}</h2>
        <h3>Released: {movie.release_date}</h3>
        <h3>Released: {movie.release_date}</h3>
        <p>{movie.overview}</p>

    </div>
  </div>
  );
};

export default Movie;
