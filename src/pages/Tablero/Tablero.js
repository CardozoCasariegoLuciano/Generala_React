import React, { useContext } from 'react';
import UserNameContext from '../../context/userContex';
import "./Tablero.scss"


const Tablero = () => {

    const { name } = useContext(UserNameContext);

    return ( <div className="Tablero">
        
        Campo de juego de {name}
    </div> );
}
 
export default Tablero;