import { Link } from 'react-router-dom'
import Logo from '../images/logo_placeholder.png'

const Navbar = () => {
  return (
    <nav className="nav-bar">
    <Link to="/" ><img src={Logo} alt='Logo'/></Link>
    <Link className="nav-links" to="/search">Search</Link>
    <Link className="nav-links" to="/mylist">My List</Link>

    </nav>
  )
}

export default Navbar