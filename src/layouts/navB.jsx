import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import './layouts.css';

function NavB() {
  return (
    <div>
      <div className="container-fluid fixed-top">
        <h2 style={{textAlign: 'center'}} className="app-title">SwiftPark</h2>
      </div>
        <Navbar expand="lg" className="navbar">
            <div className="container-fluid">
                <Link style={{textDecoration:'none'}} to="/">Home</Link> 
                <Link style={{textDecoration:'none'}} to="/about">About</Link>  
                <Link style={{textDecoration:'none'}} to="/contact">Contact</Link>            
            </div>
        </Navbar>
    </div>
  );
};

export default NavB;


