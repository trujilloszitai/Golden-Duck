import React from 'react';
import InputPasswordShowBTN from '../../../components/InputPasswordShowBTN/inputPasswordShowBTN';

const Paso3 = props =>{
  let Enviar = () => {
    alert("Si");
  }

  return (
    <div className="pasos" onKeyDown={props.handleEnterKey}>
      <label>Contraseña:</label> {/* Contraseña */}
      <div className="input">
          <InputPasswordShowBTN name='password' value={props.values.password} required={true} onChange={props.handleInputChange}/>
          <span className="material-icons-outlined">person_outline</span>
      </div>
      
      <label>Confirmar Contraseña:</label> {/* Contraseña */}
      <div className="input">
          <InputPasswordShowBTN name='password' value={props.values.password} required={true} onChange={props.handleInputChange}/>
          <span className="material-icons-outlined">person_outline</span>
      </div>
      <br/><br/><br/>
      <button id='Next' onClick={Enviar}>Enviar</button>
    </div>
  );
}

export default Paso3;