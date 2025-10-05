import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../styles/auth.css';

const PartnerLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const formData = {
        BusinessEmail: e.target.businessEmail.value,
        BusinessPassword: e.target.password.value
      };

      await axios.post('http://localhost:3000/api/auth/foodpartner/login', formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        }
      });

      navigate('/Create-food');
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
      setError(error.response?.data?.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">Partner Login</h1>
          <p className="auth-subtitle">Access your restaurant dashboard</p>
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="businessEmail" className="form-label">Business Email</label>
            <input
              type="email"
              id="businessEmail"
              name="businessEmail"
              className="form-input"
              placeholder="Enter your business email"
              required
              autoFocus
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="form-button" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>

          <Link to="/partner/register" className="auth-link">
            Don't have a partner account? Register here
          </Link>
        </form>
      </div>
    </div>
  );
};

export default PartnerLogin;

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"></link>