import { Link } from 'react-router-dom'
import searchicon from '../images/magnifying_glass.png'

const Navbar = () => {
  return (
    <nav className="nav-bar">
    <Link className="nav-logo" to="/" >Flick<span className="logo">Pedia</span></Link>
    <Link className="nav-links" to="/search">Search<img className="search-icon" src={searchicon} alt="search icon"/></Link>
    <Link className="nav-links" to="/about">About</Link>

    </nav>
  )
}

export default Navbar