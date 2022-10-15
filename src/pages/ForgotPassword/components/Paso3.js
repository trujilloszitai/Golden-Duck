import React from 'react';
import InputPasswordShowBTN from '../../../components/InputPasswordShowBTN/InputPasswordShowBTN';

import formFunctions from '../../../utils/formFunctions';

const Paso3 = props =>{
  let Enviar = () => {
    if(props.values.password === props.values.confirmPassword) alert('si')
    else alert('no')
  }

  return (
    <div className="pasos" onKeyDown={props.handleEnterKey}>
      <label>Contraseña:</label> {/* Contraseña */}
      <div className="input">
          <InputPasswordShowBTN name='password' value={props.values.password} required={true} onChange={e => {
            props.handleInputChange(e)
            formFunctions.typingInput(e, 6, true)
          }}/>
          <span className="material-icons-outlined">person_outline</span>
      </div>
      
      <label>Confirmar Contraseña:</label> {/* Contraseña */}
      <div className="input">
          <InputPasswordShowBTN name='confirmPassword' value={props.values.confirmPassword} required={true} onChange={e => {
            props.handleInputChange(e)
            formFunctions.typingInput(e, 6, true)
          }}/>
          <span className="material-icons-outlined">person_outline</span>
      </div>
      <button id='Next' onClick={Enviar}>Enviar</button>
    </div>
  );
}

export default Paso3;