import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/auth.css';

const PartnerLogin = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">Partner Login</h1>
          <p className="auth-subtitle">Access your restaurant dashboard</p>
        </div>

        <form>
          <div className="form-group">
            <label className="form-label">Business Email</label>
            <input
              type="email"
              className="form-input"
              placeholder="Enter your business email"
              autoFocus
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-input"
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="form-button">
            Sign In
          </button>

          <Link to="/partner/register" className="auth-link">
            Want to become a partner? Register here
          </Link>
        </form>
      </div>
    </div>
  );
};

export default PartnerLogin;

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"></link>