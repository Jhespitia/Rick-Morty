import React from 'react'
import './Filter.css'
import Gender from './Category/Gender'
import Species from './Category/Species'
import Status from './Category/Status'

const Filters = ({setStatus, setPageNumber, setGender, setSpecies}) => {
 
  let clear = ()=> {
    setStatus('');
    setPageNumber('');
    setGender(''); 
    setSpecies('');
    window.location.reload(false);
  }

    return (
      <div className='filterBox col-3 mx-4'>
            <div className="fl text-center fw-bolder fs-4 mb-2">Filters</div>

          <div id="accordion">
            <Gender setGender={setGender} setPageNumber={setPageNumber}/>
            <Status setStatus={setStatus} setPageNumber={setPageNumber}/>       
            <Species setSpecies={setSpecies} setPageNumber={setPageNumber}/> 
          </div>
          <div 
            onClick={clear}
            style={{cursor: 'pointer'}} 
            className="fl text-center  text-decoration-underline my-3"> Clear Filters
          </div>
      </div>
   )
}

export default Filters;