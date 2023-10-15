/* eslint-disable jsx-a11y/anchor-is-valid */
// /* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useState , useEffect} from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import './login.css';

// const LoginForm = ({ switchToSignUp }) => {
//   const navigate =useNavigate(); //Initialize usenavigate
//   const [showPassword, setShowPassword] = useState(false);
//    // eslint-disable-next-line 
//   const [rememberMe, setRememberMe] = useState(false);
//   const [isButtonDisabled, setIsButtonDisabled] = useState(true);
//   const [formData, setFormData] = useState({
//     fullname: '',
//     password: '',
//     rememberMe: false,
//   });

//   const handlePasswordVisibility = (field) => {
//     if (field === 'password') {
//       setShowPassword(!showPassword);
//       }
//   };
//   const handleInputChange = (event) => {
//     const { name, value, type, checked } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   useEffect(() => {setIsButtonDisabled(!(formData.fullname && formData.password));},
//   [formData.fullname, formData.password]);

//   const handleLogIn = () => {
//     if (formData.fullname && formData.password) {
//     // Simulate successful login
//     console.log('Log In data:', formData);
//     navigate("/dashboard");
//   }else{
//     console.log("Please fill in all the details");
//   }
// };

//   return (
//     <div className="login-form">
//       <h2 style={{textAlign: 'center'}} className="app-title">SwiftPark</h2>
//       <label>Fullname / Email</label><br></br>
//       <input type="text" placeholder="Fullname / Email" onChange={handleInputChange}/><br></br>
//       <label>Password</label><br></br>
//       <div className="password-input">
//         <input 
//         type={showPassword ? 'text' : 'password'} 
//         placeholder="Password" 
//         value={formData.password}
//         onChange={handleInputChange}/>
//         <i
//           className={`password-icon ${showPassword ? 'visible' : ''}`}
//           onClick={() => handlePasswordVisibility('password')}
//           >
//             <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
//         </i>
//       </div><br></br>
//       <div style={{textAlign: 'center',}}className="forgot-password"><a style={{textDecoration: 'none',color:'black'}}href="#">Forgot Password?</a></div>
//       <div className="remember-me">
//         <label className="checkbox-label" htmlFor="rememberMe">
//           <input 
//           type="checkbox" 
//           id="rememberMe" 
//           name="rememberMe"
//           checked={formData.rememberMe} 
//           onChange={()=>setRememberMe(!rememberMe)}/> 
//           Remember me
//         </label>
//       </div>
//       <button className='login-button'
//        onClick={handleLogIn}
//        disabled={isButtonDisabled}>
//        <Link style={{textDecoration:'none', color:'black'}} to="/dashboard">Log In</Link>
//       </button>
//       <div className="login-options">
//         <p>or</p>
//         <button className="google-login">Log in with Google</button>
//         <p className="signup-link" onClick={switchToSignUp}>
//           <a style={{textDecoration:'none', color:'black'}} href="#">I'm new.Sign Up</a>
//         </p>
//       </div>
//     </div>
   
//   );
// };

// export default LoginForm;








import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './login.css'
// eslint-disable-next-line jsx-a11y/anchor-is-valid

const LoginForm= ({switchToSignUp}) => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleFullnameChange = (event) =>{
    setFullname(event.target.value);
    updateButtonState(event.target.value, email, password);
  };

  const handleEmailChange = (event) =>{
    setEmail(event.target.value);
    updateButtonState(event.target.value, fullname, password);
  };

  const handlePasswordChange = (event) =>{
    setPassword(event.target.value);
    updateButtonState(event.target.value, fullname, email);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  
  const updateButtonState = (fullname, email, password) => {
    if (fullname && email && password) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <div className="LoginForm">
      <h2 style={{textAlign: 'center'}} className="app-title">SwiftPark</h2>
      <label htmlFor="fullname">Fullname/Email</label>
      <input 
       type="text"
       placeholder="Fullname/Email"
       name="fullname"
       value={fullname} 
       onChange={handleFullnameChange}/><br></br>
      <label htmlFor="email">Email</label>
      <input 
       type="text"
       placeholder="Email"
       name="email"
       value={email} 
       onChange={handleEmailChange}/><br></br>
      <label htmlFor="password">Password</label>
      <div>
      <input
       type={passwordVisible ? 'text' : 'password'}
       placeholder="Password" 
       name="password"
       value={password}
       onChange={handlePasswordChange}/>
       <span onClick={togglePasswordVisibility}>
        <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
       </span>
      </div>
      <br></br>
      <div style={{textAlign: 'center',}}className="forgot-password">
       <a style={{textDecoration: 'none',color:'black'}}href="#">Forgot Password?</a>
      </div>
      <label className="checkbox-label" htmlFor="rememberMe">
        <input type="checkbox" placeholder="RememberMe"/>Remember Me
      </label><br></br>
      <Link style={{textDecoration:'none', color:'black'}} to="/dashboard">
      <button
        onClick={handleLogin}
        disabled={isButtonDisabled}>Login
      </button>
      </Link>
      <p>or</p>
      <button className="google-login">Login with Google</button>
      <p className="signup-link" onClick={switchToSignUp}>
        <a style={{textDecoration:'none', color:'black'}} href="#">I'm new.Sign Up</a>
      </p>
    </div>
  );
};

export default LoginForm;