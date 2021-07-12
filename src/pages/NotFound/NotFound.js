import React from 'react';
import { Link } from 'react-router-dom';
import "./notFound.scss"

const NotFound = () => {
    return ( <div className="notFound">

        <h3>Pagina no encontrada</h3>
        <Link to="/juego" className="btn_volverAlJuego">Volver al juego</Link>
    </div> );
}
 
export default NotFound;