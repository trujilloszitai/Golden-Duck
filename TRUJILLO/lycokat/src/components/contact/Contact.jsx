import React from 'react'
import './contact.scss'
import Zoom from 'react-reveal/Zoom';

export default function Example() {
  return (
    <div className='contact section2 px-3'>
      <Zoom>
      <div className='contact-vector'></div>
      <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-start lg:justify-center contact-message flex-column'>
        <h2 className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl manrope'>
          <span className='block'>¿Listo para empezar?</span>
          <span className='block text-indigo-600'>Impulsa tus proyectos con Lycokat ya mismo.</span>
        </h2>
        <div className='mt-8 flex lg:mt-0 lg:flex-shrink-0 justify-center'>
          <div className='inline-flex rounded-md shadow contact-button'>
            <button
              className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-xl font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 open-contact-form'
            >
              Contacto
            </button>
          </div>
        </div>
      </div>
    </Zoom> 
    </div>
  )
}