import React from "react";
import AreaDeJuego from "../../components/AreaDeJuego/AreaDeJuego";
import Historial from "../../components/Historial/Historial";
import UserStatus from "../../components/UserStatus/UserStatus";
import "./Tablero.scss";

const Tablero = () => {
  return (
    <div className="Tablero">
      <UserStatus />
      <Historial/>

      <div className="tableroContainer">
        <div className="areaDeJuego">
          <AreaDeJuego />
        </div>
      </div>
    </div>
  );
};

export default Tablero;
