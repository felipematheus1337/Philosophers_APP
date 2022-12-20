import React, { SetStateAction } from "react";
import "./styles.css";
import { useState, useEffect } from "react";

import mock from "../../assets/mock/mock.json";

interface mockWorks {
  id: number;
  name: string;
  date: string;
  buyUrl: string;
}


interface mockData {
  id: number,
  name: string;
  birthDate: string,
  flag: string;
  image: string;
  country: string;
  typePhilosophy: string;
  works: Array<mockWorks>
}



function List() {
  const [data, setData] = useState<mockData[]>();
  

  useEffect(() => {
    setData(mock);
  }, [])
  
  
 

  return (
    <div className="list">
      {data && data.map(res => {
        return (
          <div key={res.id}>
            <h1>Name:{res.name}</h1>
            <img  src={res.image} />
            <h3>BirthDate: {res.birthDate}</h3>
            <img crossOrigin="anonymous" src={res.flag} alt={res.country} />

          </div>
        )
      })
        
      }
     </div>
  );
}

export default List;
