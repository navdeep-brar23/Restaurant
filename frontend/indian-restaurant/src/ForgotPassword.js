import React, { useState } from 'react';
import './ForgotPassword.css'; // Import the CSS for styling

const ForgotPassword = ({ onSwitchToLogin }) => {
    const [username, setUsername] = useState(''); // Storing username input
    const [newPassword, setNewPassword] = useState(''); // Storing new password input
    const [confirmPassword, setConfirmPassword] = useState(''); // Storing password confirmation
    const [message, setMessage] = useState(''); // Storing success/error messages

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validation to check if fields are filled
        if (!username || !newPassword || !confirmPassword) {
            setMessage({ text: 'All fields are required.', type: 'error' });
            return;
        }

        // Check if passwords match
        if (newPassword !== confirmPassword) {
            setMessage({ text: 'Passwords do not match.', type: 'error' });
            return;
        }

        try {
            //  API call to reset the password
            const response = await fetch('https://your-api-url.com/api/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    newPassword,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to reset password');
            }

            const data = await response.json();
            setMessage({ text: 'Password has been reset successfully.', type: 'success' });

            // Redirect to login 
            setTimeout(onSwitchToLogin, 2000);
        } catch (error) {
            setMessage({ text: error.message, type: 'error' });
        }
    };

    return (
        <div className="forgot-container">
            <div className="forgot-image">
                {/* Display image  */}
                <img src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Forgot Password Visual" />
            </div>
            <div className="form-container">
                {/*  Resetting password from*/}
                <h1>Reset Password</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="newPassword">New Password</label>
                        <input
                            type="password"
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                            placeholder="Enter your new password"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirmPassword">Confirm New Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            placeholder="Confirm your new password"
                        />
                    </div>
                    <button type="submit">Reset Password</button>
                    {/* Display success or error message */}
                    {message && <div className={`message ${message.type}`}>{message.text}</div>}
                </form>
                {/* Link to switch back to login page */}
                <p>Remembered your password? <a href="#" onClick={onSwitchToLogin}>Login here</a></p>
            </div>
        </div>
    );
};

export default ForgotPassword;
