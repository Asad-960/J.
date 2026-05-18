import React, { useState } from 'react';
import './login.css';

/**
 * Login Component
 * 
 * Handles user authentication including both sign-in and registration flows.
 * It manages form state, toggles between login/signup modes, and communicates
 * with the backend API to authenticate credentials or create new accounts.
 */
const Login = () => {
    // State to toggle between 'Login' and 'Create Account' modes
    const [isLogin, setIsLogin] = useState(true);
    
    // State to hold the current form input values
    const [formData, setFormData] = useState({ email: '', password: '' });
    
    // State to display feedback messages from the server (success or error)
    const [message, setMessage] = useState('');

    // Backend API URL
    const API_URL = 'http://localhost:5000';

    /**
     * Handles the form submission event.
     * Prevents default page reload, constructs the appropriate API endpoint,
     * and sends the form data to the backend.
     * 
     * @param {Event} e - The form submission event
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Determine the correct endpoint based on current mode
        const endpoint = isLogin ? '/login' : '/signup';

        try {
            const response = await fetch(`${API_URL}${endpoint}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await response.json();

            // Handle successful authentication or registration
            if (response.ok) {
                setMessage(isLogin ? "Login Successful!" : "Account Created! Please Login.");
                
                // If logging in, redirect the user to the admin panel
                if (isLogin) {
                    window.location.href = '/adminpanel';
                }
            } else {
                // Display error message returned by the server
                setMessage(data.message);
            }
        } catch (error) {
            // Handle network errors or server downtime
            setMessage("Connection error. Is the backend running?");
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                {/* Branding & Header */}
                <h1 className="brand-logo">J.</h1>
                <h2>{isLogin ? 'SIGN IN' : 'CREATE ACCOUNT'}</h2>
                <p className="subtitle">Please enter your details to continue</p>

                {/* Authentication Form */}
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Email Address</label>
                        <input
                            type="email"
                            required
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                    </div>
                    
                    <div className="input-group">
                        <label>Password</label>
                        <input
                            type="password"
                            required
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        />
                    </div>

                    <button type="submit" className="primary-btn">
                        {isLogin ? 'LOG IN' : 'REGISTER'}
                    </button>
                </form>

                {/* Conditional rendering for server feedback messages */}
                {message && <p className="feedback-msg">{message}</p>}

                {/* Toggle link to switch modes */}
                <p className="toggle-text" onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
                </p>
            </div>
        </div>
    );
};

export default Login;
