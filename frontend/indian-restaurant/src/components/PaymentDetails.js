import React from 'react';
import './App-N.css'; // Make sure to import the same CSS file for consistent styling

const PaymentDetails = () => {
  return (
    <div className="container payment-details"> {/* Use container class for uniform styling */}
      <h2>Payment Details</h2>
      <p>You can save your card or add another card.</p>
      <p>Currently saved card: **** **** **** 1234</p>
      <button className="btn-primary">Add New Card</button>
    </div>
  );
};

export default PaymentDetails;
