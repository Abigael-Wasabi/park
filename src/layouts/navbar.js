import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import Profile from '../pages/profile';

const NavBar =()=>{
  const [showModal, setShowModal] = useState(false);

  const toggleModal =  () => {
    setShowModal(!showModal);
  }

  const closeModal = () => {
    setShowModal(false);
  };

    return (
      <div>
        <Navbar expand="lg" className="navbar">
          <div className="container fixed-top">
            <Nav.Link disabled>SwiftPark</Nav.Link>
            <Link style={{textDecoration:'none', color:'black'}} to="/">Home</Link>
            <Link style={{textDecoration:'none', color:'black'}} to="/">About</Link>            
            <Link style={{textDecoration:'none', color:'black'}} to="/dashboard">Services</Link>
            <Nav.Link href="#">Contact</Nav.Link>
            <Nav.Link href="#">Settings</Nav.Link>
            <span onClick={toggleModal} style={{cursor: 'pointer'}}>Profile</span>
          </div>
        </Navbar>

      {showModal && <Profile showModal={showModal} closeModal={closeModal} />}
      </div>
    );
};
export default NavBar;