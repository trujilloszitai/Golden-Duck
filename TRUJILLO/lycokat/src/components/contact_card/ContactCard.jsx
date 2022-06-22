import React from 'react'
import './contactcard.scss'
import Slide from 'react-reveal/Slide';

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
    return (
        <div className='contact-layout manrope'>
            <Slide top>
                <div className='contact-card-cont'>
                    <div className='contact-card'>
                        <div className='info-container'>
                            <h2>Información de contacto</h2>
                            <ul>
                                <li>E-mail: <a href='mailto:lycokat.co@gmail.com'>lycokat.co@gmail.com</a></li>
                                <li>Sede oficial: <a href='https://goo.gl/maps/rDL88QZpEaqDxVUY7' rel='noreferrer' target='_blank'>222 Broadway, New York, NY 100</a></li>
                                <li>Número de teléfono: +54 9 11 2638-6133</li>
                            </ul>
                            <div className='contact-vector'></div>
                        </div>
                        <div className='form-container'>
                            <div className='contact-message'>
                                <h2>Contáctanos</h2>
                                <h5>Estamos completamente abiertos al diálogo ante cualquier consulta o información que necesites</h5>
                            </div>
                            <form className='form'>
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
                                <div className='inline-flex submit-button'>
                                    <input
                                        value='Enviar'
                                        type='submit'
                                        className='inline-flex items-center justify-center px-5 py-2 border border-transparent text-l font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700'
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