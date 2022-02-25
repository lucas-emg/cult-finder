import React from 'react'

const Cards = ({ poster, title, release, sinopsis }) => {
  return (
    <div className="movie-card">
        
        <img src={poster} alt="Movie Poster"/>
        
        <div className="movie-card-text">
        <p><span className="movie-card-title">Title: {title}</span></p>
        <p><span className="movie-card-details"><span className="movie-card-details-bold">Release Date:</span> {release}</span></p>
        <p><span className="movie-card-details"><span className="movie-card-details-bold">Sinopsis:</span> {sinopsis}</span></p>
        </div>
    </div>
  )
}

export default Cards