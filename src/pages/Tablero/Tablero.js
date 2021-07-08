import React, { useEffect, useState } from "react";
import AreaDeJuego from "../../components/AreaDeJuego/AreaDeJuego";
import UserStatus from "../../components/UserStatus/UserStatus";

import "./Tablero.scss";

const Tablero = () => {

  const [dados, setDados] = useState([0,0,0,0,0])

  useEffect(() => {
    
  },[dados])


  const generarDados = () => {    

    let final = dados.map((n) => Math.floor(Math.random() * 6) + 1);

    setDados(final)    
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
          <AreaDeJuego dados={dados}/>
      </div>
    </div>
  );
};

export default Tablero;
