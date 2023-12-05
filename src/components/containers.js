import React from 'react';
import RequestRide from './ride';
import Booking from './book';
import Parking from './park';
import FooTer from '../layouts/footer';
import NavBar from '../layouts/navbar';

const CompContainer =()=>{
    return (  
      <div className="container">
        <div className="row">
          <div className="col-md-2"><NavBar/></div>
          <div className="col-md-5 d-flex justify-content-center"><FooTer/></div>
          <div className="col-md-5">
          <div className="row pop-up">
            <Booking />
          </div>
          <div className="row pop-up">
            <Parking />
          </div>
          <div className="row pop-up">
            <RequestRide />
          </div>
          </div>
        </div>
      </div>
    );
};
export default CompContainer;