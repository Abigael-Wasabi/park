import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Footer from '../layouts/footer';
import NavB from '../layouts/navB';
import { Button } from 'react-bootstrap';


const Home = () => {
    
return (
    <div className="container-fluid app-background">
      <div className="row">
        <div className="col-md-6"></div>
        <div className="col-md-6 d-flex flex-column justify-content-between align-items-center">
            <Link to="/signup">
                <Button>GET STARTED</Button>
            </Link>
        </div>
      </div>
      <Footer/>
      <NavB/>
    </div>
  );
};

export default Home;
