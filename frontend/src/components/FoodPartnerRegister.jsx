import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function FoodPartnerRegister() {
  const [formData, setFormData] = useState({
    RestaurantName: '',
    BussinessEmail: '',
    Password: '',
    PhoneNumber: '',
    Address: ''
  });

  const [errors, setErrors] = useState({
    RestaurantName: '',
    BussinessEmail: '',
    Password: '',
    PhoneNumber: '',
    Address: ''
  });

  const [submitStatus, setSubmitStatus] = useState({
    loading: false,
    success: false,
    error: ''
  });

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'RestaurantName':
        error = value.trim() === '' ? 'Restaurant name is required' : '';
        break;
      case 'BussinessEmail':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        error = !emailRegex.test(value) ? 'Valid email is required' : '';
        break;
      case 'Password':
        error = value.length < 6 ? 'Password must be at least 6 characters' : '';
        break;
      case 'PhoneNumber':
        const phoneRegex = /^[0-9]{10,15}$/;
        error = !phoneRegex.test(value) ? 'Valid phone number is required (10-15 digits)' : '';
        break;
      case 'Address':
        error = value.trim() === '' ? 'Address is required' : '';
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });

    // Validate field on change
    const error = validateField(id, value);
    setErrors({
      ...errors,
      [id]: error
    });
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate all fields
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      newErrors[key] = error;
      if (error) {
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setSubmitStatus({ loading: true, success: false, error: '' });
      
      try {
        // API endpoint for food partner registration
        const response = await axios.post('/api/food-partner/register', formData);
        
        if (response.data && response.status === 201) {
          setSubmitStatus({
            loading: false,
            success: true,
            error: ''
          });
          
          // Reset form after successful submission
          setFormData({
            RestaurantName: '',
            BussinessEmail: '',
            Password: '',
            PhoneNumber: '',
            Address: ''
          });
          
          // Redirect to login page after 2 seconds
          setTimeout(() => {
            window.location.href = '/food-partner/login';
          }, 2000);
        }
      } catch (error) {
        console.error('Registration error:', error);
        
        setSubmitStatus({
          loading: false,
          success: false,
          error: error.response?.data?.message || 'Registration failed. Please try again.'
        });
      }
    } else {
      console.log('Form has errors');
    }
  };

  return (
    <div className="auth-container">
      <h2 className="auth-title">Food Partner Registration</h2>
      
      {submitStatus.success && (
        <div className="success-message">
          Registration successful! Redirecting to login page...
        </div>
      )}
      
      {submitStatus.error && (
        <div className="error-banner">
          {submitStatus.error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input 
            type="text" 
            className={`input-field ${errors.RestaurantName ? 'input-error' : ''}`}
            placeholder="Restaurant Name" 
            id="RestaurantName"
            value={formData.RestaurantName}
            onChange={handleChange}
            required
            disabled={submitStatus.loading || submitStatus.success}
          />
          {errors.RestaurantName && <div className="error-message">{errors.RestaurantName}</div>}
        </div>
        <div className="form-group">
          <input 
            type="email" 
            className={`input-field ${errors.BussinessEmail ? 'input-error' : ''}`}
            placeholder="Business Email" 
            id="BussinessEmail"
            value={formData.BussinessEmail}
            onChange={handleChange}
            required
            disabled={submitStatus.loading || submitStatus.success}
          />
          {errors.BussinessEmail && <div className="error-message">{errors.BussinessEmail}</div>}
        </div>
        <div className="form-group">
          <input 
            type="password" 
            className={`input-field ${errors.Password ? 'input-error' : ''}`}
            placeholder="Password" 
            id="Password"
            value={formData.Password}
            onChange={handleChange}
            required
            disabled={submitStatus.loading || submitStatus.success}
          />
          {errors.Password && <div className="error-message">{errors.Password}</div>}
        </div>
        <div className="form-group">
          <input 
            type="tel" 
            className={`input-field ${errors.PhoneNumber ? 'input-error' : ''}`}
            placeholder="Phone Number" 
            id="PhoneNumber"
            value={formData.PhoneNumber}
            onChange={handleChange}
            required
            disabled={submitStatus.loading || submitStatus.success}
          />
          {errors.PhoneNumber && <div className="error-message">{errors.PhoneNumber}</div>}
        </div>
        <div className="form-group">
          <input 
            type="text" 
            className={`input-field ${errors.Address ? 'input-error' : ''}`}
            placeholder="Address" 
            id="Address"
            value={formData.Address}
            onChange={handleChange}
            required
            disabled={submitStatus.loading || submitStatus.success}
          />
          {errors.Address && <div className="error-message">{errors.Address}</div>}
        </div>
        <button 
          type="submit" 
          className={`submit-btn ${submitStatus.loading ? 'loading' : ''}`}
          disabled={submitStatus.loading || submitStatus.success}
        >
          {submitStatus.loading ? 'Registering...' : 'Register'}
        </button>
      </form>
      <Link to="/food-partner/login" className="auth-link">Already have an account? Login</Link>
    </div>
  );
}