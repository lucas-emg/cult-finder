import React from 'react'

const Cards = ({ poster, title, release, sinopsis }) => {
  return (
    <div className="movie-card">
        
        <img src={poster} alt="Movie Poster"/>
        
        <div className="movie-card-text">
        <p><span className="text-bold">Title:</span> {title}</p>
        <p><span className="text-bold">Release Date:</span> {release}</p>
        <p><span className="text-bold">Sinopsis:</span> {sinopsis}</p>
        </div>
    </div>
  )
}

export default Cards