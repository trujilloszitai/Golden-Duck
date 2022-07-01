import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/img/logo512.png';
import './nav.scss';

const Navbar = () => {
    return(
        <nav>
            <img src={Logo} alt='GoldenDuck-Logo'/>
            <div className='homeCont' tooltip="Volver" flow="down">
                <Link to={'/'} className="material-icons-outlined home">home</Link>
            </div>
        </nav>
    )
}

export default Navbar;