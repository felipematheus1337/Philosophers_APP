import React from 'react';
import Menu from './components/Menu/Menu';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import "./App.css";
import About from './pages/About';
import List from './pages/List';

function App() {
  return (
      <main>
      <Router>
         <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/list" element={<List/>} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
