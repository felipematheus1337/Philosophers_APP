import React from 'react';
import './styles.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Menu() {

  const [toSearch, setToSearch] = useState<Boolean>(false);
  const [paramToFind, setParamToFind] = useState<string>();

  return (
    <div className="menu">
      <Link to="/"><h4><AiOutlineHome size={20}/>Home</h4></Link>
     <Link to="/list"><h4><AiOutlineUnorderedList size={20} />List</h4></Link> 
      <h4 onClick={() => {
        setToSearch(!toSearch);
      }}><AiOutlineSearch size={20} />Search</h4>
      {toSearch && <div className="search"> <input type="text" onChange={(e) => setParamToFind(e.target.value)} />
      <button>Find</button>
      </div>}
      <Link to="/about"><h4><AiOutlineInfoCircle size={20} />About</h4></Link>
      <p>Legends</p>
      <Link to="/about"><h4>Socrates</h4></Link>
      <Link to="/about"><h4>Platão</h4></Link>
        <Link to="/about"><h4>Aristóteles</h4></Link>
    </div>
    
  );
}

export default Menu;
