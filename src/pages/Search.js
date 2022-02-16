import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Cards from '../components/Cards';
import moviesList from '../movies.json'

const movies = moviesList.results

const Search = () => {

  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div>
      <div className="search-header">

        <h2>Find the movie you'd like to watch</h2>
        
        <TextField onChange={e => {setSearchTerm(e.target.value)}} type="text"className="search-bar" id="standard-basic" label="Search your movie" variant="standard" />
      </div>

      <div className="search-results">

        {movies.filter((val) => {
          if(searchTerm === " ") {
            return val
          } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val
          }
        }).map((movie) => {
          return <Cards poster={"https://image.tmdb.org/t/p/w780/" + movie.poster_path} title={movie.title} release={movie.release_date} sinopsis={movie.overview} />
        })}

      </div>
    </div>
  )
}

export default Search