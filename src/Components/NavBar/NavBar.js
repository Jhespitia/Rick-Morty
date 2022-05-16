import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../NavBar/NavBar.css'
import logo from'../../Images/rick.png'

const NavBar = () => {
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <img src={logo} alt="" width={'70px'}/>
    <Link to='/'className='logo fs-3 ubuntu navbar-brand'>Rick & Morty 
        <span className="text"> App</span>
      </Link>
    <button 
      className="bt navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarNavAltMarkup" 
      aria-controls="navbarNavAltMarkup" 
      aria-expanded="true" 
      aria-label="Toggle navigation">
      
      <i class="fa-solid fa-bars open text-light"></i>
      {/* <i class="fa-solid fa-xmark close"></i> */}
      
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav fs-5">
        <NavLink activeClassName to='/' className="nav-link" >Characters</NavLink>
        <NavLink to='/episodes'className="nav-link" >Episodes</NavLink>
        <NavLink to='/location'className="nav-link" >Locations</NavLink>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar;