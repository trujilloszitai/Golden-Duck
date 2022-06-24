import React from 'react';
import { Link } from 'react-router-dom';
import DarkMode from '../../utils/darkMode';

import './login.scss';
import Nav from '../../components/navbar/nav'

const Login = (top) => {
    return(
        <main className='logSec'>
            <DarkMode/>
            <div className="particles"/>
            <div id='bg'>
                <Nav/>
                <div className='text'>
                    <h1>¿No tienes una cuenta?</h1>
                    <i>"El principio es la mitad del todo" - Pitágoras</i>
                    <p>Si todavia no tienes una cuenta, puedes empezar a crearla haciendo un click</p>
                    <Link to={'/Register'}>Aquí</Link>
                </div>
            </div>
            <div className="Login">
                <div className="background"/>
                <h1>Iniciar Sesión</h1>
                <form>
                    <label>Usuario o Telefono</label>
                    <div class="input">
                        <input type="email" name="email" placeholder="Usuario o Telefono" required/>
                        <span class="material-icons-outlined">account_circle</span>
                    </div>
                    <label>Contraseña</label>
                    <div class="input">
                        <input type="text" name="password" placeholder="Contraseña" required/>
                        <span class="material-icons-outlined">lock</span>
                    </div>
                    <div className='check'>
                        <input type="checkbox" />
                        <Link to={'/ChangePassword'}>¿Olvidaste tu Contraseña?</Link>
                    </div>
                    <input type="submit" />
                </form>
            </div>
        </main>
    )
}

export default Login;