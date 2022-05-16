import React, { useEffect, useState } from "react";
import Card from '../../Card/Card'
import InputGroup from '../../Filters/Category/InputGroup'
import './Style.css'

const Episodes = () => {
  let [results, setResults] = React.useState([]);
  let [info, setInfo] = useState([]);
  let { air_date, name } = info;
  let [id, setID] = useState(1);

  let api = `https://rickandmortyapi.com/api/episode/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setInfo(data);

      let a = await Promise.all(
        data.characters.map((x) => {
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
          Episode{" "}
        </h1>
          <h1 className=" title text-center">{name === "" ? "Unknown" : name}</h1>
        <h5 className="label text-center">
          Air Date: 
          <span className="air"> {air_date === "" ? "Unknown" : air_date}</span>
        </h5>
      </div>
      <div className="row">
        <div className="col-lg-3 col-12 mb-4">
          <h4 className="text-center mb-4">Choose Episode</h4>
          <InputGroup name="Episode" changeID={setID} total={51} />
        </div>
        <div className="col-lg-8 col-12 text-center ">
          <div className="row">
            <Card page="/episodes/" results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Episodes;