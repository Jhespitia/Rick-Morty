import React from 'react'
import '../Search/search.css'



const Search = ({setSearch, setPageNumber,}) => {

  return (
    <div>
      <h1 className='big'>Characters</h1>
    <form className='d-flex justify-content-center mb-5 gap-4'>
        <input  onChange={ e => {
            setPageNumber(1)
            setSearch(e.target.value)
          
        }}
                placeholder='Search Character Name...' 
                type="text" 
                className='' 
                />
            <button 
                 onClick={e =>{
                    e.preventDefault();
                    }} 
                   className="btn1 fs-5"> Search 🔍
            </button>
    </form>
    </div>
  )
}

export default Search;