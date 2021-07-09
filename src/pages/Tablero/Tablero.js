import React, { useState } from "react";
import AreaDeJuego from "../../components/AreaDeJuego/AreaDeJuego";
import UserStatus from "../../components/UserStatus/UserStatus";
import { getMaxCombination } from "../../utils/functions";

import "./Tablero.scss";

const Tablero = () => {
  const [dados, setDados] = useState([0, 0, 0, 0, 0]);

  const generarDados = () => {
    setDados(dados.map((n) => Math.floor(Math.random() * 6) + 1));

    console.log(getMaxCombination(dados)); 
    // la lista de dados que muestra en consola esta atrasada respcto a lo que se muestra en pantalla.
    // si saco ese log de la funcion, el codigo deja de funcionar y no se por que
    //Pasa lo mismo si esto lo hago en el componente "AreaDeJuego" usando la lista que paso por props
  };

  return (
    <div className="Tablero">
      <div className="datosDelUsuario">
        <UserStatus />
        <button className="btn_tirarDados" onClick={generarDados}>
          Tirar
        </button>
      </div>

      <div className="areaDeJuego">
        <AreaDeJuego dados={dados} />
      </div>
    </div>
  );
};

export default Tablero;
