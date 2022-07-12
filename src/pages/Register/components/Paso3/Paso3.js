import React from 'react';
import md5 from 'md5';
  
import './Paso3.scss';

const Paso3 = props =>{
  let enviarBTN = () => {
    if (sessionStorage.getItem("code") == md5(props.values.codePhone)) {
      alert("si")
      /* props.siguientePaso() */
    }
    else{
      alert("no")
    }
  }
  return (
    <div className="pasos code" id="Confirm">
      <small>Enviamos un codigo de confirmación al teléfono <span>{props.values.phoneNumber}</span></small>
      <div className="input" id='ConfirmInputContainer'>
          <input type="text" name="codePhone" placeholder="### - ###" required minLength={6} maxLength={6} onChange={props.handleInputChange}/>
          <span className="material-icons-outlined">tag</span>
      </div>
      <a id='sendAgain'>Volver a Enviar</a> {/* Hacerlo boton */}
      <button id='Next' onClick={enviarBTN}>Enviar</button>
    </div>
  );
}

/* Idea real:
    - En este panel enviar el codigo al telefono y una vez sea confirmado enviar la confirmación al correo electronico donde tendra que hacer click y redirije a la misma pagina confirmando la cuenta
    - Pero ahora simplemente con email porque hay que pagar para enviar sms
*/

export default Paso3;