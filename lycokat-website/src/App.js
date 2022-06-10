import React from 'react';
import './App.scss';
import { About, Contact, Features, Header, Navbar, Story } from './components'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';


function App() {
/* Detector de scroll */
const debounce = (fn) => {
  let frame;
  return (...params) => {
    if (frame) { 
      cancelAnimationFrame(frame);
    }
    frame = requestAnimationFrame(() => {
      fn(...params);
    });

  } 
};
const storeScroll = () => {
  document.documentElement.dataset.scroll = window.scrollY;
}
document.addEventListener('scroll', debounce(storeScroll), { passive: true });
storeScroll();
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Features />
      <Story />
      <Contact />
      <script src='./components/header/functions.js'></script>
    </div>
  );
}

export default App;
