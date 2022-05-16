import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container" background="thistle">
          <NavLink className="navbar-brand fw-bold fs-4" to="#" text-color='#A9A9A9'>ASHTRA HOME DECORSS</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/" text-color="#D8BFD8">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products" text-color="#D8BFD8">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" text-color="#D8BFD8">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact" text-color="#D8BFD8">Contact</NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink to="/login" className='btn btn-outline-dark'>
                <i className="fa fa-sign-in me-1"></i>Login</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;