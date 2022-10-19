import React from "react";
import md5 from "md5";
import Swal from "sweetalert2";
import formFunctions from "../../../utils/formFunctions";

const Paso2 = (props) => {
  let handleAgainBTN = () => {
    alert("repito");
  };
  let enviarBTN = () => {
    if (sessionStorage.getItem("codeChange") === md5(props.values.codeEmail)) {
      props.siguientePaso();
    } else {
      Swal.fire({
        title: "Error",
        text: "Código erróneo",
        icon: "error",
      });
    }
  };
  return (
    <div className="pasos code" id="Confirm">
      <small>Enviamos un codigo de confirmación al correo electronico</small>
      <div className="input" id="ConfirmInputContainer">
        <span
          className="material-icons-outlined"
          id="sendAgain"
          title="Enviar Código de nuevo"
          onClick={handleAgainBTN}
        >
          replay
        </span>
        <input
          type="text"
          name="codeEmail"
          placeholder="### - ###"
          required
          minLength={6}
          maxLength={6}
          onChange={(e) => {
            props.handleInputChange(e);
            formFunctions.typingInput(e, 6, true);
          }}
        />
      </div>
      <button id="Next" onClick={enviarBTN}>
        Enviar
      </button>
    </div>
  );
};

/* Idea real:
    - En este panel enviar el codigo al telefono y una vez sea confirmado enviar la confirmación al correo electronico donde tendra que hacer click y redirije a la misma pagina confirmando la cuenta
    - Pero ahora simplemente con email porque hay que pagar para enviar sms
*/

export default Paso2;
