// import React, {useState} from "react";
// import SignUpForm from "./signup";
// import LoginForm from "./login";
// import FooTer from "../layouts/footer";
// import { useNavigate } from 'react-router-dom';


// const LogSign =()=>{
//   const navigate = useNavigate();
//   const [showSignUp, setShowSignUp] = useState(true);
  
//   const switchForm = () => {
//   setShowSignUp(!showSignUp);
//   };

//   const handleSignUpSuccess = () => {
//     // Handle successful signup logic here (e.g., API call, state update)
//     // After successful signup, switch to the login form
//     setShowSignUp(false);
//   };

//   const handleLoginSuccess = () => {
//     // Handle successful login logic here (e.g., API call, state update)
//     // After successful login, navigate to the dashboard
//     navigate('/dashboard');
//   };

// return (
//   <div className="app-background">
//     {showSignUp?(
//       <SignUpForm switchToLogin={switchForm} onSuccess={handleSignUpSuccess} />
//     ):(
//       <LoginForm switchToSignUp={switchForm} onSuccess={handleLoginSuccess} />
//     )}
//     <FooTer/>
//   </div>
// );
// };

// export default LogSign;



import React, {useState} from "react";
import SignUpForm from "./signup";
import LoginForm from "./login"
import FooTer from "../layouts/footer";
import NavBar from "../layouts/navbar";

const LogSign =()=>{

  const [showLogIn, setShowLogIn] = useState(false);
  
  const switchForm = () => {
  setShowLogIn(!showLogIn);
};

return (
  <div className="app-background">
    {showLogIn?(
      <LoginForm switchToSignUp={switchForm} />
    ):(
      <SignUpForm switchToLogin={switchForm} />
    )}
    <FooTer/>
    <NavBar/>
  </div>
);
};

export default LogSign;