/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import './signup.css';
// eslint-disable-next-line jsx-a11y/anchor-is-valid

// const SignUpForm = ({switchToLogin}) => {
const SignUpForm = ({switchToLogin}) => {
  const navigate = useNavigate();//Initialize useNavigate //navigate("/login")
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');


  const handleFirstnameChange = (event) =>{
    setFirstname(event.target.value);
    updateButtonState(event.target.value, lastname, email, password, confirmPassword);
  };

  const handleLastnameChange = (event) =>{
    setLastname(event.target.value);
    updateButtonState(firstname, event.target.value, email, password, confirmPassword);
  };

  const handleEmailChange = (event) =>{
    setEmail(event.target.value);
    updateButtonState(firstname,lastname, event.target.value, password, confirmPassword);
  };

  const handlePasswordChange = (event) =>{
    setPassword(event.target.value);
    updateButtonState(firstname, lastname, email, event.target.value, confirmPassword);
  };

  const isNameValid = (name) => {
    const nameRegex = /^[a-zA-Z]+$/;
    return nameRegex.test(name);
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@(gmail\.com|yahoo\.com)$/i;
    return emailRegex.test(email);
  };

  const isPasswordValid = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleConfirmPasswordChange = (event) =>{
    setConfirmPassword(event.target.value);
    updateButtonState( firstname,lastname, email, password, event.target.value);
  };

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
      const response= await axios.post('http://localhost:4000/user/signup', {
         firstname:firstname, 
         lastname:lastname, 
         email:email, 
         password:password,
         confirmPassword:confirmPassword,
         });

         if (!isNameValid(firstname) || !isNameValid(lastname)) {
          console.log("Invalid firstname or lastname.");
          return;
        }
         if (!isEmailValid(email)) {
          console.log("Invalid email address");
          return;
        }
         if (password !== confirmPassword) {
          console.log("Passwords do not match");
          return;
        }
         if (!isPasswordValid(password)) {
          console.log("Password does not meet complexity requirements");
          return;
        }
         console.log(response.data);//response from the server
         navigate("/login");
      }catch(err){
        if (err.response && err.response.status === 400) {
          setErrorMessage('User with email ${email} already exists');
          console.log(err.response.data.message);}
        else {
          setErrorMessage('An error occurred. Please try again later.');}
          console.log(err.message);} 
        finally {
          updateButtonState(email, password, errorMessage);}
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
      <div style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</div>

      <label className="checkbox-label" htmlFor="privacyPolicy">
      <input
       type="checkbox"/>
       <a style={{textDecoration:'none', color: 'black'}} href="#">I Agree With Privacy and Policy</a>
      </label><br></br>

      <Link
        style={{ textDecoration: "none", color: "black" }} to="/login"
        onClick={
          isPasswordValid(password) && 
          password === confirmPassword && 
          isEmailValid(email) && 
          isNameValid(firstname) &&
          isNameValid(lastname) ? handleSignUp : null}>
        <button disabled={
          !isPasswordValid(password) || 
          password !== confirmPassword || 
          !isEmailValid(email) ||
          !isNameValid(firstname) ||
          !isNameValid(lastname) ||
          isButtonDisabled}>Sign Up</button>
      </Link>
      

      <p className="signup-link">
        <Link style={{textDecoration:'none', color:'black'}} to="/login"
        onClick={switchToLogin}>I'm a member.Login</Link>
      </p>
    </div>
  );
};

export default SignUpForm;