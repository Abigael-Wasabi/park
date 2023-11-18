import React from 'react';
import { Link } from 'react-router-dom';
import NavB from '../layouts/navB';
import FooTer from '../layouts/footer';

function About() {
  return (
   
    
<div style={{marginTop:'50px'}} className='row'>
  <NavB/>
  <FooTer/>

<div className='col-md-2'></div>
<div className='col-md-8'>


<div className='row'>

<div className='col-sm-6'>
<h5 style={{textAlign:'center'}}>About Us</h5>
<p className="paragraph">Welcome to SwiftPark, where innovation meets convenience in the realm of parking solutions.
We understand that parking is an integral component of urban infrastructure, crucial for
the seamless flow of traffic, especially in bustling areas such as airports, stadiums,
and event venues.</p>
</div>

<div className='col-sm-6'>
  <Link to="/signup" style={{textDecoration: 'none', color: 'black'}}>
  <button className="d-flex flex-column align-items-center justify-content-center" style={{textAlign:'center'}}>GET STARTED</button>
  </Link>
</div>
</div>


<div className='row'>
<div className='col-sm-6'></div>

<div className='col-sm-6'>
<h5 style={{textAlign:'center'}}>Our Mission</h5>
<p className="paragraph">At SwiftPark, our mission is to revolutionize the parking experience by addressing the
challenges faced by parking areas. We are committed to optimizing parking space utilization,
enhancing convenience, and ensuring a hassle-free journey for every driver.</p>
</div>
</div>



<div className='row'>
<div className='col-sm-6'>
<h5 style={{textAlign:'center'}}>What Sets Us Apart</h5>
<p className="paragraph">
<li>Efficient Payment Systems: Say goodbye to long queues and delays. We have implemented
a state-of-the-art online payment system. Now, drivers can pay for their parking using
their mobile devices or credit/debit cards, streamlining the process and eliminating
manual cash collections.</li></p>


<p className="paragraph"><li>Real-Time Parking Information: We provide real-time parking information through our
intuitive online booking system. Drivers can reserve and pay for parking spaces in
advance, ensuring they find available spots and reducing congestion. This also helps 
parking area owners plan their schedules effectively.</li></p>

<p className="paragraph"><li>Seamless Transportation Services: Through our strategic partnerships with renowned 
ride-sharing companies like Uber, Bolt, and Yego, we offer a seamless transportation 
experience. Passengers and travelers can easily request rides to and from their 
destinations, ensuring they reach their destinations comfortably and on time, 
especially after alighting from planes or carrying luggage.</li></p>
</div>
<div className='col-sm-6'></div>
</div>




<div className='row'>
<div className='col-sm-6'></div>
<div className='col-sm-6'>
<h5 style={{textAlign:'center'}}>Why Choose Us?</h5>
<p className="paragraph">At SwiftPark, we prioritize customer satisfaction. We value your feedback and are 
continuously working to enhance our services. Your input drives our innovations, 
making parking and transportation an effortless experience for everyone.</p><br></br>
<br/>
</div>
</div>


<h6 className="paragraph">Join us in transforming the way you park and travel. Discover the ease of smart 
parking solutions and reliable transportation services with SwiftPark.</h6>


</div>
<div className="col-sm-2"></div>


</div>


    
  );
};

export default About;