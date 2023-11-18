import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Fetch user data from the backend
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/admin/users');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>User Data:</h2>
      <ul>
        {userData.map((user) => (
          <li key={user.id}>
            {user.firstname} {user.lastname} - {user.email}
          </li>
        ))}
      </ul>
      {/*more admin dashboard components*/}
    </div>
  );
};

export default AdminDashboard;
