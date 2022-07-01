import React, { useRef } from 'react'
import './contact.scss'
import Zoom from 'react-reveal/Zoom';
import Emailjs from '@emailjs/browser'
import $ from 'jquery'
import Swal from 'sweetalert2'
import validator from 'validator'
import ReCAPTCHA from 'react-google-recaptcha'

const inputs = [
  {
    label: 'Nombre',
    type: 'text',
    name: 'name'
  },
  {
    label: 'Email',
    type: 'email',
    name: 'email'
  },
  {
    label: 'Asunto',
    type: 'text',
    name: 'subject'
  }
]

export default function Example() {

  const form = useRef();
  const captcha = useRef(null);
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  function sendEmail(e) {
    e.preventDefault();
    let emptyFields = (validator.isEmpty(e.target.name.value) || validator.isEmpty(e.target.email.value) || validator.isEmpty(e.target.subject.value) || validator.isEmpty(e.target.message.value));
    if (emptyFields) {
      Swal.fire(
        'Complete los campos, por favor',
        '',
        'warning'
      )
    }
    else if (!validateEmail(e.target.email.value)) {
      Swal.fire(
        'El correo brindado no es válido',
        '',
        'error'
      )
    }
    else if (!captcha.current.getValue()) {
      Swal.fire(
        'Complete la verificación captcha, por favor.',
        '',
        'warning'
      )
    }
    else {
        $('.submit-button input').attr('disabled', true);
        $('.submit-button').css('opacity', '50%');
      Emailjs.sendForm('service_qfy3gbr', 'template_m09jq53', form.current, 'uO7W8Da3MRpRUpFOu')
        .then((result) => {
          Swal.fire(
            'Su mensaje ha sido enviado correctamente',
            'Nos pondremos en contacto con usted a la brevedad',
            'success'
          );
          $('.submit-button input').attr('disabled', false);
          $('.submit-button').css('opacity', '100%');
          e.target.reset();
        }, (error) => {
          Swal.fire(
            'Ha ocurrido un error',
            error.text,
            'error'
          )
        });
    }
  }

  return (
    <div className='contact section2 px-3' id='contact'>
      <Zoom>
        <div className='contact-vector'></div>
        <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-start lg:justify-center contact-message flex-column'>
          <h2 className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl manrope'>
            <span className='block'>¿Listo para empezar?</span>
            <span className='block text-indigo-600'>Impulsa tus proyectos con Lycokat ya mismo.</span>
          </h2>
          <div className='contact-card'>
          <div className='form-container'>
            <div className='contact-message manrope'>
              <h5>Estamos completamente abiertos al diálogo ante cualquier consulta o información que necesites</h5>
            </div>
            <form className='form' ref={form} onSubmit={sendEmail}>
              {inputs.map(input => {
                return (
                  <div className='field-cont'>
                    <div className='label-cont'>
                      <label className='label-form' for={input.name}>{input.label}</label>
                    </div>
                    <div className='input-cont'>
                      <input type={input.type} name={input.name} className='form-input' autoComplete='off' required />
                    </div>
                  </div>
                )
              })}
              <div className='field-cont'>
                <div className='label-cont'>
                  <label className='label-form' for='message'>Mensaje</label>
                </div>
                <div className='textarea-cont'>
                  <textarea className='form-textarea' name='message' required></textarea>
                </div>
              </div>
              <ReCAPTCHA
                sitekey="6LeVMaEgAAAAAKS-1eaRymKZPEZDB9D56UG0RWp2"
                ref={captcha}
                className='gc-reset mx-auto'
              />
              <div className='inline-flex submit-button'>
                <input
                  value='Enviar'
                  type='submit'
                  className='inline-flex items-center justify-center mx-auto my-2 px-5 py-2 border border-transparent text-l font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'
                />
              </div>
            </form>
          </div>
        </div>
        </div>
      </Zoom>
    </div>
  )
}