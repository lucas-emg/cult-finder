import { useState } from 'react'
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Cards from '../components/Cards';
import Pagination from '../components/Pagination';
import moviesList from '../movies.json'

const movies = moviesList.results


const Search = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const indexOfLastPost = currentPage * postsPerPage;
  const indextOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = movies.slice(indextOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div>
      <div className="search-header">

        <h2>Find the movie you'd like to watch</h2>
        
        <TextField onChange={e => {setSearchTerm(e.target.value)}} type="text"className="search-bar" id="standard-basic" label="Search your movie" variant="standard" />
      </div>

      <div className="search-results">

        {currentPosts.filter((val) => {
          if(searchTerm === " ") {
            return val
          } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val
          }
        }).map((movie) => {
          return <Link className="movie-results" to={"/movie/" + movie.id}><Cards poster={"https://image.tmdb.org/t/p/w780/" + movie.poster_path} title={movie.title} release={movie.release_date} sinopsis={movie.overview} /></Link>
        })}
        
      </div>

      <Pagination postsPerPage={postsPerPage} totalPosts={movies.length} paginate={paginate} />
    </div>
  )
}

export default Search