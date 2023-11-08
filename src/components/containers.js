import React from 'react';
import RequestRide from './ride';
import Booking from './book';
import Parking from './park';
import FooTer from '../layouts/footer';
import NavBar from '../layouts/navbar';

const CompContainer =()=>{
    return (  
      <div className="container">
        <div className="row pop-up">
        <Booking />
        </div>
        <div className="row pop-up">
        <Parking />
        </div>
        <div className="row pop-up">
        <RequestRide />
        </div>
        <FooTer/>
        <NavBar/>
      </div>
    );
};
export default CompContainer;