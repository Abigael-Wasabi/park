import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Footer from '../layouts/footer';
import NavBar from '../layouts/navbar';
import { Button } from 'react-bootstrap';
import NavB from '../layouts/navB';


const Home = () => {
    
return (
  <div>
    <NavB/>
    <Footer/>
    <div className="container app-background">
      <div className="row">
        <div className="col-md-2 nb"><NavBar/></div>
        <div className="col-md-5"></div>
        <div className="col-md-5 d-flex flex-column justify-content-between align-items-center">
            <Link to="/signup">
                <Button>GET STARTED</Button>
            </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
