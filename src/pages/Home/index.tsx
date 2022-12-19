import React from "react";
import "./styles.css";
import Gip from "../../assets/imgs/gip.gif"

function Home() {
  return (
      <div className="home">
      <h2>Welcome to the Philosophers APP!</h2>
      <span>An APP Created by somebody who loves Philosophy</span>
      <span>The intentional was to synthesize my knowledge on programming and philosophy </span>
     <span><img src={Gip}/><h1>Enjoy, IT!</h1></span>
      
     </div>
  );
}

export default Home;
