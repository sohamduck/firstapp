import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Footer from './components/Footer'
import Contact from './Contact';
import Default from './Default';
import SL from './StateLifting';
import Video from './Video';
import Random from './Random';
import Focus from './Focus';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/default" className="nav-item">Default</Link>
        <Link to="/sl" className="nav-item">Fruits</Link>
        <Link to="/video" className="nav-item">Video</Link>
        <Link to="/random" className="nav-item">Random</Link>
        <Link to="/focus" className="nav-item">Focus</Link>
        <Link to="/compo" className="nav-item">Components</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/default" element={<Default/>} />
        <Route path="/sl" element={<SL/>} />
        <Route path="/video" element={<Video/>} />
        <Route path="/random" element={<Random/>} />
        <Route path="/focus" element={<Focus/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      
      <Footer/>
    </div>
  );
}


export default App;
