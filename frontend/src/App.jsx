import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLogin from './components/auth/UserLogin';
import UserRegister from './components/auth/UserRegister';
import PartnerLogin from './components/auth/PartnerLogin';
import PartnerRegister from './components/auth/PartnerRegister';
import Home from '../src/general'; // Create this component
import './styles/theme.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/partner/login" element={<PartnerLogin />} />
        <Route path="/partner/register" element={<PartnerRegister />} />
      </Routes>
    </Router>
  );
};

export default App;