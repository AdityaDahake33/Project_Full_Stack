import { Link } from 'react-router-dom';

export default function FoodPartnerLogin() {
  return (
    <div className="auth-container">
      <h2 className="auth-title">Food Partner Login</h2>
      <form>
        <div className="form-group">
          <input 
            type="email" 
            className="input-field" 
            placeholder="Business Email" 
            id="businessEmail"
          />
        </div>
        <div className="form-group">
          <input 
            type="password" 
            className="input-field" 
            placeholder="Password" 
            id="partnerPassword"
          />
        </div>
        <button type="submit" className="submit-btn">Login</button>
      </form>
      <Link to="/food-partner/register" className="auth-link">Don't have an account? Register</Link>
    </div>
  );
}