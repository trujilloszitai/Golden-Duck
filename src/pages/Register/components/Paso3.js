import React from 'react';
import { Link } from 'react-router-dom';
import md5 from 'md5';
import Swal from 'sweetalert2';

import formFunctions from '../../../utils/formFunctions';

const Paso3 = props =>{
  let handleAgainBTN = () => {
    alert("repito")
  }
  let enviarBTN = () => {
    if (sessionStorage.getItem("code") === md5(props.values.codePhone) && formFunctions.checkNext() && document.getElementById("checkPESTEL").checked) {
      Swal.fire({
            title: "Registro Comleto",
            text: "¡Te has registrado exitosamente!",
            icon: "success",
        }).then(() => {
            window.location.href = "/"; // No me sorprenderia que falle (Usado en Register y Forget)
        });
    }
    else if (!document.getElementById("checkPESTEL").checked){
      Swal.fire({
            title: "Error",
            text: "Debes aceptar los terminos y condiciones",
            icon: "error",
        });
    }
    else{
      Swal.fire({
            title: "Error",
            text: "Código erróneo",
            icon: "error",
        });
    }
  }
  return (
    <div className="pasos code" id="Confirm">
      <small className='infoTopForm'>Enviamos un código de confirmación al correo <span>{props.values.email}</span></small>
      <div className="input" id='ConfirmInputContainer'>
          <span className="material-icons-outlined" id='sendAgain' title='Enviar Código de nuevo' onClick={handleAgainBTN}>replay</span>
          <input type="text" name="codePhone" placeholder="### - ###" required minLength={6} maxLength={6} onChange={e => {
            props.handleInputChange(e)
            formFunctions.typingInput(e, 6, true)
          }}/>
      </div>
      <div id='PESTEL'>
        <input type='checkbox' id='checkPESTEL'/>
        <label>Acepto <Link to={'/TermsAndConditions'}>Terminos y Condiciones</Link></label>
      </div>
      <button id='Next' onClick={enviarBTN}>Enviar</button>
    </div>
  );
}

/* Idea real:
    - En este panel enviar el codigo al telefono y una vez sea confirmado enviar la confirmación al correo electronico donde tendra que hacer click y redirije a la misma pagina confirmando la cuenta
    - Pero ahora simplemente con email porque hay que pagar para enviar sms
*/

export default Paso3;