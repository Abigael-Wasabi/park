/* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import './signup.css';


// const SignUpForm = ({ switchToLogin }) => {
//   const navigate = useNavigate();//Initialize useNavigate
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     firstname: '',
//     lastname: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     privacyPolicy: false,
//   });

//   const handlePasswordVisibility = (field) => {
//     console.log(`Toggling visibility for ${field} field`);
//     if (field === 'password') {
//       setShowPassword(!showPassword);
//     } else if (field === 'confirmPassword') {
//       setShowConfirmPassword(!showConfirmPassword);
//     }
//   };

//   const handleInputChange = (event) => {
//     const { name, value, type, checked } = event.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//     console.log(formData);
//   };

//   const isSignUpDisabled = !formData.firstname || !formData.lastname || 
//   !formData.email || !formData.password || !formData.confirmPassword || !formData.privacyPolicy;

//   const handleSignUp = async () => {
//     try {
//       // Prepare user registration data
//       const userData = {
//         firstname: formData.firstname,
//         lastname: formData.lastname,
//         email: formData.email,
//         password: formData.password,
//       };
  
//       // Send a POST request to the registration endpoint
//       const response = await fetch('http://localhost:4000/auth/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),
//       });
  
//       // Handle the response
//       if (response.status === 201) {
//         // User registered successfully
//         const data = await response.json();
//         // Handle the response data (e.g., store user token, redirect, etc.)
//         console.log('User registered:', data);
  
//         // Assuming you want to navigate to a dashboard after successful registration
//         navigate("/dashboard");
//       } else {
//         // Registration failed
//         const errorData = await response.json();
//         console.error('Registration error:', errorData.message);
//       }
//     } catch (error) {
//       console.error('Error registering user:', error);
//     }
//   };

    
//   return (
//     <div className="signup-form">
//       <h2 style={{textAlign:'center'}} className="app-title ">SwiftPark</h2>
//       <label>Firstname</label><br></br>
//       <input type="text" name="firstname" placeholder="Firstname" onChange={handleInputChange} /><br></br>
//       <label>Lastname</label><br></br>
//       <input type="text" name="lastname" placeholder="Lastname" onChange={handleInputChange} /><br></br>
//       <label>Email</label><br></br>
//       <input type="email" name="email" placeholder="Email" onChange={handleInputChange} /><br></br>
//       <label>Password</label><br></br>
//       <div className="password-input">
//         <input 
//           type={showPassword ? 'text' : 'password'} 
//           name="password"
//           placeholder="Password" 
//           onChange={handleInputChange}
//         />
//         <i
//           // className={`password-icon ${showPassword ? 'visible' : ''}`}
//           className='password-icon'
//           onClick={() => handlePasswordVisibility('password')}
//           >
//             <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
//         </i>
//       </div>
//       <label>Confirm Password</label>
//       <div className="password-input">
//         <input 
//           type={showConfirmPassword ? 'text' : 'password'} 
//           name="confirmPassword"
//           placeholder="Confirm Password" 
//           onChange={handleInputChange}/>
//         <i
//           // className={`password-icon ${showConfirmPassword ? 'visible' : ''}`}
//           className='password-icon'
//           onClick={() =>handlePasswordVisibility('confirmPassword')}
//           >
//            <FontAwesomeIcon icon={showConfirmPassword ? faEye : faEyeSlash} /> 
//         </i>
//       </div>
//       <br></br>
//       <div className="privacy-policy">
//         <label className="checkbox-label" htmlFor="privacyPolicy">
//         I Agree with <Link to="/privacy-policy">Privacy and Policy</Link>
//           <input 
//             type="checkbox" 
//             id="privacyPolicy"
//             name="privacyPolicy"
//             checked={formData.privacyPolicy}
//             onChange={handleInputChange}
//           />
          
//         </label>
//       </div>
//       <button className="signup-button" onClick={handleSignUp} 
//       disabled={isSignUpDisabled}>
//         <Link style={{textDecoration:'none', color:'black'}} to="/dashboard">Sign Up</Link>
//       </button>
//       <div className="signup-options">
//         <p>or</p>
//         <button className="google-signup">Sign Up with Google</button>
//         <p className="login-link" onClick={switchToLogin}>I'm a member.<a style={{textDecoration:'none', color:'black'}} href="#">Log in</a></p>
//       </div>
//     </div>
//   );
// };

// export default SignUpForm;




import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate} from 'react-router-dom';
import './signup.css';
// eslint-disable-next-line jsx-a11y/anchor-is-valid

const SignUpForm = ({switchToLogin}) => {
  const navigate = useNavigate();//Initialize useNavigate
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

  //const handleSignUp = () => {
    // Handle signup logic here
  //};

  const handleSignUp = async () => {
    try {
      // Prepare user registration data
      const userData = {
        firstname:firstname,
        lastname:lastname,
        email:email,
        password:password,
      };
      console.log(userData);
  
      // Send a POST request to the registration endpoint
      const response = await fetch('http://localhost:4000/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      // Handle the response
      if (response.status === 201) {
        // User registered successfully
        const data = await response.json();
        // Handle the response data (e.g., store user token, redirect, etc.)
        console.log('User registered:', data);
  
        // Assuming you want to navigate to a dashboard after successful registration
        navigate("/dashboard");
      } else {
        // Registration failed
        const errorData = await response.json();
        console.error('Registration error:', errorData.message);
      }
    } catch (error) {
      console.error('Error registering user:', error);

      // if (error.response){
      //   // The request was made and the server responded with a status code
      //   // that falls out of the range of 2xx
      //   console.error('Server responded with:', error.response.data);
      // }else if (error.request){
      //   // The request was made but no response was received
      //   console.error('No response received from server');
      // }else {
      //   // Something happened in setting up the request that triggered an error
      //   console.error('Error setting up the request:', error.message);
      // }
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
      <p>or</p>
      <button className="google-login">Sign Up with Google</button>
      <p className="signup-link">
        <a style={{textDecoration:'none', color:'black'}} href="#"
        onClick={switchToLogin}>I'm a member.Login</a>
      </p>
    </div>
  );
};

export default SignUpForm;