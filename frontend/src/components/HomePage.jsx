import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Food App</h1>
      <p className="home-subtitle">Your favorite food, delivered fast</p>
      
      <div className="registration-cta">
        <h2 className="registration-title">Join Our Platform Today</h2>
        <div className="registration-buttons">
          <Link to="/user/register" className="registration-button user">Register as User</Link>
          <Link to="/food-partner/register" className="registration-button partner">Register as Food Partner</Link>
        </div>
      </div>
      
      <div className="auth-options">
        <div className="auth-option-group">
          <h2 className="auth-option-title">For Users</h2>
          <p className="auth-option-description">Order your favorite food from local restaurants</p>
          <div className="auth-option-buttons">
            <Link to="/user/login" className="auth-option-button">Login</Link>
            <Link to="/user/register" className="auth-option-button">Register</Link>
          </div>
        </div>
        
        <div className="auth-option-group">
          <h2 className="auth-option-title">For Food Partners</h2>
          <p className="auth-option-description">Grow your business by reaching more customers</p>
          <div className="auth-option-buttons">
            <Link to="/food-partner/login" className="auth-option-button">Login</Link>
            <Link to="/food-partner/register" className="auth-option-button">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}