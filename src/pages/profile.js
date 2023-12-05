// // import React, { useState,useEffect} from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import { useNavigate} from 'react-router-dom';
// // import Cookies from 'js-cookie';
// // import { jwtDecode } from 'jwt-decode';
// // import axios from 'axios';
// // import './pages.css';

// // function Profile({showModal, closeModal}) {
// // const navigate = useNavigate();
// // const [userID, setUserId] = useState('');
// // const [firstname, setFirstname] = useState('');
// // const [lastname,setLastname]=useState('');
// // const [email,setEmail]=useState('');
// // const [password,setPassword]=useState('');
// // //! const [session,setSession]=useState('booked');//default value
// // //! add session

// // const handleCloseModal = () => {
// //   closeModal();
// // };

// // //event handling funcs
// // const handleFirstnameChange = (event) => {
// //   setFirstname(event.target.value);
// // };
// // const handleLastnameChange = (event) => {
// //   setLastname(event.target.value);
// // };
// // const handleEmailChange = (event) => {
// //   setEmail(event.target.value);
// // };
// // const handlePasswordChange = (event) => {
// //   setPassword(event.target.value);
// // };
// // // const handleSessionChange = (event) => {
// // //   setSession(event.target.value);
// // // };

// // useEffect(() => {
// //   const token = Cookies.get('token');
// //   const decodedToken = jwtDecode(token);
// //   setUserId(decodedToken.id);

// //   const fetchUserDetails = async () => {
// //     try {
// //       const Cookies = Cookies.userID;
// //       const response = await axios.get('http://localhost:4000/user/profile', {
// //         headers: {
// //           Authorization: `Bearer ${Cookies}`, //token retrieval logic
// //         },
// //       });

// //       const userData = response.data.user; 
// //       setFirstname(userData.firstname);
// //       setLastname(userData.lastname);
// //       setEmail(userData.email);
// //       setPassword(userData.password);
// //       // setSession(userData.session);
// //       console.log('Stored Token:', Cookies);
// //     } catch (error) {
// //       console.error('Error fetching user details:', error);
// //     }
// //   };

// //   fetchUserDetails();
// // }, [cookies.userID]); // Empty dependency array ensures this effect runs once when the component mounts

// // const handleEditProfile = async () => {
// //   try {
// //     const Cookies = Cookies.userID;
// //     const response = await axios.put('http://localhost:4000/user/editProfile', {
// //       firstname,lastname,email,password},
// //       {
// //         headers: {
// //           Authorization: `Bearer ${Cookies.get('token')}`,
// //         },});
// //     console.log(response.data);
// //     alert('Profile update successful');
// //   }catch (error) {
// //     console.error('Error updating user details:', error);
// //     alert('error updating profile');
// //   }};

// //   const handleReservationCancelling = async () => {
// //     try {
// //       const response = await axios.delete('http://localhost:4000/car/cancelReservation');
// //       console.log(response.data);
// //     } catch (error) {
// //       console.error('Error logging out:', error);
// //     }
// //   };

// //   const handleLogout = async () => {
// //     try {
// //       const response = await axios.delete('http://localhost:4000/user/logout');
// //       localStorage.removeItem('userID');
// //       console.log(response.data);
// //       navigate('/');
// //     } catch (err) {
// //       console.log(err.message);
// //     }
// //   };

// //   return (
// //       showModal && (
// //         <div className="modal">
// //           <div className="modal-content">
// //             <span className="close" onClick={handleCloseModal}>&times;</span>
// //             <h2>Edit Profile</h2>
// //             <form>
// //               <label htmlFor="firstname">Firstname:</label>
// //               <input type="text" id="firstname" value={firstname} onChange={handleFirstnameChange}/><br />

// //               <label htmlFor="lastname">Lastname:</label>
// //               <input type="text" id="lastname" value={lastname} onChange={handleLastnameChange}/><br />

// //               <label htmlFor="email">Email:</label>
// //               <input type="email" id="email" value={email} onChange={handleEmailChange}/><br />

// //               <label htmlFor="password">Password:</label> 
// //               <input type="password" id="password" value={password} onChange={handlePasswordChange}/><br />
 
// //               {/* <label htmlFor="session">Session:</label>
// //               <input type="text" id="session" value={session} onChange={handleSessionChange}/><br/> */}

// //               <div style={{ display: 'flex', justifyContent: 'space-between' }}>
// //                 <button style={{ width: '70px' }} type="button" onClick={handleEditProfile}>Edit</button>
// //                 <button style={{ width: '150px', height: '60px' }} type="button" onClick={handleReservationCancelling}>Cancel Reservation</button>
// //                 <button style={{ width: '100px' }} type="button" onClick={handleLogout}>Logout</button>
// //               </div>


// //             </form>
// //           </div>
// //         </div>
// //       )
// //   );
// // }

// // export default Profile;













// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie';
// import { jwtDecode } from 'jwt-decode';
// import axios from 'axios';
// import './pages.css'; 

// function Profile({ showModal, closeModal }) {
//   const navigate = useNavigate();
//   const [userID, setUserId] = useState('');
//   const [firstname, setFirstname] = useState('');
//   const [lastname, setLastname] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleCloseModal = () => {
//     closeModal();
//   };

//   // Event handling funcs
//   const handleFirstnameChange = (event) => {
//     setFirstname(event.target.value);
//   };

//   const handleLastnameChange = (event) => {
//     setLastname(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   useEffect(() => {
//     const token = Cookies.get('token');
//     if (token) {
//     const decodedToken = jwtDecode(token);
//     setUserId(decodedToken.id);

//     const fetchUserDetails = async () => {
//       try {
//         const response = await axios.get('http://localhost:4000/user/profile', {
//           headers: {
//             Authorization: `Bearer ${token}`, // Use token directly
//           },
//         });

//         const userData = response.data.user;
//         setFirstname(userData.firstname);
//         setLastname(userData.lastname);
//         setEmail(userData.email);
//         setPassword(userData.password);
//         console.log('Stored Token:', token);
//       } catch (error) {
//         console.error('Error fetching user details:', error);
//       }
//     };

//     fetchUserDetails();
//     },[]});
    

//   const handleEditProfile = async () => {
//     try {
//       const token = Cookies.get('token');
//       const response = await axios.put(
//         'http://localhost:4000/user/editProfile',
//         {
//           firstname,
//           lastname,
//           email,
//           password,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log(response.data);
//       alert('Profile update successful');
//     } catch (error) {
//       console.error('Error updating user details:', error);
//       alert('Error updating profile');
//     }
//   };

//   const handleReservationCancelling = async () => {
//     try {
//       const response = await axios.delete('http://localhost:4000/car/cancelReservation');
//       console.log(response.data);
//     } catch (error) {
//       console.error('Error cancelling reservation:', error);
//     }
//   };

//   const handleLogout = async () => {
//     try {
//       const response = await axios.delete('http://localhost:4000/user/logout');
//       Cookies.remove('token'); // Clear the token
//       console.log(response.data);
//       navigate('/');
//     } catch (err) {
//       console.log(err.message);
//     }
//   };

//   return (
//     showModal && (
//       <div className="modal">
//         <div className="modal-content">
//           <span className="close" onClick={handleCloseModal}>
//             &times;
//           </span>
//           <h2>Edit Profile</h2>
//           <form>
//             <label htmlFor="firstname">Firstname:</label>
//             <input type="text" id="firstname" value={firstname} onChange={handleFirstnameChange} /><br />

//             <label htmlFor="lastname">Lastname:</label>
//             <input type="text" id="lastname" value={lastname} onChange={handleLastnameChange} /><br />

//             <label htmlFor="email">Email:</label>
//             <input type="email" id="email" value={email} onChange={handleEmailChange} /><br />

//             <label htmlFor="password">Password:</label>
//             <input type="password" id="password" value={password} onChange={handlePasswordChange} /><br />

//             <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//               <button style={{ width: '70px' }} type="button" onClick={handleEditProfile}>
//                 Edit
//               </button>
//               <button style={{ width: '150px', height: '60px' }} type="button" onClick={handleReservationCancelling}>
//                 Cancel Reservation
//               </button>
//               <button style={{ width: '100px' }} type="button" onClick={handleLogout}>
//                 Logout
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     )
//   );
// }

// export default Profile;







import React, { useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
import './pages.css';

function Profile({showModal, closeModal}) {
const navigate = useNavigate();
const [firstname, setFirstname] = useState('');
const [lastname,setLastname]=useState('');
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const [session,setSession]=useState('booked');//default value

const handleCloseModal = () => {
  closeModal();
};

useEffect(() => {
  const fetchUserDetails = async () => {
    try {
      const storedTokenKey = localStorage.getItem('userID');
      const response = await axios.get('http://localhost:4000/user/profile', {
        headers: {
          Authorization: `Bearer ${storedTokenKey}`, //actual token retrieval logic
        },
      });

      const userData = response.data.user; 
      setFirstname(userData.firstname);
      setLastname(userData.lastname);
      setEmail(userData.email);
      setPassword(userData.password);
      setSession(userData.session);
      console.log('Stored Token:', storedTokenKey);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  fetchUserDetails();
}, []); // Empty dependency array ensures this effect runs once when the component mounts

//event handling funcs
const handleFirstnameChange = (event) => {
  setFirstname(event.target.value);
};

const handleLastnameChange = (event) => {
  setLastname(event.target.value);
};

const handleEmailChange = (event) => {
  setEmail(event.target.value);
};

const handlePasswordChange = (event) => {
  setPassword(event.target.value);
};

const handleSessionChange = (event) => {
  setSession(event.target.value);
};

const handleEditProfile = async () => {
  try {
    const storedTokenKey = localStorage.getItem('yourStoredTokenKey');
    const response = await axios.put('http://localhost:4000/user/editProfile', {
      firstname,lastname,email,password,session,},
      {
        headers: {
          Authorization: `Bearer ${storedTokenKey}`,
        },});
    console.log(response.data);
    alert('Profile update successful');
  }catch (error) {
    console.error('Error updating user details:', error);
    alert('error updating profile');
  }};

  const handleReservationCancelling = async () => {
    try {
      const response = await axios.delete('http://localhost:4000/car/cancelReservation');
      console.log(response.data);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axios.delete('http://localhost:4000/user/logout');
      localStorage.removeItem('userID');
      console.log(response.data);
      navigate('/');
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
      showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>Edit Profile</h2>
            <form>
              <label htmlFor="firstname">Firstname:</label>
              <input type="text" id="firstname" value={firstname} onChange={handleFirstnameChange}/><br />

              <label htmlFor="lastname">Lastname:</label>
              <input type="text" id="lastname" value={lastname} onChange={handleLastnameChange}/><br />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" value={email} onChange={handleEmailChange}/><br />

              <label htmlFor="password">Password:</label>
              <input type="password" id="password" value={password} onChange={handlePasswordChange}/><br />

              <label htmlFor="session">Session:</label>
              <input type="text" id="session" value={session} onChange={handleSessionChange}/><br/>
 
              <button style={{marginLeft:'10px', width:'100px'}} type="button"
              onClick={handleEditProfile}>Edit</button>
              <button style={{marginLeft:'10px', width:'100px'}} type="button"
              onClick={handleReservationCancelling}>Cancel Reservation</button>
              <button style={{ width:'100px'}} type="button"
              onClick={handleLogout}>Logout</button>
            </form>
          </div>
        </div>
      )
  );
}

export default Profile;