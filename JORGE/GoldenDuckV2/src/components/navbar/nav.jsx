import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/logo512.png';
import './nav.scss';

const Navbar = (top) => {
    return(
        <nav>
            <img src={Logo}/>
            <div className='homeCont' tooltip="Volver" flow="down">
                <Link to={'/'} class="material-icons-outlined home">home</Link>
            </div>
        </nav>
    )
}

export default Navbar;