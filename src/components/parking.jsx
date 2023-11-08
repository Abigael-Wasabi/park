import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import NavBar from '../layouts/navbar';
import FooTer from '../layouts/footer';
import './booking.css';

function Boking() {
  //current state value, Function to update the current state value, Hook used to track state, Function calling 
  const [arrivalTime, setArrivalTime] = useState('');
  const [departureTime, setDepartureTime] = useState('');
  const [carType, setCarType] = useState('');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [allocatedSlot,setAllocatedSlot] = useState(null);
  const [availableSlots, setAvailableSlots] = useState(null);
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);

  //event handling function
  const handleArrivalTimeChange = (event) => {
    setArrivalTime(event.target.value);
    checkAllFieldsFilled();
  };

  const handleDepartureTimeChange = (event) => {
    setDepartureTime(event.target.value);
    checkAllFieldsFilled();
  };

  const handleCarTypeChange = (event) => {
    setCarType(event.target.value);
    checkAllFieldsFilled();
  };

  const handleRegistrationNumberChange = (event) => {
    setRegistrationNumber(event.target.value);
    checkAllFieldsFilled();
  }

  const checkAllFieldsFilled = () => {
    const allFieldsFilled =
      arrivalTime !== '' &&
      departureTime !== '' &&
      carType !== '' &&
      registrationNumber !== '';
    setAllFieldsFilled(allFieldsFilled);
  };

  const checkAvailability = async () => {
    try {
      const response = await axios.get('http://localhost:4000/car/checkAvailableSlots');
      setAvailableSlots(response.data.availableSlots);
    } catch (error) {
      console.error('Error checking availability:', error);
    }
  };

  const allocateSlot = async () => {
    try {
      const response = await axios.get('http://localhost:4000/car/allocateRandomSlot', {
        params: {
          carType: carType,
        }, 
      });
      setAllocatedSlot(response.data.parkingSlot.parkingSlotNumber);
    } catch (error) {
      console.error('Error allocating slot:', error);
    }
  };

  const enterParkingDetails = async () => {
    try{
      const response= await axios.post('http://localhost:4000/car/enterParkingDetails', {
         arrivalTime:arrivalTime, 
         departureTime:departureTime,
         carType:carType, 
         registrationNumber:registrationNumber,
         });
         //handle the response from the server
         console.log(response.data);
      }catch(error){
        console.log('Error entering parking details:',error);
    }
  };
  
  return (
      <div className='container boking'>
        <h3 style={{ textAlign: 'center', fontSize: '15px' }}>find your spot, park on the dot</h3>
        
        <label>Arrival Time</label><br />
        <input 
        type="time" 
        value={arrivalTime} 
        onChange={handleArrivalTimeChange} /><br />

        <label>Departure Time</label><br />
        <input type="time" 
        value={departureTime} 
        onChange={handleDepartureTimeChange} /><br />

        <label>Car Type</label><br />
        <select value={carType} onChange={handleCarTypeChange}>
          <option value="">Select Car Type</option>
          <option value="2 wheeler">2 wheeler</option>
          <option value="4 wheeler">4 wheeler</option>
          <option value="4+ wheeler">4+ wheeler</option>
        </select><br />

        <label>Registration Number</label><br />
        <input type="text" value={registrationNumber} onChange={handleRegistrationNumberChange} /><br />

        <button
         style={{ width: '100%', marginLeft: '0px' }}
         onClick={checkAvailability}>Check Availability
        </button>
        {availableSlots !== null && <h6 style={{ textAlign: 'center', fontSize: '16px', fontWeight: 'normal' }}>Available Slots: {availableSlots}</h6>}

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
        {allocatedSlot !== null && <h6 style={{textAlign:'center', fontSize: '16px', fontWeight: 'normal'}}>Allocated Slot: {allocatedSlot}</h6>}

        <NavBar />
        <FooTer />
      </div>
  );
}

export default Boking;