import React, { useState } from 'react';
import './Login.css'; // Import CSS for styling

const Login = ({ onSwitchToRegister, onSwitchToForgotPassword, onBack }) => {
    // State variables for username, password, and message
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Fake credentials
        const fakeUsername = 'Barinder';
        const fakePassword = 'Barinder123';

        // Check if input matches fake credentials
        if (username === fakeUsername && password === fakePassword) {
            setMessage('Login successful!');
        } else {
            setMessage('Invalid username or password.');
        }
    };

    return (
        <div className="login-container">
            <div className="login-image">
                <img 
                    src="https://img.freepik.com/free-photo/top-view-fresh-delicious-chinese-food-dark-background_24972-2170.jpg?w=996&t=st=1727752454~exp=1727753054~hmac=2804ba8019ce58d1d59a1e62d114ea83f47eb198c215b42932636f3c2bb553bc" 
                    alt="Login"
                /> 
            </div>
            <div className="form-container">
                <h1>Login</h1> {/* Title for the form */}
                
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Username or Email</label> {/* Label for username */}
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            placeholder="Enter your username or email"
                        /> {/* Input field for username */}
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label> {/* Label for password */}
                       
                       {/* Input field for password */}
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter your password"
                        /> 
                    </div>
                    <button type="submit" className="button-margin">Login</button> {/* Login button */}
                    <button type="button" onClick={onBack} className="button-margin">Back</button> {/* Back Button */}
                    {message && <div className="message">{message}</div>} {/* Display message */}
                </form>
                <p><a href="#" onClick={onSwitchToForgotPassword}>Forgot Password?</a></p> {/* Link to forgot password */}
                <p>Don't have an account? <a href="#" onClick={onSwitchToRegister}>Register here</a></p> {/* Link to register */}
            </div>
        </div>
    );
};

export default Login;
