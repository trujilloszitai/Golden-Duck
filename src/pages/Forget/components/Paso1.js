import React from 'react';
import { Link } from 'react-router-dom';
import md5 from 'md5';

import randomString from '../../../utils/randomString';

const Paso1 = props =>{
  let siguienteClick = () => {
    var code = randomString(6);
    sessionStorage.setItem("codeChange", md5(code));
    props.siguientePaso()
    console.log('Codigo: ' + code) /* Sacar al terminar xd */
    console.log('Encriptado: ' + sessionStorage.getItem("code")) /* Sacar al terminar xd */
  }
  return (
    <div className="pasos" onKeyDown={props.handleEnterKey}>
        <label>Ingrese el Correo:</label> {/* Nombre */}
        <div className="input">
            <input type="email" name="name" value={props.values.name} className="form-input" id="name" autoFocus required autoComplete="off" onChange={props.handleInputChange}/>
            <span className="material-icons-outlined">person_outline</span>
        </div>
        <br/><br/><br/>
        <button id='Next' onClick={() => {
            props.siguientePaso();
            siguienteClick();
          }
        }>Siguiente</button>
    </div>
  );
}

export default Paso1;