import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import MainPage from './MainPage';

function App() {
    const [currentView, setCurrentView] = useState('main'); // Set initial view to 'main'

    // Switch to the Register page
    const handleSwitchToRegister = () => {
        setCurrentView('register');
    };

    // Switch to the Login page
    const handleSwitchToLogin = () => {
        setCurrentView('login');
    };

    // Switch to the Forgot Password page
    const handleSwitchToForgotPassword = () => {
        setCurrentView('forgotPassword');
    };

    // Go to Login from the Main page
    const handleLoginClick = () => {
        setCurrentView('login');
    };

    return (
        <div className="App">
            {/* Display MainPage component*/}
            {currentView === 'main' && <MainPage onLogin={handleLoginClick} />}

            {/* Display Login component  */}
            {currentView === 'login' && <Login onSwitchToRegister={handleSwitchToRegister} onSwitchToForgotPassword={handleSwitchToForgotPassword} onBack={() => setCurrentView('main')} />}

            {/* Display Register component  */}
            {currentView === 'register' && <Register onSwitchToLogin={handleSwitchToLogin} />}

            {/* Display ForgotPassword component  */}
            {currentView === 'forgotPassword' && <ForgotPassword onSwitchToLogin={handleSwitchToLogin} />}
        </div>
    );
}

export default App;
