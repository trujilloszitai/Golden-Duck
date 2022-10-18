import React from 'react';
import { Link } from 'react-router-dom';

import './mobile.scss'

import PlayStore from './assets/playstore.png'
import AppleStore from './assets/applastore.png'
import Bailongo from './assets/bailongo.gif'
import Nav from '../navbar/Nav';

const Mobile = () => {
    return(
        <div id='Mobile'>
            <Nav/>
            <h1>Tenemos una para App Móvíl</h1>
            <p>Descarga la aplicación para móvil para poder usar Golden Duck desde tu celular o tablet</p>
            <p>Puedes descargarla Aquí:</p>
            <div className='downloadOptions'>
            <Link to={'/lol'}>
                <img src={PlayStore} className='Download' alt='PlayStore'/>
            </Link>
            <Link to={'/lol'}>
                <img src={AppleStore} className='Download' alt='AppleStore'/>
            </Link>
            </div>
            <img src={Bailongo} id='Phone' alt='Phone'/>
        </div>
    )
}

export default Mobile;