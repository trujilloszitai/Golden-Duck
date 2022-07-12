import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LOL from './components/LOL/LOL.jsx'; /* LOL */
import NotFound from './pages/NotFound/notFound.jsx';
import Home from './pages/Home/Home.jsx';
import Register from './pages/Register/register.jsx';
import Login from './pages/Login/login.jsx';
import Forget from './pages/Forget/forget.jsx';
import Panel from './pages/Panel/panel.jsx';
import Mobile from './components/mobile/mobile.jsx';

export default function App() {
    return(
      <Router>
          <Routes>
            <Route path="/lol" element={<LOL/>} />{/* LOL */}
            <Route path="*" element={<NotFound/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/Register" element={<Register/>} />
            <Route path="/Panel" element={<Panel/>} /> {/* Falta */}
            <Route path="/Mobile" element={<Mobile/>} />
            <Route path="/Forget" element={<Forget/>} />
          </Routes>
      </Router>
    )
}
