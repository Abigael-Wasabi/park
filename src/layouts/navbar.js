import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import Profile from '../pages/profile';
import About from '../pages/about';

const NavBar =()=>{
  const [showModal, setShowModal] = useState(false);

  const toggleModal =  () => {
    setShowModal(!showModal);
  }

  const closeModal = () => {
    setShowModal(false);
  };

  const [showAModal, setShowAModal] = useState(false);

  const togglingModal =  () => {
    setShowAModal(!showAModal);
  }

  const closeAModal = () => {
    setShowAModal(false);
  };
    return (
      <div>
        <Navbar expand="lg" className="navbar">
          <div className="container fixed-top">
            <Link style={{textDecoration:'none', color:'black'}} to="/">Home</Link>
            <span onClick={togglingModal} style={{cursor: 'pointer'}}>About</span>
            <Link style={{textDecoration:'none', color:'black'}} to="/dashboard">Services</Link>
            <Nav.Link href="#">Contact</Nav.Link>
            <Nav.Link href="#">Settings</Nav.Link>
            <span onClick={toggleModal} style={{cursor: 'pointer'}}>Profile</span>
            <Nav.Link disabled>SwiftPark</Nav.Link>
          </div>
        </Navbar>

      {showModal && <Profile showModal={showModal} closeModal={closeModal} />}
      {showAModal && <About showAModal={showAModal} closeAModal={closeAModal} />}
      </div>
    );
};
export default NavBar;