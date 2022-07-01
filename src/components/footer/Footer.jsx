import React from 'react'
import './footer.scss'
import Swal from 'sweetalert2'

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
        <a href='mailto:lycokat.co@gmail.com'>lycokat.co@gmail.com</a>
        <a href='https://goo.gl/maps/rDL88QZpEaqDxVUY7' rel='noreferrer' target='_blank'>222 Broadway, New York, NY 100</a>
        <p onClick={() => {
          navigator.clipboard.writeText('+54 9 11 2638-6133');
          let timerInterval;
          Swal.fire({
            title: 'Copiado al portapapeles.',
            timer: 1500,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading()
              const b = Swal.getHtmlContainer().querySelector('b')
              timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
              }, 100)
            },
            willClose: () => {
              clearInterval(timerInterval)
            }
          })
        }}
          className='cursor-pointer'
        >
          +54 9 11 2638-6133
        </p>
      </ul>
      <p>Lycokat™ 2022 | Todos los derechos reservados</p>
    </footer>
  )
}

export default Footer