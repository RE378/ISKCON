import React from 'react'
import { Link } from "react-router-dom";
import '../components/stylesSheets/stylesForAbout.css';

function navForAbout() {
  return (
    <div>
  <nav class="navbar navbar-expand-lg bg-light navbar-light" aria-label="Offcanvas navbar large">
    <div class="container-fluid">
    <a class="navbar-brand  navBrand" href="...">
    <img src="https://iskconmumbai.com/images/logo-black.png"
       alt="" className="headerSymbol2"></img>
      <h4>ISKCON Juhu, Mumbai</h4>
      {/* <p>International Society for Krishna Consciousness</p> */}
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end text-bg-light" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
        <div class="offcanvas-header">
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
            <Link class="nav-link  navLink2" to="/">Home</Link>
               </li>
            
            <li class="nav-item">
            <Link class="nav-link navLink2 pur" to="/about">About</Link> 
            </li>
            <li class="nav-item">
            <Link class="nav-link navLink2 " to="/temple">Temple</Link> 
            </li>
            <li class="nav-item">
            <Link class="nav-link navLink2 " to="/media">Media</Link> 
            </li>
            <li class="nav-item">
            <Link class="nav-link navLink2 " to="/donate">Donate</Link> 
            </li>
            <li class="nav-item">
            <Link class="nav-link navLink2 " to="/bookStore">Book Store</Link> 
            </li>
            <li class="nav-item">
            <Link class="nav-link navLink2 " to="/contact">Contact</Link> 
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  </nav>


    </div>
  )
}

export default navForAbout