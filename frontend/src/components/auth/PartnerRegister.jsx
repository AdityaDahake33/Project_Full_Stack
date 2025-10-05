import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../styles/auth.css';

const PartnerRegister = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const formData = {
        BusinessName: e.target.businessName.value,
        BusinessEmail: e.target.businessEmail.value,
        BusinessPassword: e.target.password.value,
        BusinessPhone: parseInt(e.target.businessPhone.value), // Convert to number
        BusinessAddress: e.target.businessAddress.value,
        BusinessCity: e.target.businessCity.value,
        BusinessState: e.target.businessState.value
      };

      // Updated endpoint to match backend routes
      const response = await axios.post('http://localhost:3000/api/auth/foodpartner/register', formData, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        }
      });

      console.log('Registration successful:', response.data);
      navigate('/partner/login');
    } catch (error) {
      console.error('Registration error:', error.response?.data || error.message);
      setError(error.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">Partner Registration</h1>
          <p className="auth-subtitle">Join our network of restaurants</p>
        </div>

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="businessName" className="form-label">Business Name</label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              className="form-input"
              placeholder="Enter business name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="businessEmail" className="form-label">Business Email</label>
            <input
              type="email"
              id="businessEmail"
              name="businessEmail"
              className="form-input"
              placeholder="Enter business email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="businessPhone" className="form-label">Business Phone</label>
            <input
              type="tel"
              id="businessPhone"
              name="businessPhone"
              className="form-input"
              placeholder="Enter business phone"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="businessAddress" className="form-label">Business Address</label>
            <input
              type="text"
              id="businessAddress"
              name="businessAddress"
              className="form-input"
              placeholder="Enter business address"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="businessCity" className="form-label">City</label>
            <input
              type="text"
              id="businessCity"
              name="businessCity"
              className="form-input"
              placeholder="Enter city"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="businessState" className="form-label">State</label>
            <input
              type="text"
              id="businessState"
              name="businessState"
              className="form-input"
              placeholder="Enter state"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-input"
              placeholder="Create password"
              required
            />
          </div>

          <button type="submit" className="form-button" disabled={loading}>
            {loading ? 'Registering...' : 'Register Business'}
          </button>

          <Link to="/partner/login" className="auth-link">
            Already registered? Sign in
          </Link>
        </form>
      </div>
    </div>
  );
};

export default PartnerRegister;