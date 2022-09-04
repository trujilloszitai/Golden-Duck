import React from 'react';
import { Link } from 'react-router-dom';

import './panel.scss'
import GoldenDuckLogo from '../../assets/img/logo512.png'
import profilePhoto from './assets/img/defaultProfilePhoto.jpg'

import darkMode from '../../utils/darkMode';

const Panel = () => {
    return(
        <section id='Panel'>
                {/* <!---------------------------------- AsideBar ----------------------------------> */}

            <aside>
                <div class="top">
                    <div class="logo">
                    <img src={GoldenDuckLogo}/>
                    <h2><span class="primary">Golden Duck</span></h2>
                    </div>
                    <div class="close">
                    <span class="material-icons-outlined">close</span>
                    </div>
                </div>
                <div class="sidebar">
                    <a class="active" href="#">
                        <span class="material-icons-outlined">wallet</span>
                        <h3>Billetera</h3>
                    </a>
                    <a href="#">
                    <span class="material-icons-outlined">savings</span>
                    <h3>Plazo Fijo</h3>
                    </a>
                    <a href="#">
                    <span class="material-icons-outlined">history</span>
                    <h3>Gastos</h3>
                    </a>
                    <a href="#">
                    <span class="material-icons-outlined">payment</span>
                    <h3>Pagar Servicio</h3>
                    </a>
                    <a href="#">
                    <span class="material-icons-outlined">volunteer_activism</span>
                    <h3>Transferir</h3>
                    </a>
                    <a href="#">
                    <span class="material-icons-outlined">trending_up</span>
                    <h3>Invetir</h3>
                    </a>
                    <a href="#">
                    <span class="material-icons-outlined">attach_money</span>
                    <h3>Prestamo</h3>
                    </a>
                    <a href="#">
                    <span class="material-icons-outlined">help</span>
                    <h3>Soporte</h3>
                    <span class="notf-count">1</span>
                    </a>
                    <a href="#">
                    <span class="material-icons-outlined">settings</span>
                    <h3>Configuración</h3>
                    </a>
                    <Link to='/'>
                        <span class="material-icons-outlined">logout</span>
                        <h3>Salir</h3>
                    </Link>
                </div>
            </aside>

            {/* <!---------------------------------- Main ----------------------------------> */}

            <main id='panelMain'>
                <h1>Hola</h1>
            </main>

            {/* <!---------------------------------- Right Menu ----------------------------------> */}

            <div class="right">
                <div class="top">
                    <button class="menu-btn">
                        <span class="material-icons-outlined">menu</span>
                    </button>
                    <div class="theme-toggle" onClick={e => darkMode.switchTheme(e)}>
                        <span class="material-icons-outlined" id='lightButton'>light_mode</span>
                        <span class="material-icons-outlined" id='darkButton'>dark_mode</span>
                    </div>
                    <div class="profile">
                        <div class="info">
                            <p>Hola, <b>Eugenio</b></p>
                            <small class="text-muted">Usuario</small>
                        </div>
                        <div class="profie-photo">
                            <img class="profile-photo" src={profilePhoto}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Panel;