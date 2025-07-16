import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './modules/common/Login';
import Register from './modules/common/Register';
import Home from './modules/common/Home';
import AdminHome from './modules/admin/AdminHome';
import OwnerHome from './modules/user/Owner/OwnerHome';
import RenterHome from './modules/user/renter/RenterHome';
import ProtectedRoute from './ProtectedRoute';
import Navbar from './components/Navbar';

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<ProtectedRoute role="admin"><AdminHome /></ProtectedRoute>} />
        <Route path="/owner" element={<ProtectedRoute role="owner"><OwnerHome /></ProtectedRoute>} />
        <Route path="/renter" element={<ProtectedRoute role="renter"><RenterHome /></ProtectedRoute>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
