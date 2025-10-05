import React from 'react';
import '../index.css';

const FoodPartnerLogin = () => {
  return (
    <div className="container">
      <div className="form-card">
        <h2>Food Partner Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit" className="btn-primary">Login</button>
        </form>
      </div>
    </div>
  );
};

export default FoodPartnerLogin;