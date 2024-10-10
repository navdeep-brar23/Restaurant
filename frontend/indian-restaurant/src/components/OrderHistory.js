import React from 'react';
import './App-N.css'; // Make sure to import the same CSS file for consistent styling

const OrderHistory = () => {
  const orders = [
    { id: 1, item: 'Butter Chicken', date: '2024-09-25', amount: '$12.99' },
    { id: 2, item: 'Paneer Tikka', date: '2024-09-24', amount: '$10.99' },
  ];

  return (
    <div className="container order-history"> {/* Use container class for uniform styling */}
      <h2>Order History</h2>
      <ul className="order-list"> {/* Added class for styling */}
        {orders.map(order => (
          <li key={order.id} className="order-item"> {/* Added class for individual item styling */}
            {order.item} - {order.date} - {order.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;
