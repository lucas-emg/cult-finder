import 'bulma/css/bulma.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Search from './pages/Search';
import MyList from './pages/MyList';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/mylist" element={<MyList />} />
    </Routes>
    </div>
  );
}

export default App;
