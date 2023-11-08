import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import NavBar from '../layouts/navbar';
import FooTer from '../layouts/footer';
import './booking.css';

function Parking() {
  const [arrivalTime, setArrivalTime] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [carType, setCarType] = useState('');
  const [registrationNumber,setRegistrationNumber] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]);
  const [allocatedSlot, setAllocatedSlot] = useState(null);
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);

  useEffect(() => {
    // Fetch available slots from the database
    // You can make an API call here to retrieve available slots
    // Example API call: fetch('/api/slots')
    //   .then(response => response.json())
    //   .then(data => setAvailableSlots(data.slots));
    
    // For demonstration purposes, setting static available slots
    setAvailableSlots([1, 2, 3, 4, 5]); // Replace this with fetched data
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  //event handling function
  const handleArrivalTimeChange = (event) => {
    setArrivalTime(event.target.value, departureTime, carType, registrationNumber);
    checkAllFieldsFilled();
  };

  const handleDepartureTimeChange = (event) => {
    setDepartureTime(event.target.value, arrivalTime, carType, registrationNumber);
    checkAllFieldsFilled();
  };

  const handleCarTypeChange = (event) => {
    setCarType(event.target.value, arrivalTime, departureTime, registrationNumber);
    checkAllFieldsFilled();
  };

  const handleRegistrationNumberChange = (event) => {
    setRegistrationNumber(event.target.value, arrivalTime, departureTime, registrationNumber);
    checkAllFieldsFilled();
  };

  const checkAllFieldsFilled = () => {
    const allFieldsFilled =
      arrivalTime !== '' &&
      departureTime !== '' &&
      carType !== '' &&
      registrationNumber !== ''
    setAllFieldsFilled(allFieldsFilled);
  };

  const checkAvailability = () => {
    // Logic to check availability based on the selected options
    // For demonstration, assuming slots are available for the selected criteria
    if (availableSlots.length > 0) {
      alert('Slots are available. You can proceed with the reservation.');
    } else {
      alert('No slots available for the selected criteria. Please choose different options.');
    }
  };


  const allocateSlot = async () => {
    let minSlot, maxSlot;

    if (carType === '2 wheeler') {
      minSlot = 21;
      maxSlot = 30;
    } else if (carType === '4 wheeler') {
      minSlot = 11;
      maxSlot = 20;
    } else if (carType === '4+ wheeler') {
      minSlot = 1;
      maxSlot = 10;
    }
 
    const randomSlot = Math.floor(Math.random() * (maxSlot - minSlot + 1)) + minSlot;
    setAllocatedSlot(randomSlot);
  };

  const enterParkingDetails = async()=> {
    try{
      const response = await axios.post('http://localhost:4000/car/enterParkingDetails',{
        arrivalTime:arrivalTime,
        departureTime:departureTime,
        carType:carType,
        registrationNumber:registrationNumber,
    });
    console.log(response.data);
  }catch(err){
    console.log(err.message);
  }
};

  return (
      <div className='container boking'>
        <h3 style={{ textAlign: 'center', fontSize: '15px' }}>Seamless parking solutions, reserve your spot today</h3>
        
        <label>Arrival Time</label><br />
        <input 
        type="time" 
        value={arrivalTime} 
        onChange={handleArrivalTimeChange} /><br />

        <label>Departure Time</label><br />
        <input value={departureTime} type="time" onChange={handleDepartureTimeChange} /><br />

        <label>Car Type</label><br />
        <select value={carType} onChange={handleCarTypeChange}>
          <option value="">Select Car Type</option>
          <option value="2 wheeler">2 wheeler</option>
          <option value="4 wheeler">4 wheeler</option>
          <option value="4+ wheeler">4+ wheeler</option>
        </select><br />

          <div>
            <label>Registration Number</label><br />
            <input type="text" onChange={handleRegistrationNumberChange}></input>
          </div>  


        <button
          style={{ width: '100%', marginLeft: '0px' }}
          onClick={checkAvailability}>Check Availability
        </button>


        <button
          style={{ width: '100%', marginLeft: '0px' }}
          onClick={enterParkingDetails}
          disabled={!allFieldsFilled}>Submit
        </button>     

        <button
          style={{ width: '100%', marginLeft: '0px' }}
          onClick={allocateSlot}
          disabled={!allFieldsFilled}>Hold a Spot
        </button>

        {allocatedSlot !== null && <p>Allocated Slot: {allocatedSlot}</p>}

        <NavBar />
        <FooTer />
      </div>
  );
};

export default Parking;