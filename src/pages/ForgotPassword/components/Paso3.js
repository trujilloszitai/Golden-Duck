import React from 'react';
import Swal from 'sweetalert2';
import InputPasswordShowBTN from '../../../components/InputPasswordShowBTN/inputPasswordShowBTN';
import formFunctions from '../../../utils/formFunctions';

const Paso3 = props =>{
  let Enviar = () => {
    if (props.values.password === props.values.confirmPassword && formFunctions.checkNext())
        Swal.fire({
            title: "Cambio de Contraseña Comleto",
            text: "¡Has cambiado la contraseña exitosamente!",
            icon: "success",
        }).then(() => {
            window.location.href = "/"; // No me sorprenderia que falle (Usado en Register y Forget)
        });
    else Swal.fire({
        title: "Error",
        text: "Verifique los campos",
        icon: "error",
    });
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