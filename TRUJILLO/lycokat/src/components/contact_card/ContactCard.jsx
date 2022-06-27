import React, { useRef} from 'react'
import './contactcard.scss'
import Slide from 'react-reveal/Slide'
import Emailjs from '@emailjs/browser'
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

const ContactCard = () => {

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
        else if(!captcha.current.getValue()){
            Swal.fire(
                'Complete la verificación captcha, por favor.',
                '',
                'warning'
            )
        }
        else {
            Emailjs.sendForm('service_qfy3gbr', 'template_m09jq53', form.current, 'uO7W8Da3MRpRUpFOu')
                .then((result) => {
                    Swal.fire(
                        'Su mensaje ha sido enviado correctamente',
                        'Nos pondremos en contacto con usted a la brevedad',
                        'success'
                    );
                }, (error) => {
                    Swal.fire(
                        'Ha ocurrido un error',
                        error.text,
                        'error'
                    )
                });
            e.target.reset();
        }
    }

    return (
        <div className='contact-layout manrope'>
            <Slide top>
                <div className='contact-card-cont'>
                    <div className='contact-card'>
                        <div className='info-container'>
                            <div className='text-info-cont'>
                                <h2>Información de contacto</h2>
                                <ul>
                                    <li>E-mail: <a href='mailto:lycokat.co@gmail.com'>lycokat.co@gmail.com</a></li>
                                    <li>Sede oficial: <a href='https://goo.gl/maps/rDL88QZpEaqDxVUY7' rel='noreferrer' target='_blank'>222 Broadway, New York, NY 100</a></li>
                                    <li>Número de teléfono: +54 9 11 2638-6133</li>
                                </ul>
                            </div>
                            <div className='contact-vector'></div>
                        </div>
                        <div className='form-container'>
                            <div className='contact-message'>
                                <h2>Contáctanos</h2>
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
                                    className='mx-auto'
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
                    <button id='close-contact-card'></button>
                </div>
            </Slide>
        </div>
    )
}

export default ContactCard