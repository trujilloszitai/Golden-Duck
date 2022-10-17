import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';

import LOL from './components/LOL/LOL.jsx'; /* LOL */
import NotFound from './pages/NotFound/notFound.jsx';
import Home from './pages/Home/Home.jsx';
import Register from './pages/Register/register.jsx';
import Login from './pages/Login/login.jsx';
import Forget from './pages/ForgotPassword/ForgotPassword.jsx';
import ControlPanel from './pages/ControlPanel/ControlPanel.jsx';
import Mobile from './components/mobile/mobile.jsx';
import { Calendar, Editor, Expenses, FixedTerm, Investment, Loan, Money, Payment, Settings, Support, Transfer, Wallet } from './pages';
import { Area, Bar, Financial, Line, Pie, Pyramid, Stacked} from './pages/Charts';

import DarkMode from './utils/darkMode';

export default function App() {
  console.log('%c ¡NO USAR CONSOLA DE COMANDOS A MENOS DE QUE SEPAS LO QUE ESTAS HACIENDO, USAR UN COMANDO EQUIVOCADO PUEDE VULNERAR TU SEGURIDAD, GOLDEN DUCK NO SE HACE RESPONSABLE DE DICHOS ACTOS Y SUS CONSECUENCIAS! ', 'font-size:20px; background: #FF0000; color: #fff');
  console.log('%c ¡NO USAR CONSOLA DE COMANDOS A MENOS DE QUE SEPAS LO QUE ESTAS HACIENDO, USAR UN COMANDO EQUIVOCADO PUEDE VULNERAR TU SEGURIDAD, GOLDEN DUCK NO SE HACE RESPONSABLE DE DICHOS ACTOS Y SUS CONSECUENCIAS! ', 'font-size:20px; background: #FF0000; color: #fff');
  console.log('%c ¡NO USAR CONSOLA DE COMANDOS A MENOS DE QUE SEPAS LO QUE ESTAS HACIENDO, USAR UN COMANDO EQUIVOCADO PUEDE VULNERAR TU SEGURIDAD, GOLDEN DUCK NO SE HACE RESPONSABLE DE DICHOS ACTOS Y SUS CONSECUENCIAS! ', 'font-size:20px; background: #FF0000; color: #fff');
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
            {/* Main routes */}
            <Route path="/lol" element={<LOL/>} />{/* LOL */}
            <Route path="*" element={<NotFound/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signin" element={<Register/>} />
            <Route path="/mobile-app" element={<Mobile/>} />
            <Route path="/forgot-my-password" element={<Forget/>} />
            <Route path="/control-panel" element={<ControlPanel/>} />

            {/* Control panel routes  */}
            <Route path="/control-panel/calendar" element={ <Calendar /> } /> 
            <Route path="/control-panel/editor" element={ <Editor /> } />
            <Route path="/control-panel/expense" element={ <Expenses /> } /> 
            <Route path="/control-panel/fixed-term" element={ <FixedTerm /> } /> 
            <Route path="/control-panel/investment" element={ <Investment /> } /> 
            <Route path="/control-panel/loan" element={ <Loan /> } /> 
            <Route path="/control-panel/money" element={ <Money /> } /> 
            <Route path="/control-panel/payment" element={ <Payment /> } /> 
            <Route path="/control-panel/settings" element={ <Settings /> } /> 
            <Route path="/control-panel/support" element={ <Support /> } /> 
            <Route path="/control-panel/transfer" element={ <Transfer /> } /> 
            <Route path="/control-panel/wallet" element={ <Wallet /> } /> 


            {/* Charts */}
            <Route path="/control-panel/charts/area" element={ < Area /> } /> 
            <Route path="/control-panel/charts/bar" element={ < Bar /> } /> 
            <Route path="/control-panel/charts/financial" element={ < Financial /> } /> 
            <Route path="/control-panel/charts/line" element={ < Line /> } /> 
            <Route path="/control-panel/charts/pie" element={ < Pie /> } /> 
            <Route path="/control-panel/charts/pyramid" element={ < Pyramid /> } /> 
            <Route path="/control-panel/charts/stacked" element={ < Stacked /> } /> 

          </Routes>
      </Router>
    )
}
