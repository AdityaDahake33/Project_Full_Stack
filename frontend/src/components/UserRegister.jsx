import { Link } from 'react-router-dom';

export default function UserRegister() {
  return (
    <div className="auth-container">
      <h2 className="auth-title">User Registration</h2>
      <form>
        <div className="form-group">
          <input 
            type="text" 
            className="input-field" 
            placeholder="Full Name" 
            id="name"
          />
        </div>
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
        <button type="submit" className="submit-btn">Register</button>
      </form>
      <Link to="/user/login" className="auth-link">Already have an account? Login</Link>
    </div>
  );
}