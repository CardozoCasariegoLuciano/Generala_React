import React, { useContext, useState } from "react";
import GameContext from "../../context/gameContext";
import "./Historial.scss";
import { ImArrowLeft2, ImArrowRight2 } from "react-icons/im";
import { convertirDado } from "../../utils/functions";

const Historial = () => {
  const { game, setGame } = useContext(GameContext);
  const [showHistorial, setShowHistorial] = useState(false);

  const mostrarHistorial = () => {
    setShowHistorial(!showHistorial);

    const historial = document.getElementById("historial");
    historial.classList.toggle("mostrarHistorial");
  };

  return (
    <div className="historial" onClick={mostrarHistorial} id="historial">
      <div className="historial_tag">
        Historial
        <div className="historial_arrow">
          {!showHistorial ? <ImArrowRight2 /> : <ImArrowLeft2 />}
        </div>
      </div>
      <div className="historialData">
        <h3>
          Turnos jugados: <span>{game.historial.length}</span>
        </h3>
        <h3>Jugadas:</h3>
        <div className="historialDeJugadas">
          {game.historial.map((elem, ind) => (
            <div className="Historial_jugada" key={ind}>
              <p className="historial_puntos">puntos ganados: <span> {elem.puntos}</span></p>
              <p className="historial_jugada">
                Jugada: <span>{elem.jugada}</span>
              </p>
              <p className="historial_dados_tit">Dados usados:</p>
              <div className="historial_dados"> {elem.dados.map((elem, ind) => (
                <div className="Historial_dado" key={ind}>
                  {convertirDado(elem, "dadoHistorial")}
                </div>
                
              ))}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Historial;
