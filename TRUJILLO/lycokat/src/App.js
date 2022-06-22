import React, { useEffect } from 'react';
import './App.scss';
import { About, Contact, Features, Footer, Header, Navbar, Story, ContactCard } from './components'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery'
import Fade from 'react-reveal/Fade';


function App() {
  useEffect(() => {
    const closeFormBtn = $('#close-contact-card');
    const openFormBtn = $('.open-contact-form');
    const contactForm = $('.contact-layout');

    const openForm = () => {
      contactForm.css('display', 'flex');
      contactForm.css('animation', 'showForm 1000ms forwards');
    }
    const closeForm = () => {
      contactForm.css('animation', 'hideForm 300ms forwards');
      setTimeout(() => {
        contactForm.css('display', 'none');
      }, 300)
    }

    closeFormBtn.click(closeForm);
    openFormBtn.click(openForm);

    return () => {
      closeFormBtn.off('click', openForm);
      openFormBtn.off('click', openForm);
    }
  }, []);

  return (
    <div className='App'>
        <Navbar />
      <Header />
      <About />
      <Features />
      <Story />
      <Contact />
      <ContactCard />
      <Footer />
    </div>
  );
}

export default App;
