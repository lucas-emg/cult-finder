import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Cards from '../components/Cards';
import Pagination from '../components/Pagination';
import apiMovies from '../utils/apiMovies'


const Search = () => {
  
  const [searchTerm, setSearchTerm] = useState(apiMovies.randomLetter());
  const [movies, setMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const indexOfLastPost = currentPage * postsPerPage;
  const indextOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = movies && movies.slice(indextOfFirstPost, indexOfLastPost)

  const handleSearchMovies = async () => {
    const data = await apiMovies.getSearchMovies(searchTerm)
    setMovies(data.results)
  }
  

  useEffect(() => {
    handleSearchMovies()
    
  }, [])

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      handleSearchMovies()
    }, 1000)

    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm])

  

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    
    <div>
      <div className="search-header">

        <h2>Find the movie you'd like to watch</h2>
        
        <TextField onChange={e => {setSearchTerm(e.target.value)}} type="text"className="search-bar" id="standard-basic" label="Search your movie" variant="standard" />
      </div>

      {searchTerm ?
      <div className="search-results">

        {currentPosts.map((movie) => {
          return <Link className="movie-results" to={"/movie/" + movie.id}><Cards key={movie.id} poster={"https://image.tmdb.org/t/p/w780/" + movie.poster_path} title={movie.title} release={movie.release_date} sinopsis={movie.overview} /></Link>
        })}
        
      </div>
      : <p>Please search your movie</p>}

      <Pagination key={paginate} postsPerPage={postsPerPage} totalPosts={movies.length} paginate={paginate} />
    </div>
  )
}

export default Search