/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './login.css'
import Cookies from 'js-cookie';

const LoginForm= () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (event) =>{
    setEmail(event.target.value);
    updateButtonState(event.target.value, password);
  };

  const handlePasswordChange = (event) =>{
    setPassword(event.target.value);
    updateButtonState(event.target.value, email);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  
  const updateButtonState = (email, password) => {
    if (email && password) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };
  //!parking UI

   //login logic
  const handleLogin = async(event) => {
    event.preventDefault();
    try{
      const response= await axios.post('http://localhost:4000/user/login',{
        email:email,
        password:password,
    },
    { 
      headers: {
        'Content-Type': 'application/json',
      }
    }
    );
    console.log("sertyuihyredtf",response.data);

    if(response.data.userData){
      const { token } = response.data.userData
      Cookies.set('token', token);
    }

    localStorage.setItem('userID', response.data.userID);//Stored in local storage
    setErrorMessage('');
    navigate("/dashboard");
  }catch(err){
    if (err.response && err.response.status === 404) {
      setErrorMessage('User not found.');
    } else if (err.response && err.response.status === 401) {
      setErrorMessage('Incorrect password.');
    }
    else {
    setErrorMessage('An error occurred. Please try again later.');
    }
    console.log(err.message);
  } finally {
    updateButtonState(email, password, errorMessage);
  }};

  
  return (
    <div style={{marginTop:'50px'}} className="LoginForm">
      <h2 style={{textAlign: 'center'}} className="app-title">SwiftPark</h2>
      <form onSubmit={handleLogin}>
      <input 
       type="text" 
       placeholder='email'
       name="email"
       value={email} 
       onChange={handleEmailChange}
       style={{ '--placeholder-color': 'black' }} /><br></br>
      <div>
      <input
       type={passwordVisible ? 'text': 'password'}
       placeholder='password'
       name="password"
       value={password}
       onChange={handlePasswordChange}/>
       <span onClick={togglePasswordVisibility}>
        <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
       </span>
      </div><br></br>
      <div style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</div>
      <div style={{textAlign: 'center',}}className="forgot-password">
       <Link to="/forgot-password">Forgot Password?</Link>
      </div>
      <button type="submit" disabled={isButtonDisabled}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;