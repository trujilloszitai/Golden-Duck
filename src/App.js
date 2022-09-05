import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import $ from 'jquery'

import LOL from './components/LOL/LOL.jsx'; /* LOL */
import NotFound from './pages/NotFound/notFound.jsx';
import Home from './pages/Home/Home.jsx';
import Register from './pages/Register/register.jsx';
import Login from './pages/Login/login.jsx';
import Forget from './pages/Forget/forget.jsx';
import Panel from './pages/Panel/panel.jsx';
import Mobile from './components/mobile/mobile.jsx';

import DarkMode from './utils/darkMode';

export default function App() {
  console.log('%c ¡NO USAR CONSOLA DE COMANDOS A MENOS DE LO QUE SEPAS QUE ESTAS HACIENDO, USAR UN COMANDO EQUIVOCADO PUEDE VULNERAR TU SEGURIDAD, GOLDEN DUCK NO SE HACE RESPONSABLE DE DICHOS ACTOS Y SUS CONSECUENCIAS! ', 'font-size:20px; background: #FF0000; color: #fff');
  console.log('%c ¡NO USAR CONSOLA DE COMANDOS A MENOS DE LO QUE SEPAS QUE ESTAS HACIENDO, USAR UN COMANDO EQUIVOCADO PUEDE VULNERAR TU SEGURIDAD, GOLDEN DUCK NO SE HACE RESPONSABLE DE DICHOS ACTOS Y SUS CONSECUENCIAS! ', 'font-size:20px; background: #FF0000; color: #fff');
  console.log('%c ¡NO USAR CONSOLA DE COMANDOS A MENOS DE LO QUE SEPAS QUE ESTAS HACIENDO, USAR UN COMANDO EQUIVOCADO PUEDE VULNERAR TU SEGURIDAD, GOLDEN DUCK NO SE HACE RESPONSABLE DE DICHOS ACTOS Y SUS CONSECUENCIAS! ', 'font-size:20px; background: #FF0000; color: #fff');
  DarkMode.DarkMode()
  useEffect(() => {
    setTimeout(() => {
      $('#root').addClass('loaded')
      $('.App').css('display', 'block')
    }, 500)
  }, []);
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
