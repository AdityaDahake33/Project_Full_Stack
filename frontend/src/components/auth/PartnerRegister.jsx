import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import '../../styles/auth.css';

const PartnerRegister = () => {
  return (
    <div className="auth-container">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">Partner Registration</h1>
          <p className="auth-subtitle">Join our restaurant network</p>
        </div>

        <form>
          <div className="form-group">
            <label className="form-label">Business Name</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter business name"
              autoFocus
            />
          </div>

          <div className="form-group">
            <label className="form-label">Business Email</label>
            <input
              type="email"
              className="form-input"
              placeholder="Enter business email"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Business Phone</label>
            <input
              type="tel"
              className="form-input"
              placeholder="Enter business phone"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Business Address</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter complete address"
            />
          </div>

          <div className="form-group">
            <label className="form-label">City</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter city"
            />
          </div>

          <div className="form-group">
            <label className="form-label">State</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter state"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-input"
              placeholder="Create a password"
            />
          </div>

          <button type="submit" className="form-button">
            Register Business
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