import React from 'react';
import Menu from './components/Menu/Menu';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import "./App.css";
import About from './pages/About';
import List from './pages/List';
import Philosopher from './pages/Philosopher';

function App() {
  return (
      <main>
      <Router>
         <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/list" element={<List />} />
          <Route path="/philosopher" element={<Philosopher/>} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
