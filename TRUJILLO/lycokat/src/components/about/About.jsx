import React from 'react'
import Fade from 'react-reveal/Fade';
import './about.scss'

const About = () => {
  return (
    <div className='about mx-0 px-5' id='about'>
      <Fade bottom className='position-relative section1'>
        <div className='about-vector'></div>
        <div className='about-content'>
          <div className='about-title ailerons'>
            <h2>Quiénes somos...</h2>
          </div>
          <div className='about-info'>
            <p>
              Lycokat es una empresa argentina dedicada a crear soluciones digitales para facilitar cualquier tipo de tarea, manipulando las herramientas más modernas y ágiles del siglo XXI y con un alto nivel de compromiso con sus clientes.<br />Destacados por la dosis justa y necesaria de identidad que poseen nuestros productos, Lycokat siempre supera las expectativas con sus proyectos de alto calibre, apuntando a la expansión global y el reconocimiento por parte de la comunidad como uno de los pioneros en el desarrollo moderno de sistemas informáticos.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default About