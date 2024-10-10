import React from 'react';
import './App-N.css';

const Sidebar = ({ onNavigate, onBackToMenu }) => {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <button onClick={() => onNavigate('profile')}>User Profile</button>
      <button onClick={() => onNavigate('orderHistory')}>Order History</button>
      <button onClick={() => onNavigate('paymentDetails')}>Payment Details</button>
      <button onClick={() => onNavigate('changePassword')}>Change Password</button>
      <button onClick={onBackToMenu}>Back to Menu</button> {/* Updated to use the prop */}
    </div>
  );
};

export default Sidebar;
