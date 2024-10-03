import React, { useState } from 'react';
import './Register.css'; // Import the CSS for styling

const Register = ({ onSwitchToLogin }) => {
    // State variables for form fields and message
    const [username, setUsername] = useState(''); //  Username input
    const [email, setEmail] = useState(''); // Email input
    const [password, setPassword] = useState(''); // Password input
    const [confirmPassword, setConfirmPassword] = useState(''); // Password confirmation
    const [message, setMessage] = useState(''); // Displaying messages

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); 

        // Validation for empty fields
        if (!username || !email || !password || !confirmPassword) {
            setMessage('All fields are required.'); // Set error message
            return; // Exit function
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            setMessage('Passwords do not match.'); // Set error message
            return; 
        }

        setMessage('Registration successful!'); // Set success message

        // Redirect to login after a brief delay
        setTimeout(() => {
            onSwitchToLogin(); // Switch to login
        }, 1500); // Redirects after 1.5 seconds
    };

    return (
        <div className="register-container">
            <div className="register-image">
                
                <img src="https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Register Visual" />
            </div>
            <div className="form-container">
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    {/* Input field for username */}
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
                    {/* Input field for email */}
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Update email state
                            required
                            placeholder="Enter your email"
                        />
                    </div>
                    {/* Input field for password */}
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // Update password state
                            required
                            placeholder="Enter your password"
                        />
                    </div>
                    {/* Input field for confirming password */}
                    <div className="input-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)} // Update confirm password state
                            required
                            placeholder="Confirm your password"
                        />
                    </div>
                    <button type="submit">Register</button> {/* Submit button for the form */}
                    {message && <div className={`message`}>{message}</div>} {/* Display message if it exists */}
                </form>
                {/* Switch to the login page */}
                <p>Already have an account? <a href="#" onClick={onSwitchToLogin}>Login here</a></p>
            </div>
        </div>
    );
};

export default Register; 
