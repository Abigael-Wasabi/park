import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../layouts/navbar';
import FooTer from '../layouts/footer';
import './booking.css';

function Boking() {
  const [vehicleType, setVehicleType] = useState('2 wheeler');
  const [numVehicles, setNumVehicles] = useState(1);
  const [registrationNumbers, setRegistrationNumbers] = useState([]);
  const [allocatedSlot, setAllocatedSlots] = useState([]);

  const handleVehicleTypeChange = (event) => {
    setVehicleType(event.target.value);
  };

  const handleNumVehiclesChange = (event) => {
    const num = parseInt(event.target.value);
    if (num >=1 && num <=5){
      setNumVehicles(num);
      // Reset registration numbers when the number of vehicles changes
      setRegistrationNumbers(new Array(num).fill(''));
    }else{
      alert('Number of vehicles must be between 1 and 5.');
    }
  };

  const handleRegistrationNumberChange = (index, event) => {
    const updatedRegistrationNumbers = [...registrationNumbers];
    updatedRegistrationNumbers[index] = event.target.value;
    setRegistrationNumbers(updatedRegistrationNumbers);
  };

  const allocateSlot = () => {
    let minSlot, maxSlot;
    if (vehicleType === '2 wheeler') {
      minSlot = 21;
      maxSlot = 30;
    } else if (vehicleType === '4 wheeler') {
      minSlot = 11;
      maxSlot = 20;
    } else if (vehicleType === '4+ wheeler') {
      minSlot = 1;
      maxSlot = 10;
    }

    const newAllocatedSlots = [];
    for (let i = 0; i < numVehicles; i++) {
    const allocatedSlot = Math.floor(Math.random() * (maxSlot - minSlot + 1)) + minSlot;
    newAllocatedSlots.push(allocatedSlot);
    }
    setAllocatedSlots(newAllocatedSlots);
  };

  return (
    <><div className='container boking'>
      <h3 style={{ textAlign: 'center', fontSize: '15px' }}>seamless parking solutions, reserve your spot today</h3>
      <label>Arrival Time</label><br></br>
      <input type="time" placeholder="Enter your arrival time" /><br></br>

      <label>Departure Time</label><br></br>
      <input type="time" placeholder="Enter your departure time" /><br></br>

      <label>vehicle Type</label><br></br>
      <select value={vehicleType} onChange={handleVehicleTypeChange}>
        <option value="2 wheeler">2 wheeler</option>
        <option value="4 wheeler">4 wheeler</option>
        <option value="4+ wheeler">4+ wheeler</option>
      </select><br />

      <label>Number of Vehicles</label><br />
      <input type="number" min="1" max="5" value={numVehicles} onChange={handleNumVehiclesChange} /><br />

      {registrationNumbers.map((regNo, index) => (
        <div key={index}>
          <label>Registration Number {index + 1}</label><br />
          <input
            type="text"
            value={regNo}
            onChange={(event) => handleRegistrationNumberChange(index, event)} /><br />
        </div>
      ))}

      <label>Contact Number</label><br></br>
      <input type="tel" placeholder="Enter your contact number" /><br></br>

      <button style={{width: '100%', marginLeft:'0px'}} onClick={allocateSlot}>Hold a Spot</button>
      
      {allocatedSlot.length > 0 && (
          <div>
            <p>Allocated Slots:</p>
            <ul>
              {allocatedSlot.map((slot, index) => (
                <li key={index} style={{listStyle:'none'}}>{slot}</li>
              ))}
            </ul>
          </div>
        )}
        
      <button>Cancel Reservation</button>
    </div>
    
    <div>
        <NavBar />
        <FooTer />
    </div></>
  );
}

export default Boking;