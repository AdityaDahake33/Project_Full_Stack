import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLogin from './components/auth/UserLogin';
import UserRegister from './components/auth/UserRegister';
import PartnerLogin from './components/auth/PartnerLogin';
import PartnerRegister from './components/auth/PartnerRegister';
import Home from './components/general/Home';
import CreateFood from './components/food-partner/CreateFood';
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
        <Route path="/Create-food" element={<CreateFood />} />
      </Routes>
    </Router>
  );
};

export default App;