/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './login.css'

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

   //login logic
  const handleLogin = async() => {
    try{
      const response= await axios.post('http://localhost:4000/user/login',{
        email:email,
        password:password,
    });
    console.log(response.data);
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
      <label htmlFor="email">Email</label>
      <input 
       type="text" 
       name="email"
       value={email} 
       onChange={handleEmailChange}/><br></br>
      <label htmlFor="password">Password</label>
      <div>
      <input
       type={passwordVisible ? 'text': 'password'}
       name="password"
       value={password}
       onChange={handlePasswordChange}/>
       <span onClick={togglePasswordVisibility}>
        <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
       </span>
      </div><br></br>
      <div style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</div>
      <div style={{textAlign: 'center',}}className="forgot-password">
       <a style={{textDecoration: 'none',color:'black'}}href="#">Forgot Password?</a>
      </div>
      <label className="checkbox-label" htmlFor="rememberMe">
        <input type="checkbox" placeholder="RememberMe"/>Remember Me
      </label><br></br>
      <button onClick={handleLogin} disabled={isButtonDisabled}>Login</button>
    </div>
  );
};

export default LoginForm;