import React, { SetStateAction } from "react";
import "./styles.css";
import { useState, useEffect } from "react";

import mock from "../../assets/mock/mock.json";
import { useNavigate } from "react-router-dom";

import { mockData } from "../../@types/types";
import { mockWorks } from "../../@types/types";

function List() {

  const navigate = useNavigate();

  const [data, setData] = useState<mockData[]>();
  

  useEffect(() => {
    setData(mock);
  }, [])
  
  
 

  return (
    <div className="list">
      {data && data.map(res => {
        return (
             <div className="card" key={res.id}>
            <img className="card-img-top" src={res.image} alt="philosopher image" />
            <div className="card-body">
              <h5 className="card-title">{res.name}</h5>
              Country : { res.country} <img className="countryflag" crossOrigin="anonymous" src={res.flag} alt={res.country} />
              <p>Birthdate: {res.birthDate}</p>
              <p>Philosophy: {res.typePhilosophy}</p>
              <button className="btn btn-dark"onClick={(e) => {navigate("/philosopher",{state: {philosopher:res}})}}>More Info...</button>
            </div>
            </div>
        )
      })
        
      }
     </div>
  );
}

export default List;
