import React from 'react'
import './footer.scss'

const Footer = () => {
  return (
    <footer className='position-relative manrope'>
      <div className='waves'>
        <div className='wave' id='wave1'></div>
        <div className='wave' id='wave2'></div>
        <div className='wave' id='wave3'></div>
        <div className='wave' id='wave4'></div>
      </div>
      <ul className='social-media'>
        <a href='https://www.facebook.com/profile.php?id=100081120383944' target='_blank' rel="noreferrer"></a>
        <a href='https://twitter.com/lycokat' target='_blank' rel="noreferrer"></a>
        <a href='https://www.instagram.com/lycokat/' target='_blank' rel="noreferrer"></a>
        <a href='mailto:lycokat.co@gmail.com' target='_blank' rel="noreferrer"></a>
      </ul>
      <ul className='footer-menu'>
        <a href='#home'>Inicio</a>
        <a href='#about'>Acerca de</a>
        <a href='#story'>Trayectoria</a>
      </ul>
      <p>Lycokat™ 2022 | Todos los derechos reservados</p>
    </footer>
  )
}

export default Footer