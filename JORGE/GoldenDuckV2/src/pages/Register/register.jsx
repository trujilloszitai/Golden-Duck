import React from 'react';
import DarkMode from '../../utils/darkMode';

import Nav from '../../components/navbar/nav'

const Register = (top) => {
    return(
        <main className='regSec'>
            <div class="progressBar">
                <div class="line"></div>
                <span class="points active" id="1">1</span>
                <span class="points" id="2">2</span>
                <span class="points" id="3">3</span>
            </div>
            <h1>Regístrate:</h1>

            {/* <!-- Paso 1: Nombre, Apellido y DNI --> */}
            <div class="pasos active" id="NAD">
                <form action="#" id="form">
                    <div class="form-cont" id="cont-name">
                        <label for="name" class="form-label">Nombre:</label>
                        <div class="form-cont-input">
                            <img src="Sources/img/users.svg"/>
                            <input type="text" name="name" class="form-input" autofocusrequired id="name"
                                autocomplete="off"/>
                            <i class="form-validation-state fas fa-times-circle"></i>
                        </div>
                        <p class="form-input-error">El nombre solo puede contener letras.</p>
                    </div>

                    <div class="form-cont" id="cont-surname">
                        <label for="surname" class="form-label">Apellido:</label>
                        <div class="form-cont-input">
                            <img src="Sources/img/user.svg"/>
                            <input type="text" name="surname" class="form-input" required autocomplete="off"/>
                            <i class="form-validation-state fas fa-times-circle"></i>
                        </div>
                        <p class="form-input-error">El apellido solo puede contener letras.</p>
                    </div>

                    <div class="form-cont" id="cont-dni">
                        <label for="dni" class="form-label">DNI (8 cifras):</label>
                        <div class="form-cont-input">
                            <img src="Sources/img/credit-card.svg"/>
                            <input type="text" name="dni" class="form-input" required autocomplete="off"/>
                            <i class="form-validation-state fas fa-times-circle"></i>
                        </div>
                        <p class="form-input-error">El DNI solo puede contener 8 números.</p>
                    </div>

                    <small>Si ya tienes una cuenta, ingresa haciendo <a href="login.html">click aquí</a></small>
                    <div class="form-cont form-cont-btn-submit">
                        <button type="submit" class="form-btn">Enviar</button>
                        <p class="form-message-success" id="form-menssage-success">Formulario enviado exitosamente!</p>
                    </div>
                </form>
            </div>

            {/* <!-- Paso 2: Telefono, Correo electronico y Contraseña --> */}
            <div class="pasos" id="TCC">
                <form action="#">
                    <div class="form-cont">
                        <img src="Sources/img/phone.svg"/>
                        <input type="text" name="phoneNumber" placeholder="Teléfono" autofocus required />
                    </div>
                    <div class="form-cont">
                        <img src="Sources/img/at-sign.svg"/>
                        <input type="email" name="email" placeholder="Correo" required/>
                    </div>
                    <div class="form-cont">
                        <img src="Sources/img/lock.svg"/>
                        <input type="text" name="password" placeholder="Contraseña" required/>
                    </div>
                    <small>Si ya tienes una cuenta, ingresa haciendo <a href="login.html">click aquí</a></small>
                    <input type="submit" value="Siguiente"/>
                </form>
            </div>

            {/* <!-- Paso 3: Codigo de verificacion enviado a correo (1234 [con diseño de input con numero separado xd]) --> */}
            <div class="pasos code" id="Confirm">
                <form action="#">
                    <small>Si ya tienes una cuenta, ingresa haciendo <a href="login.html">click aquí</a></small>
                    <div class="form-cont code">
                        <img src="Sources/img/send.svg"/>
                        <input type="text" name="phoneNumber" placeholder="###" autofocus required/>
                        <span>-</span>
                        <input type="text" name="phoneNumber" placeholder="###" autofocus required/>
                    </div>
                    <small>Si ya tienes una cuenta, ingresa haciendo <a href="#">click aquí</a></small>
                    <input type="submit" value="Enviar"/>
                </form>
            </div>
        </main>
    )
}

export default Register;