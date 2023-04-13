import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {

  
  return (
    <nav className="navbar navbar-expand-lg bg-warning">
      <div className="container">
        <Link className="navbar-brand text-light fw-bold"  to={'/'}>
          Users Api
        </Link>
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
              <Link to={'/'} className="nav-link active" aria-current="page">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'about'}  className="nav-link" >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'AddUser'}  className="nav-link" >
              AddUser
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
    </nav>
  );
}