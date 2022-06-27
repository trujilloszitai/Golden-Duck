import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../../assets/img/logo512.png';
import './nav.scss';
import DarkMode from '../../../../utils/darkMode';

const Navbar = (top) => {
    return(
        <nav id='home'>
            <img src={Logo} alt='LycoKat Logo'/>
            <div className='optionMenu'>
                <a href="#LycoKat">LycoKat</a>
                <a href="#AboutUs">Sobre Nosotros</a>
                <a href="#AppMobile">App Móvil</a>
                <a href="#Possibilities">Posibilidades</a>
                <a href="#Sedes">Sedes</a>
            </div>
            <div className='finalOptions'>
                <DarkMode/>
                <Link to={'/Login'} href='#'>Unete</Link>
            </div>
        </nav>
    )
}

export default Navbar;