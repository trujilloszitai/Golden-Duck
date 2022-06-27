import React from 'react';
import { Link } from 'react-router-dom';

import Nav from '../../components/navbar/nav';
import './register.scss';

const Register = (top) => {
    return(
        <main className='regSec'>
            <Nav/>
            <div className="progressBar">
                <div className="line"></div>
                <span className="points active" id="1">1</span>
                <span className="points" id="2">2</span>
                <span className="points" id="3">3</span>
            </div>

            <h1>Regístrate:</h1>

            {/* <!-- Paso 1: Nombre, Apellido y DNI --> */}
            <div className="pasos " id="NAD">
                <form>
                    <label>Nombre:</label> {/* Nombre */}
                    <div className="input">
                        <input type="text" name="name" className="form-input" id="name" autoFocus required autoComplete="off"/>
                        <span className="material-icons-outlined">person_outline</span>
                    </div>

                    <label>Apellido:</label> {/* Apellido */}
                    <div className="input">
                        <input type="text" name="surname" className="form-input" required autoComplete="off"/>
                        <span className="material-icons-outlined">perm_identity</span>
                    </div>

                    <label>DNI:</label> {/* DNI */}
                    <div className="input">
                        <input type="text" name="dni" className="form-input" required autoComplete="off"/>
                        <span className="material-icons-outlined">badge</span>
                    </div>

                    <small>Si ya tienes una cuenta, ingresa haciendo <Link to='/Login'>click aquí</Link></small>
                    <button type="submit">Siguiente</button>
                </form>
            </div>












            {/* <!-- Paso 2: Telefono, Correo electronico y Contraseña --> */}
            <div className="pasos" id="TCC">
                <form action="#">
                    <label>Teléfono:</label> {/* Teléfono */}
                    <div className="input">
                        <input type="text" name="phoneNumber" placeholder="Teléfono" autoFocus required />
                        <span className="material-icons-outlined">person_outline</span>
                    </div>
                    
                    <label>Email:</label> {/* Email */}
                    <div className="input">
                        <input type="email" name="email" placeholder="Correo" required/>
                        <span className="material-icons-outlined">person_outline</span>
                    </div>
                    
                    <label>Contraseña:</label> {/* Contraseña */}
                    <div className="input">
                        <input type="text" name="password" placeholder="Contraseña" required/>
                        <span className="material-icons-outlined">person_outline</span>
                    </div>

                    <small>Si ya tienes una cuenta, ingresa haciendo <a href="login.html">click aquí</a></small>
                    <button type="submit">Siguiente</button>
                </form>
            </div>

            {/* <!-- Paso 3: Codigo de verificacion enviado a correo (1234 [con diseño de input con numero separado xd]) --> */}
            <div className="pasos code" id="Confirm">
                <form action="#">
                    <small>Enviamos un codigo de confirmación al correo <span>Correo@Gmail.Com</span></small>
                    <div className="input" id='ConfirmInputContainer'>
                        <input type="text" name="phoneNumber" placeholder="###" autoFocus required minLength={3} maxLength={3}/>
                        <input type="text" name="phoneNumber" placeholder="###" autoFocus required minLength={3} maxLength={3}/>
                        <span className="material-icons-outlined">tag</span>
                    </div>
                    <input type="submit" value="Enviar"/>
                </form>
            </div>
        </main>
    )
}

export default Register;