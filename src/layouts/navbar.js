import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Profile from '../pages/profile';
import Contact from '../pages/contact';

const NavBar =()=>{
  const [showModal, setShowModal] = useState(false);
  const toggleModal =  () => {
    setShowModal(!showModal);
  }
  const closeModal = () => {
    setShowModal(false);
  };

  const [showCModal, setShowCModal] = useState(false);
  const toggleCModal =  () => {
    setShowCModal(!showCModal);
  }
  const closeCModal = () => {
    setShowCModal(false);
  };


    return (
      <div>
        <Navbar expand="lg" className="navbar nb">
          <div className="container d-sm-inline-block flex-column">
            <Link  to="/">Home</Link><br></br>
            <Link  to="/about">About</Link>  <br></br>         
            <span  onClick={toggleCModal} style={{cursor: 'pointer'}}>Contact</span><br></br>
            <span  onClick={toggleModal} style={{cursor: 'pointer'}}>Profile</span>
          </div>
        </Navbar>

      {showModal && <Profile showModal={showModal} closeModal={closeModal} />}
      {showCModal && <Contact showCModal={showCModal} closeCModal={closeCModal} />}
      </div>
    );
};
export default NavBar;