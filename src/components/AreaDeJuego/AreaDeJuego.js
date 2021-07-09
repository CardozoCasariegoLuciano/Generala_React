import UserNameContext from "../../context/userContex";

import React, { useContext } from "react";
import { convertirDado } from "../../utils/functions";
import "./areaDeJuego.scss";

const AreaDeJuego = ({ dados }) => {
  const { user, setUser } = useContext(UserNameContext);

  const selecionarDado = (undado, ind) => {
    if (undado !== 0) {
      const aDice = document.getElementById("dado" + ind);

      console.log(aDice);
    }
  };

  return (
    <div className="areaDeDados">
      <div className="dadosSection">
        {dados.map((undado, ind) => (
          <div
            className="unDado"
            key={ind}
            id={`dado${ind}`}
            onClick={() => selecionarDado(undado, ind)}
          >
            {convertirDado(undado)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AreaDeJuego;
