import React from "react";
import "./styles.css";
import { useLocation } from "react-router-dom";


const Philosopher = () => {
    
    const { state } = useLocation();
    const { philosopher } = state || {};

    console.log(philosopher);

    return (
        <div>
            Hello {Philosopher.name}!   
        </div>
    )
}

export default Philosopher;