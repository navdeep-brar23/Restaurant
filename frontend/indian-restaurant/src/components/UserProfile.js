import React, { useState } from 'react';
import './App-N.css'; // Ensure you have this unified CSS imported

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: 'Navdeep Singh',
    email: 'navdeep@example.com',
    address: '1234 Main St, Springfield',
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Add functionality to save changes to a server or local storage if needed
    console.log('User Info Updated:', userInfo);
  };

  return (
    <div className="container user-profile"> {/* Use container class for uniform styling */}
      <div className="user-icon">👤</div>
      <h2>{userInfo.username}</h2>
      {isEditing ? (
        <div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={userInfo.email}
              onChange={handleChange}
              placeholder="Email"
              className="form-control" // Add CSS class for uniform styling
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="address"
              value={userInfo.address}
              onChange={handleChange}
              placeholder="Address"
              className="form-control" // Add CSS class for uniform styling
              required
            />
          </div>
          <div className="form-group">
            <button className="btn-primary" onClick={handleSave}>Save</button>
            <button className="btn-primary" onClick={handleEditToggle}>Cancel</button>
          </div>
        </div>
      ) : (
        <div>
          <p>Email: {userInfo.email}</p>
          <p>Address: {userInfo.address}</p>
          <button className="btn-primary" onClick={handleEditToggle}>Edit Profile</button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
