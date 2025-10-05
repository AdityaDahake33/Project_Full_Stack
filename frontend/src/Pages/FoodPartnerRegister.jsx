import React from 'react';
import '../index.css';

const FoodPartnerRegister = () => {
  return (
    <div className="container">
      <div className="form-card">
        <h2>Food Partner Register</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit" className="btn-primary">Register</button>
        </form>
      </div>
    </div>
  );
};

export default FoodPartnerRegister;