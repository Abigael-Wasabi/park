import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LogSign from './components/logsign';
import CompContainer from './components/containers';
import Boking from './components/booking';
import Parking from './components/parking';
import Profile from './pages/profile';
import About from './pages/about';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="app-background">
      <Router>
        <Routes>
          <Route exact path="/" element={<About/>} />
          <Route path="/logsign" element={<LogSign/>} />
          <Route path="/dashboard" element={<CompContainer/>}/>
          <Route path="/booking" element={<Boking/>}/>
          <Route path="/parking" element={<Parking/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </Router>
    </div>
  );
} 

export default App;


