import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";

import HomePage from "./pages/homepage";
import Login from "./pages/login";
import SignUp from "./pages/Signup";
import Profile from "./pages/profile";


import Dashboard from "./pages/dashboard";
import Messages from "./pages/messages";
import Alerts from "./pages/Alerts";

function Navigation() {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#eee" }}>
      <Link to="/signup" style={{ marginRight: "10px" }}>Sign Up</Link>
      <Link to="/login" style={{ marginRight: "10px" }}>Login</Link>
      <Link to="/profile" style={{ marginRight: "10px" }}>Profile</Link>
      <Link to="/home">Home</Link>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
      
        <Route path="/" element={<Navigate to="/signup" />} />

       
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<HomePage />} />


     <Route path="/dashboard" element={<Dashboard />} />
     <Route path="/messages" element={<Messages />} />
    <Route path="/alerts" element={<Alerts />} />

      </Routes>
    </Router>
  );
}

export default App;

