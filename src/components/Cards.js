import React from 'react'

const Cards = ({ poster, title, release, sinopsis, posterID }) => {
  return (
    <div className="movie-card">
        
       
        {posterID
          ? <img src={poster} alt="Movie Poster"/>
          : <img src="https://www.prokerala.com/movies/assets/img/no-poster-available.jpg" alt="Movie Poster"/>}
         
        
        <div className="movie-card-text">
        <p><span className="movie-card-title">Title: {title}</span></p>
        <p><span className="movie-card-details"><span className="movie-card-details-bold">Release Date:</span> {release}</span></p>
        <p><span className="movie-card-details"><span className="movie-card-details-bold">Synopsis:</span> {sinopsis}</span></p>
        </div>
    </div>
  )
}

export default Cards