import { Link } from 'react-router-dom';
import axios from 'axios';






export default function UserRegister() {

const handlerSubmit = async (e) => {
  e.preventDefault();
  const { FullName, Email, Password } = e.target.elements;
  try {
    const response = await axios.post('http://localhost:3000/api/auth/user/register', {
      FullName: FullName.value,
      Email: Email.value,
      Password: Password.value
    });
    console.log(response.data);
  } catch (error) {
    console.error('Registration failed:', error.response.data);
  }
}




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