import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import './App.css';
import Card from './Components/Card/Card';
import Filters from './Components/Filters/Filters';
import Pagination from './Components/Pagination/Pagination';
import Search from './Components/Search/Search';
import NavBar from './Components/NavBar/NavBar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Episodes from './Components/NavBar/Pages/Episodes'
import Location from './Components/NavBar/Pages/Location'
import CardModal from './Components/Card/CardModal';
function App () {

  return(
    <Router>
      <div className="App">
      <NavBar/>
      </div>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<CardModal/>}/>
        
        <Route path='/episodes' element={<Episodes/>}/>
        <Route path='episodes/:id' element={<CardModal/>}/>
        
        <Route path='/location' element={<Location/>}/>
        <Route path='location/:id' element={<CardModal/>}/>
      </Routes>
      
    </Router>
  )
  
}


const Home = () => {

  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch] = useState('');


  let [status, setStatus] = useState('');
  let [gender, setGender] = useState('');
  let [species, setSpecies] = useState('');

  let [fetchedData, setFetchedData] = useState([]);
  let {info, results} = fetchedData;


 

  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`

  //IIFE - Function without name/imidiate call itself
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setFetchedData(data);
      console.log(data.results);
      
    })();
  }, [api]);

  return (
    <div className="App">
      
      
      <Search setPageNumber={setPageNumber} setSearch={setSearch}/>

      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="row">
              <Card page='/' results={results}/>
            </div>
          </div>
           
            <Filters 
            setSpecies={setSpecies}
            setGender={setGender}
            setStatus={setStatus} 
            setPageNumber={setPageNumber}
            />
        </div>
      </div>
    
      <Pagination 
        info={info} 
        pageNumber={pageNumber} 
        setPageNumber={setPageNumber}/>
    </div>
  );
}

export default App;
