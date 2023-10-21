import React from 'react'
import './Navbar.css';
import './Home';
import {NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    
    <div>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Navbar
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
      <a className="nav-link active" aria-current="page" href="/">
        Home
      </a>
            </li>
            <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Productoperation
          </a>
          <ul className="dropdown-menu">
          <li className="nav-item">
              <NavLink className="dropdown-item" to="/Products">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="dropdown-item" to="/createproduct">Createproduct</NavLink>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li className="nav-item">
            <NavLink className="dropdown-item" to="/hallo">somethingelsehare</NavLink>
            </li>
          </ul>
        </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Contact">Category</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/About">About us</NavLink>
            </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="/">Comming soon...</a>
        </li>
      </ul>
      <form className="d-flex" role="search">

        <button className="btn btn-outline-success" type="submit">
          Logout
        </button>
      </form>
    </div>
  </div>
</nav>


    </div>
  )
}
export default Navbar;