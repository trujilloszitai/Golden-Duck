import React from 'react';
/*

import { Link } from 'react-router-dom';
import $ from 'jquery'

*/

const mainPanelSelect = props => {
    switch (props.values.panelNumber) {
        case 1:
            return(
                <main className="panelMain">
                    <h1>Billetera</h1>
                    <div className='contentPanelMain'>
                        asd
                    </div>
                </main>
            )
        case 2:
            return(
                <main className="panelMain">
                    <h1>Plazos Fijos</h1>
                    <div className='contentPanelMain'>
                        asd
                    </div>
                </main>
            )
        case 3:
            return(
                <main className="panelMain">
                    <h1>Gastos</h1>
                    <div className='contentPanelMain'>
                        asd
                    </div>
                </main>
            )
        case 4:
            return(
                <main className="panelMain">
                    <h1>Pago de Servicios</h1>
                    <div className='contentPanelMain'>
                        asd
                    </div>
                </main>
            )
        case 5:
            return(
                <main className="panelMain">
                    <h1>Transerencias</h1>
                    <div className='contentPanelMain'>
                        asd
                    </div>
                </main>
            )
        case 6:
            return(
                <main className="panelMain">
                    <h1>Inverciones</h1>
                    <div className='contentPanelMain'>
                        asd
                    </div>
                </main>
            )
        case 7:
            return(
                <main className="panelMain">
                    <h1>Prestamos</h1>
                    <div className='contentPanelMain'>
                        asd
                    </div>
                </main>
            )
        case 8:
            return(
                <main className="panelMain">
                    <h1>Soporte</h1>
                    <div className='contentPanelMain'>
                        asd
                    </div>
                </main>
            )
        case 9:
            return(
                <main className="panelMain">
                    <h1>Configuración</h1>
                    <div className='contentPanelMain'>
                        asd
                    </div>
                </main>
            )
        default:
            break;
    }
}

export default mainPanelSelect;