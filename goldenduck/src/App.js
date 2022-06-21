import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './components/navbar/nav';
import Home from './pages/Home/Home.jsx';
import Login from './pages/Login/login';

export default function App() {
    return(
      <Router>
          <Routes>
            <Route path="*" element={<h1>No lo encontré, bro</h1>} />
            <Route path="/" element={<Home/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Register" element={<h1>Register</h1>} />
            <Route path="/Panel" element={<h1>Panel</h1>} />
            <Route path="/Mobile" element={<h1>Mobile</h1>} />
          </Routes>
      </Router>
    )
}
