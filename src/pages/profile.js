import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pages.css';

function Profile({showModal, closeModal}) {
  const handleCloseModal = () => {
    closeModal();
  };

  return (
      showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>Edit Profile</h2>
            <form>
              <label htmlFor="fullname">Full Name:</label>
              <input type="text" id="fullname" name="fullname" required /><br />

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required /><br />

              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required /><br />

              <label htmlFor="session">Session:</label>
              <select id="session" name="session">
                <option value="booked">Booked</option>
                <option value="parked">Parked</option>
              </select><br />

              <button style={{marginLeft:'10px', width:'100px'}} type="button" id="edit-btn">Edit</button>
              <button style={{ width:'100px'}} type="button" id="logout-btn">Logout</button>
            </form>
          </div>
        </div>
      )
  );
}

export default Profile;