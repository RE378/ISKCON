import React from 'react';
import '../components/stylesSheets/styles.css';
import { Link } from "react-router-dom";

export default function navbar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg text-light " sticky="top" aria-label="Offcanvas navbar large">
    <div class="container-fluid  ">
      <a class="navbar-brand text-light" href="...">
      <img src="https://iskconmumbai.com/images/logo-black.png"
       alt="" className="headerSymbol"></img>
      ISKCON Juhu, Mumbai</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
        <span class="navbar-toggler-icon bg-light" style={{padding:"5px"}} ></span>
      </button>
      <div class="offcanvas offcanvas-end text-bg-light" tabindex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
        <div class="offcanvas-header">
          <button type="button" className='btn-close ' data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item">
            <Link class="nav-link active  navLinks" aria-current="page" to="/home">Home</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link   navLinks" aria-current="page" to="/about">About</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link   navLinks" aria-current="page" to="/temple">Temple</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link   navLinks" aria-current="page" to="/media">Media</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link   navLinks" aria-current="page" to="/bookstore">book Store</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link   navLinks" aria-current="page" to="/contact">Contact</Link>
            </li>
            
          </ul>
          
        </div>
      </div>
    </div>
  </nav>

    </div>
  )
}
