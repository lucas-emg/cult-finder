import 'bulma/css/bulma.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Search from './pages/Search';
import MyList from './pages/MyList';
import About from './pages/About';
import Movie from './pages/Movie';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/mylist" element={<MyList />} />
      <Route path="/about" element={<About />} />
      <Route path="/movie/:id" element={<Movie />} />
    </Routes>
    </div>
  );
}

export default App;
