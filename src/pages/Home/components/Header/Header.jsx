import React from 'react';
import { Cursor, useTypewriter} from 'react-simple-typewriter'

import './Header.scss';
import Laptop from '../../assets/Laptop.svg';
import LaptopDark from '../../assets/laptopDark.svg';

const Home = () => {
    const [text] = useTypewriter({
        words: [' Confianza', ' Tranferencias', ' Seguridad', ' Confort', ' Inversiones', ' Servicios', ' Todos', ' Plazos Fijos', ' Prestamos', ' Ingresos', ' Agilidad', ' Rapidez', ' Emprendedores', ' Productividad'],
        autoStart: true,
        loop: 0,
        typeSpeed:50,
        deleteSpeed:30,
        delaySpeed:1000
      })
    return(
        <header>
            <div className='Header'>
                <div className="text">
                    <h1>Golden Duck</h1>
                    <p>Tu banca online de 
                        <span>{text}<Cursor cursorStyle='|'/></span>
                    </p>
                </div>
                <div className="img">
                    <img className='light' src={Laptop} alt='LaptopWithPanel'/>
                    <img className='dark' src={LaptopDark} alt='LaptopWithPanel'/>
                    <div className='blob'></div>
                </div>
                <div className='Wave Wave1'/>
                <div className='Wave Wave2'/>
                <div className='Wave Wave3'/>
                <div className='Wave Wave4'/>
            </div>
        </header>
    )
}
export default Home;