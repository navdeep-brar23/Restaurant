import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import UserProfile from './components/UserProfile';
import OrderHistory from './components/OrderHistory';
import PaymentDetails from './components/PaymentDetails';
import ChangePassword from './components/ChangePassword';
import './components/App-N.css';

const Profile = ({ onBackToMenu }) => { // Added prop for navigation
  const [activeSection, setActiveSection] = useState('profile');

  const renderSection = () => {
    switch (activeSection) {
      case 'orderHistory':
        return <OrderHistory />;
      case 'paymentDetails':
        return <PaymentDetails />;
      case 'changePassword':
        return <ChangePassword />;
      default:
        return <UserProfile />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar onNavigate={setActiveSection} onBackToMenu={onBackToMenu} /> {/* Pass back to menu function */}
      
      <div className="main-content">
        {renderSection()}
      </div>
    </div>
  );
};

export default Profile;
