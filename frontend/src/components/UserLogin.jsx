import { Link } from 'react-router-dom';

export default function UserLogin() {
  return (
    <div className="auth-container">
      <h2 className="auth-title">User Login</h2>
      <form>
        <div className="form-group">
          <input 
            type="email" 
            className="input-field" 
            placeholder="Email Address" 
            id="email"
          />
        </div>
        <div className="form-group">
          <input 
            type="password" 
            className="input-field" 
            placeholder="Password" 
            id="password"
          />
        </div>
        <button type="submit" className="submit-btn">Login</button>
      </form>
      <Link to="/user/register" className="auth-link">Don't have an account? Register</Link>
    </div>
  );
}