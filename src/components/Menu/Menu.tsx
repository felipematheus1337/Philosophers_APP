import React from 'react';
import './styles.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai'
import {AiOutlineInfoCircle} from 'react-icons/ai'

function Menu() {
  return (
    <div className="menu">
      <h4><AiOutlineHome size={20}/>Home</h4>
      <h4><AiOutlineUnorderedList size={20} />List</h4>
      <h4><AiOutlineSearch size={20} />Search</h4>
      <h4><AiOutlineInfoCircle size={20} />About</h4>
   </div>
  );
}

export default Menu;
