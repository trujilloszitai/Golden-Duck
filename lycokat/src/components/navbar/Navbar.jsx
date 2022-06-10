import React, { useState } from 'react'
import './navbar.scss'
import logo from '../../assets/img/logo.svg'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark position-fixed w-100">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Lycokat logo" width="30" height="24" class="d-inline-block align-text-middle logo" />
          Lycokat
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a href="#home" className="nav-link active">Inicio</a>
            <a href="#about" className="nav-link active">Acerca de</a>
            <a href="#features" className="nav-link active">¿Por qué Lycokat?</a>
            <a href="#story" className="nav-link active">Contacto</a>
          </div>
        </div>
      </div>
    </nav>

  )
}
export default Navbar