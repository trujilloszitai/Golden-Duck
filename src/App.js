import React, { useEffect } from 'react';
import './App.scss';
import { About, Contact, Features, Footer, Header, Navbar, Story } from './components'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery'


function App() {
  useEffect(() => {
    setTimeout(() => {
      $('#root').addClass('loaded')
      $('.App').css('display', 'block')
    }, 500)
  }, []);

  return (
    <div className='App'>
      <Navbar />
      <Header />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
