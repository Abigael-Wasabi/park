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

          <div className="col-sm-4 pop-up">
            <Booking />
          </div>

          <div className="col-sm-4 pop-up">
            <Parking />
          </div>

          <div className="col-sm-4 pop-up">
            <RequestRide />
          </div>
          
        </div>
        <FooTer/>
        <NavBar/>
      </div>
    );
};
export default CompContainer;