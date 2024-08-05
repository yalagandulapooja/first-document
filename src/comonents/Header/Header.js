import React from 'react';
import headerstyles from "./Header.module.css";
import logo from "./logo1.jpg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={headerstyles}>
        <nav className="navbar navbar-expand-lg p-0">
  <div className="container">
    <a className="navbar-brand" href="#"><img src={logo} alt="Logo" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/courses">Courses</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contactus">Contact Us</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header