import React from "react";
import "./styles.css";
import { useLocation } from "react-router-dom";
import {mockWorks} from "../../../src/@types/types";


const Philosopher = () => {
    
    const { state } = useLocation();
    const { philosopher } = state || {};


    console.log(philosopher);

    return (
        <div className="container-philosopher">
            <img src={philosopher.image} alt={philosopher.name}/>
            <h3>{philosopher.name}, {philosopher.country} {philosopher.birthDate}</h3>
            <div className="content-philosopher">
            <div className="about-philosopher">
              <h4>About</h4>
              <p>Philosophy Type: {philosopher.typePhilosophy}</p>
              <p>Flag: <img crossOrigin="anonymous" src={philosopher.flag} alt="flag"/></p>
              <p>{philosopher.description}</p>
            </div>
            <aside className="works-philosopher">
                <h4>Works</h4>
               {philosopher.works && philosopher.works.map((work:mockWorks) => {
                return(
                    <>
                    <p>{work.name}</p>
                    <p>{work.date}</p>
                    <a href={work.buyUrl}>Click here to buy it!</a>
                    <hr />
                    </>
                )
               })}
            </aside>
            </div>
        </div>
    )
}

export default Philosopher;