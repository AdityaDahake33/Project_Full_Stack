import React from 'react'
import Login from '../components/auth/UserLogin'
import Register from '../components/auth/UserRegister'
import FoodPartnerLogin from '../components/auth/PartnerLogin'
import FoodPartnerRegister from '../components/auth/PartnerRegister'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../components/general/Home'
import CreateFood from '../components/food-partner/CreateFood'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/register" element={<Register />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/food-partner/register" element={<FoodPartnerRegister />} />
        <Route path="/food-partner/login" element={<FoodPartnerLogin />} />
        <Route path="/Create-food" element={<CreateFood />} />

      </Routes>
    </Router>
  )
}

export default AppRouter