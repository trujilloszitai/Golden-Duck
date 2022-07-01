import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './notFound.scss'
import MoveBGFuntion from '../../utils/bgMove';

const NotFound = () => {
    useEffect(() => {
        MoveBGFuntion('container');
      }, []);
    return(
        <main id='NotFound'>
            <div id="container">
                <div className="content">
                    <h2>404</h2>
                    <h4>Opps! Página no encontrada</h4>
                    <p>La página a la que intenta acceder no ha sido encontrada. Esto puede suceder por un mal tipeo o porque la página cambio de dominio</p>
                    <Link to='/'>Volver</Link>
                </div>
            </div>
        </main>
    )
}

export default NotFound;