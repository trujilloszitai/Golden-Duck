import React from 'react';
import { Link } from 'react-router-dom';
import md5 from 'md5';

import InputPasswordShowBTN from '../../../components/InputPasswordShowBTN/inputPasswordShowBTN';
import randomString from '../../../utils/randomString';
import PasswordStrenghtMeter from './PasswordStrenghtMeter';

import formFunctions from '../../../utils/formFunctions';

const Paso2 = props =>{
  let siguienteClick = () => {
    var code = randomString(6);
    sessionStorage.setItem("code", md5(code));
    props.siguientePaso()
    console.log('Codigo: ' + code) /* Sacar al terminar xd */
    console.log('Encriptado: ' + sessionStorage.getItem("code")) /* Sacar al terminar xd */
  }
  return (
    <div className="pasos" onKeyDown={props.handleEnterKey}>
      <label>Teléfono:</label> {/* Teléfono */}
      <div className="input">
          <input type="text" name="phoneNumber" value={props.values.phoneNumber} minLength={10} maxLength={10}  onChange={e => {
              props.handleInputChange(e)
              formFunctions.typingInput(e, 10, true, 'int')
            }}/>
          <span className="material-icons-outlined">phone</span>
      </div>
      
      <label>Email:</label> {/* Email */}
      <div className="input">
          <input type="text" name="email" value={props.values.email} onChange={e => {
              props.handleInputChange(e)
              formFunctions.typingInput(e, 1, false, 'email')
            }}/>
          <span className="material-icons-outlined">alternate_email</span>
      </div>
      
      <label>Contraseña:</label> {/* Contraseña */}
      <div className="input" id='passwordShowBarContainer'>
          <InputPasswordShowBTN name='password' value={props.values.password} onChange={props.handleInputChange}/>
          <span className="material-icons-outlined">lock</span>
      </div>
      <PasswordStrenghtMeter password={props.values.password}/>
      <small>Si ya tienes una cuenta, ingresa haciendo <Link to='/Login'>click aquí</Link></small>
      <button id='Next' onClick={siguienteClick}>Siguiente</button>
    </div>
  );
}

export default Paso2;
