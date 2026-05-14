import React, { useState } from 'react';
import './login.css';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');

    const API_URL = 'http://localhost:5000';

    const handleSubmit = async (e) => {
        e.preventDefault();
        const endpoint = isLogin ? '/login' : '/signup';

        try {
            const response = await fetch(`${API_URL}${endpoint}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await response.json();

            if (response.ok) {
                setMessage(isLogin ? "Login Successful!" : "Account Created! Please Login.");
                if (isLogin) {
                    // Redirect or store token logic here
                    window.location.href = '/admin';
                }
            } else {
                setMessage(data.message);
            }
        } catch (error) {
            setMessage("Connection error. Is the backend running?");
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h1 className="brand-logo">J.</h1>
                <h2>{isLogin ? 'SIGN IN' : 'CREATE ACCOUNT'}</h2>
                <p className="subtitle">Please enter your details to continue</p>

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

                {message && <p className="feedback-msg">{message}</p>}

                <p className="toggle-text" onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
                </p>
            </div>
        </div>
    );
};

export default Login;