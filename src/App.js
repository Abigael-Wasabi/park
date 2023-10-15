import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LogSign from './components/logsign';
import CompContainer from './components/containers';
import Boking from './components/booking';
import Parking from './components/parking';
import Profile from './pages/profile';
import About from './pages/about';

function App() {

  return (
    <div className="app-background">
      <Router>
        <Routes>
          <Route exact path="/" element={<LogSign/>} />
          <Route path="/dashboard" element={<CompContainer/>}/>
          <Route path="/booking" element={<Boking/>}/>
          <Route path="/parking" element={<Parking/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
} 

export default App;



// ... other middleware and app setup ...
// app.post('/auth/register', async (req, res) => {
//   try {
//     // Extract user registration data from the request body
//     const { username, email, password } = req.body;

//     // Prepare user registration data
//     const userData = {
//       username,
//       email,
//       password,
//     };

//     // Send a POST request to the registration endpoint
//     const response = await fetch('http://localhost:4000/auth/register', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(userData),
//     });

//     // Handle the response
//     if (response.status === 201) {
//       // User registered successfully
//       const data = await response.json();
//       // Handle the response data (e.g., store user token, redirect, etc.)
//       console.log('User registered:', data);
//       res.status(201).json(data); // Return the response from your API to the frontend
//     } else {
//       // Registration failed
//       const errorData = await response.json();
//       console.error('Registration error:', errorData.message);
//       res.status(response.status).json(errorData); // Return the error response to the frontend
//     }
//   } catch (error) {
//     console.error('Error registering user:', error);
//     res.status(500).json({ error: 'Internal server error' }); // Handle server errors
//   }
// });

// ... (other routes and server setup) ...