import { Link } from 'react-router-dom'
import Logo from '../images/logo_placeholder.png'

const Navbar = () => {
  return (
    <nav className="nav-bar">
    <Link className="nav-links" to="/" >FlickPedia</Link>
    <Link className="nav-links" to="/search">Search</Link>
    <Link className="nav-links" to="/about">About</Link>

    </nav>
  )
}

export default Navbar