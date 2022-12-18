import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import Menu from './components/Menu/Menu';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import "./App.css";

function App() {
  return (
      <main>
      <Router>
         <Menu />
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        </Router>
    </main>
  );
}

export default App;
