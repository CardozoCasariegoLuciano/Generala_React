import React, { useContext, useEffect } from "react";
import AreaDeJuego from "../../components/AreaDeJuego/AreaDeJuego";
import FinDelJuego from "../../components/finDelJuego/FinDelJuego";
import Historial from "../../components/Historial/Historial";
import UserStatus from "../../components/UserStatus/UserStatus";
import FinContext from "../../context/finContext";
import GameContext from "../../context/gameContext";
import UserNameContext from "../../context/userContex";
import { chequeoDeTurnos, puntosFaltantes, turnosRestantes } from "../../utils/functions";
import "./Tablero.scss";

const Tablero = () => {
  const { user } = useContext(UserNameContext);
  const { game } = useContext(GameContext);
  const { isFin, setIsFin } = useContext(FinContext);

  useEffect(() => {
    fin();
    const turnosFaltantes = turnosRestantes(game);
    chequeoDeTurnos(turnosFaltantes);
  }, [user, game]); // eslint-disable-line react-hooks/exhaustive-deps

  const fin = () => {
    if (turnosRestantes(game) === 0) {
      setIsFin({ mostrar: true, isWin: false, style: "derrota" });
    } else if (puntosFaltantes(game, user) <= 0) {
      setIsFin({ mostrar: true, isWin: true, style: "victoria" });
    }
  };

  return (
    <div className="Tablero">     
      <FinDelJuego data={isFin}/>
      <UserStatus />
      <Historial />
      <div className="tableroContainer">
        <div className="areaDeJuego">
          <AreaDeJuego />
        </div>
      </div>
    </div>
  );
};

export default Tablero;
