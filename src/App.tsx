import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import Menu from './components/Menu/Menu';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Menu />
        <Routes>
          <Route path="/" element={ <h1>Home Page</h1>}/>
        </Routes>
        </Router>
    </>
  );
}

export default App;
