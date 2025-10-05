import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/auth.css';

const UserLogin = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Sign in to continue your food journey</p>
        </div>

        <form>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-input"
              placeholder="Enter your email"
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

          <Link to="/register" className="auth-link">
            Don't have an account? Create one
          </Link>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;