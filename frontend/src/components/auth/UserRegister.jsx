import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../styles/auth.css';

const UserRegister = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const formData = {
        FirstName: e.target.firstName.value,
        LastName: e.target.lastName.value,
        email: e.target.email.value,
        password: e.target.password.value
      };

      const response = await axios.post('http://localhost:3000/api/auth/user/register', formData);
      navigate('/');
    } catch (err) {
      console.error('Registration error:', err);
      
      if (err.response) {
        // Server responded with error
        console.error('Server error:', err.response.data);
        setError(err.response.data.message || 'Registration failed. Please try again.');
      } else if (err.request) {
        // Request made but no response
        console.error('No response from server');
        setError('Cannot connect to server. Please try again later.');
      } else {
        // Request setup error
        console.error('Request error:', err.message);
        setError('An error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">Create Account</h1>
          <p className="auth-subtitle">Join to explore amazing food</p>
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">First Name</label>
            <input
              type="text"
              name="firstName"
              className="form-input"
              placeholder="Enter your first name"
              required
              autoFocus
            />
          </div>

          <div className="form-group">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="form-input"
              placeholder="Enter your last name"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              className="form-input"
              placeholder="Create a password"
              required
              minLength="6"
            />
          </div>

          <button 
            type="submit" 
            className="form-button"
            disabled={loading}
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>

          <Link to="/login" className="auth-link">
            Already have an account? Sign in
          </Link>
        </form>
      </div>
    </div>
  );
};

export default UserRegister;