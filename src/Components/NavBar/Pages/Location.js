import React, { useEffect, useState } from "react";
import Card from '../../Card/Card'
import InputGroup from '../../Filters/Category/InputGroup'
import './Style.css'

const Episodes = () => {
  let [results, setResults] = React.useState([]);
  let [info, setInfo] = useState([]);
  let { name, type, dimension, residents } = info;
  let [id, setID] = useState(1);

  let api = `https://rickandmortyapi.com/api/location/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.residents.map((x) => {
          return fetch(x).then((res) => res.json());
        })
      );
      setResults(a);
    })();
  }, [api]);

  return (
    <div className="container">
      <div className="row mb-3">
        <h1 className="Epi text-center mb-3">
          Location{" "}
        </h1>
          <h1 className="title text-center">{name === "" ? "Unknown" : name}</h1>
        
        <h5 className="label">
         Type : 
         <span className="type"> {type === "" ? "Unknown" : type}</span> 
        </h5>

        <h5 className="label">
         Dimension : 
         <span className="dimension"> {dimension === "" ? "Unknown" : dimension} </span>
        </h5>

        <h5 className="label">
         Population : 
         <span className="residents"> {residents?.length === "" ? "Unknown" : residents?.length} </span>
        </h5>


      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center mb-4">Choose Location</h4>
          <InputGroup name="Location" changeID={setID} total={126} />
        </div>
        <div className="col-lg-8 col-12 text-center ">
          <div className="row">
            <Card page="/location/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;