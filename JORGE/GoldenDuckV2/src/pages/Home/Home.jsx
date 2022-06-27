import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from './components/navbar/nav';
import Footer from '../../components/footer/footer';
import Header from './components/Header/Header';
import QR from '../../assets/img/qr-code.png';

import './Home.scss';

const Home = () => {
    return(
        <main className='Home'>
            <Navbar/>
            <Header/>
            <section className='Home'>
                <div id='LycoKat'>
                    <div className="LycoKatIco"/>
                    <p>
                        <Link to={'/lol'}>Lycokat<span className="material-icons-outlined">open_in_new</span></Link>
                        es una empresa enfocada a la producción de software del más alto prestigio dentro del mercado de IT, en donde buscamos las necesidades del cliente y planificamos el proceso de elaboración del proyecto. Aplicamos la dosis justa y necesaria de personalidad propia, siempre cumpliendo las expectativas del cliente, e incluso superándolas.  Siempre contando con el apoyo y asistencia posterior para el mantenimiento del proyecto, teniendo contacto directo con nosotros, los desarrolladores directo; Una de las características que nos hace destacar por encima de los demás.</p>
                </div>
                <div id="AboutUs">
                    <div className="topWave"/>
                    <div id="AboutUsSection">
                        <h1>Golden Duck</h1>
                        <p>Una banca online donde podrá, no solo gestionar su dinero, sino que incluso invertirlo. Siempre llevando un registro de cuanto dinero es ingresado y cuanto dinero es gastado, contando con categorías para saber en qué lo gasta. También podrá pagar servicios, tales como servicios de Telefonía Móvil, servicios públicos esenciales (Luz, Agua, Gas) o incluso su cuenta de streaming favorita...</p>
                        <p>Contamos con un soporte disponible las 24 hs, donde podrá dejar su consulta y será respondida a la brevedad. Sistema que nos caracteriza por el alta comunicación con el usuario y soporte del mismo. Siempre proporcionando la mayor comodidad y seguridad, trabajando a la par con las mayores empresas de ciberseguridad para resguardar a la perfección su dinero.</p>
                    </div>
                    <div id="AppMobile">
                        <div className="blob">
                            <div className='phone'/>
                            <span className='contentPhone'></span>
                        </div>
                        <div className="text">
                            <h1>¡Tenemos una app para Móvil!</h1>
                            <p>Descarga GoldenDuck en tu celular y maneja tu dinero con un 200% de eficiencia, lleva tu cartera online a donde sea que vayas para pagar servicios o incluso tomar un café.</p>
                            <Link to={'/Mobile'}>
                                <img src={QR} alt='AppQR'/>
                            </Link>
                        </div>
                    </div>
                    <div className="bottomWave"/>
                </div>
                <div id="Possibilities">
                    <h1>Con <span>Golden Duck</span> Podrás Hacer:</h1>
                    <div className="cardsContainer">
                        <div className="card">
                            <div className='textCard'>
                                <span className="material-icons-outlined">savings</span>
                                <h2>Ingresos</h2>
                            </div>
                        </div>
                        <div className="card">
                            <div className='textCard'>
                                <span className="material-icons-outlined">currency_exchange</span>
                                <h2>Traferencias</h2>
                            </div>
                        </div>
                        <div className="card">
                            <div className='textCard'>
                                <span className="material-icons-outlined">shopping_bag</span>
                                <h2>Consumos</h2>
                            </div>
                        </div>
                        <div className="card">
                            <div className='textCard'>
                                <span className="material-icons-outlined">credit_score</span>
                                <h2>Prestamos</h2>
                            </div>
                        </div>
                        <div className="card">
                            <div className='textCard'>
                                <span className="material-icons-outlined">insights</span>
                                <h2>Inversiones</h2>
                            </div>
                        </div>
                        <div className="card">
                            <div className='textCard'>
                                <span className="material-icons-outlined">trending_up</span>
                                <h2>Plazos Fijos</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="Sedes">
                    <div className="text">
                        <h1>Nuestras Sedes</h1>
                        <p>Aquí podrás comunicarte con nosotros en caso de tener algún problema. Como robo, perdida de la cuenta, problemas a la hora de hacer transacciones o cualquier cosa que necesites (Incluso para Tomar un Café 😉)</p>
                        <p>También podrás ingresar dinero, recibir préstamos, obtener plazos fijos... Cosa que también puedes hacer en la aplicación. Pero hey, si quieres lo puedes tramitar del método tradicional, sin ningún tipo de problema.</p>
                    </div>
                    <div className="blob"/>
                    <div className="map">
                        <iframe title='SedeLycoKat' src="https://www.google.com/maps/d/u/0/embed?mid=1sni_xoB_1kANcbzPeHafmQjJZilwKFU&ehbc=2E312F"/>
                    </div>
                </div>
            </section>
            <Footer/>
        </main>
    )
}

export default Home;