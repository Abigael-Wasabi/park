/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import './signup.css';
// eslint-disable-next-line jsx-a11y/anchor-is-valid

// const SignUpForm = ({switchToLogin}) => {
const SignUpForm = ({switchToLogin, onSubmit}) => {
  const navigate = useNavigate();//Initialize useNavigate //navigate("/dashboard")
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleFirstnameChange = (event) =>{
    setFirstname(event.target.value);
    updateButtonState(event.target.value, lastname, email, password, confirmPassword);
  }

  const handleLastnameChange = (event) =>{
    setLastname(event.target.value);
    updateButtonState(firstname, event.target.value, email, password, confirmPassword);
  }

  const handleEmailChange = (event) =>{
    setEmail(event.target.value);
    updateButtonState(firstname,lastname, event.target.value, password, confirmPassword);
  }

  const handlePasswordChange = (event) =>{
    setPassword(event.target.value);
    updateButtonState(firstname, lastname, email, event.target.value, confirmPassword);
  }

  const handleConfirmPasswordChange = (event) =>{
    setConfirmPassword(event.target.value);
    updateButtonState( firstname,lastname, email, password, event.target.value);
  }

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const updateButtonState = (firstname, lastname, email, password, confirmPassword) => {
    if (firstname && lastname && email && password && confirmPassword) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

    // Handle signup logic here
  const handleSignUp = async() => {
    try{
      const response= await axios.post('http://localhost:4000/auth/register', {
         firstname:firstname, 
         lastname:lastname, 
         email:email, 
         password:password,
         confirmPassword:confirmPassword,
         });
         //handle the response from the server
         console.log(response.data);
         navigate("/dashboard");
      }catch(err){
        console.log(err.message);
    }
  };

  return (
    <div className="SignUpForm">
      <h2 style={{textAlign: 'center'}} className="app-title">SwiftPark</h2>
      <label htmlFor="firstname">Firstname</label><br></br>
      <input 
       type="text"
       placeholder="Firstname"
       id="firstname"
       value={firstname} 
       onChange={handleFirstnameChange}
       autoComplete="given-name" /><br></br>

      <label htmlFor="lastname">Lastname</label><br></br>
      <input 
       type="text"
       placeholder="Lastname"
       id="lastname"
       value={lastname} 
       onChange={handleLastnameChange}
       autoComplete="family-name" /><br></br>

      <label htmlFor="email">Email</label><br></br>

      <input 
       type="email"
       placeholder="Email"
       id="email"
       value={email} 
       onChange={handleEmailChange}
       autoComplete="email" /><br></br>

      <label htmlFor="password">Password</label><br></br>
      <div className="password-input">
       <input
       type={passwordVisible ? "text" : "password"}
       placeholder="Password" 
       id="password"
       value={password}
       onChange={handlePasswordChange}
       autoComplete="new-password" />
       <span onClick={togglePasswordVisibility}>
        <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
       </span>
      </div>
       <br></br>
      <label htmlFor="confirmPassword">Confirm Password</label><br></br>
      <div className="password-input">
       <input 
       type={confirmPasswordVisible ? "text" : "password"}
       placeholder="Confirm Password"
       id="confirmPassword"
       value={confirmPassword} 
       onChange={handleConfirmPasswordChange}/>
       <i onClick={toggleConfirmPasswordVisibility}>
        <FontAwesomeIcon icon={confirmPasswordVisible ? faEye : faEyeSlash} />
       </i>
      </div>
      <br></br>

      <label className="checkbox-label" htmlFor="privacyPolicy">
      <input
       type="checkbox"/>
       <a style={{textDecoration:'none', color: 'black'}} href="#">I Agree With Privacy and Policy</a>
      </label><br></br>
       
      <Link style={{textDecoration:'none', color:'black'}} to="/dashboard">
      <button
        onClick={handleSignUp}
        disabled={isButtonDisabled}>
        Sign Up
      </button>
      </Link>
      <p className="signup-link">
        <a style={{textDecoration:'none', color:'black'}} href="#"
        onClick={switchToLogin}>I'm a member.Login</a>
      </p>
    </div>
  );
};

export default SignUpForm;