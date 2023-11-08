import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import './layouts.css';

function NavB() {
  return (
    <div>
        <Navbar expand="lg" className="navbar">
            <div className="container-fluid fixed-top">
                <Link style={{textDecoration:'none', color:'black'}} to="/">Home</Link> 
                <Nav.Link href="#">Contact</Nav.Link>
                <Nav.Link disabled>SwiftPark</Nav.Link>
            </div>
        </Navbar>
    </div>
  );
};

export default NavB;


