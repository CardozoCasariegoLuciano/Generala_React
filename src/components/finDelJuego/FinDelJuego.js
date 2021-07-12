import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FinContext from "../../context/finContext";
import GameContext from "../../context/gameContext";
import UserNameContext from "../../context/userContex";
import "./finDelJuego.scss";

const FinDelJuego = ({ data }) => {
  const { user, setUser } = useContext(UserNameContext);
  const { game, setGame } = useContext(GameContext);
  const { setIsFin } = useContext(FinContext);

  const resetGame = () => {
    setUser({ ...user, puntos: 0, dadosSelecionados: [] });
    setGame({
      ...game,
      dadosDeLaRonda: [0, 0, 0, 0, 0],
      historial: [],
      tiradasEnElTurno: 0,
    });
    setIsFin({ mostrar: false, isWin: data.isWin, style: "" });
  };

  return (
    <div className={"finDelJuego " + data.style}>
      <div className="finConteiner">
        {data.isWin ? (
          <div className="finGano">Ganaste</div>
        ) : (
          <div className="finPerdio">Perdiste</div>
        )}

        <div className="volerAJugar">
          <Link className="btn_IrMenuPRnc" to="/">
            Ir al menu principal
          </Link>
          <p className="btn_VolverAJugar" onClick={resetGame}>
            Volver a intentar
          </p>
        </div>
      </div>
    </div>
  );
};

export default FinDelJuego;
