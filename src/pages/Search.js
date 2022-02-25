import loadingWheel from "../images/h6viz.gif"
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Cards from '../components/Cards';
import Pagination from '../components/Pagination';
import apiMovies from '../utils/apiMovies'


const Search = () => {
  
  const [searchTerm, setSearchTerm] = useState(apiMovies.randomLetter());
  const [movies, setMovies] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const indexOfLastPost = currentPage * postsPerPage;
  const indextOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = movies && movies.slice(indextOfFirstPost, indexOfLastPost)
  const [loading, setLoading] = useState(false)

  const handleSearchMovies = async () => {
    setLoading(true)
    try {
    const data = await apiMovies.getSearchMovies(searchTerm)
    setMovies(data.results)
    } catch(error) {
      console.log(error.response)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  

  useEffect(() => {

    handleSearchMovies()
    
  }, [])

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      handleSearchMovies()
      setCurrentPage(1)
    }, 1000)

    return () => clearTimeout(delayDebounceFn)
  }, [searchTerm])

  

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    
    <div>
      <div className="search-header">

        <h2>Find the movie you'd like to watch</h2>

        <input className="search-bar" onChange={e => {setSearchTerm(e.target.value)}} placeholder="Search for your movie"></input>
 
        {/* <TextField color="warning" onChange={e => {setSearchTerm(e.target.value)}} type="text" className="search-bar" id="standard-basic" label="Search your movie" variant="standard" /> */}
      </div>

        
      {searchTerm ?
      <div className="search-results">

        {loading
        ? <img className='loading' src={loadingWheel} alt="Loading Wheel"/>
        : currentPosts.map((movie) => {
          return <Link key={movie.id} className="movie-results" to={"/movie/" + movie.id}><Cards posterID={movie.poster_path} poster={"https://image.tmdb.org/t/p/w780/" + movie.poster_path} title={movie.title} release={movie.release_date} sinopsis={movie.overview} /></Link>
        })
        }
        
      </div>
      : setSearchTerm(apiMovies.randomLetter())}

      <Pagination className="pagination" key={paginate} postsPerPage={postsPerPage} totalPosts={movies.length} paginate={paginate} />
    </div>
  )
}

export default Search