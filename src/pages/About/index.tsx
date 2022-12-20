import React from "react";
import "./styles.css";
import Welcome from "../../assets/imgs/about.gif";

function About() {
  return (
      <div className="about">
      <h2>About the Project!</h2>
      <span>An FullStack Application which:</span>
      <br />
      <span> - Used React with TypeScript for the Frontend</span>
      <span> - Used the default React Router Dom to do the Routing</span>
      <span> - Used NodeJS with TypeScript for the Backend</span>
      <span> - Used Redis for Caching some operations on the Backend</span>
      <br />
      <span>Home is for the intent of the Project</span>
      <span>List is going to Show every Philosopher who is registered on the API</span>
      <span>Search  is used for search an specific philosopher on the philosophers api - Backend</span>
      <span>Legends, a section which have the greatests of all time on Philosophy: Socrates, Platão and Aristóteles,</span>
      <span>And redirect to which one of then</span>

      <h3>Most important of all, have some fun!</h3>
      
      <img src={Welcome}/>
     </div>
  );
}

export default About;
