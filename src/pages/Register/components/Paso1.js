import React from 'react';
import { Link } from 'react-router-dom';

import formFunctions from '../../../utils/formFunctions';

const Paso1 = props =>{
  return (
    <div className="pasos" onKeyDown={props.handleEnterKey}>
        <label>Nombre:</label> {/* Nombre */}
        <div className="input" id='NameCamp'>
            <input type="text" name="name" value={props.values.name} className="form-input" id="name" autoFocus autoComplete="off" onChange={e => {
              props.handleInputChange(e)
              formFunctions.typingInput(e, 1, false, 'text')
            }}/>
            <span className="material-icons-outlined">person_outline</span>
        </div>

        <label>Apellido:</label> {/* Apellido */}
        <div className="input" id='SurnameCamp'>
            <input type="text" name="surname" value={props.values.surname} className="form-input" autoComplete="off" onChange={e => {
              props.handleInputChange(e)
              formFunctions.typingInput(e, 1, false, 'text')
            }}/>
            <span className="material-icons-outlined">perm_identity</span>
        </div>

        <label>DNI:</label> {/* DNI */}
        <div className="input" id='DNICamp'>
            <input type="text" name="dni" value={props.values.dni} minLength={8} maxLength={8} className="form-input" autoComplete="off" onChange={e => {
              props.handleInputChange(e)
              formFunctions.typingInput(e, 8, true, 'int')
            }}/>
            <span className="material-icons-outlined">badge</span>
        </div>
        <small>Si ya tienes una cuenta, ingresa haciendo <Link to='/Login'>click aquí</Link></small>
        <button id='Next' onClick={props.siguientePaso}>Siguiente</button>
    </div>
  );
}

export default Paso1;