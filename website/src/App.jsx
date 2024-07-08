import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Home from './pages/homePage/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Categories from './pages/Categories';
import Info from './pages/Info';
import Anime from './pages/Anime';
import Movies from './pages/Movies';
import WebSeries from './pages/WebSeries';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <div className="topCtr">
          <div className="navbar">
            <NavBar />
          </div>
        </div>
        <div className="bodyCtr">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/info" element={<Info />} />
            <Route path="/anime" element={<Anime />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/webseries" element={<WebSeries />} />
          </Routes>
        </div>
        <div className="footer">Footer</div>
      </div>
    </Router>
  );
}

export default App;
