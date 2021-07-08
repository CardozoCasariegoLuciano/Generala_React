import React from "react";

import { convertirDado } from "../../utils/functions";
import "./areaDeJuego.scss";

const AreaDeJuego = ({ dados }) => {
  return (
    <div className="areaDeDados">
      <div className="dadosSection">
        {dados.map((undado, ind) => (
          <div
            className="unDado"
            key={ind}
           /*  onClick={() => selecionarDado(undado)} */
          >
            {convertirDado(undado)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AreaDeJuego;
