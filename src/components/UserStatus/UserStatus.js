import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import GameContext from "../../context/gameContext";
import UserNameContext from "../../context/userContex";
import {
  chequeoDeTurnos,
  convertirDado,
  dadosDelUser,
  getDificultad,
  getMaxCombination,
  toggleBtnUserStatus,
  turnosRestantes,
} from "../../utils/functions";
import "./userStatus.scss";
import { ImArrowLeft2, ImArrowRight2 } from "react-icons/im";

const UserStatus = () => {
  const { user, setUser } = useContext(UserNameContext);
  const { game, setGame } = useContext(GameContext);

  const [showDice, setShowDice] = useState(false);

  useEffect(() => {
    toggleBtnUserStatus(
      game.tiradasEnElTurno,
      game.historial.length,
      user.dadosSelecionados.length
    );
  }, [game.tiradasEnElTurno, user.dadosSelecionados]); // eslint-disable-line react-hooks/exhaustive-deps

  const generarDados = () => {
    if (game.tiradasEnElTurno !== 3 && user.dadosSelecionados.length !== 5) {
      const datosgenerados = [0, 0, 0, 0, 0].map(
        (n) => Math.floor(Math.random() * 6) + 1
      );
      const guardarDados = dadosDelUser(
        datosgenerados,
        user.dadosSelecionados.length
      );

      setGame({
        ...game,
        dadosDeLaRonda: guardarDados,
        tiradasEnElTurno: game.tiradasEnElTurno + 1,
      });
    }
  };

  const sumarPuntos = () => {
    if (user.dadosSelecionados.length > 0) {
      const data = getMaxCombination(user.dadosSelecionados);

      setUser({
        ...user,
        puntos: user.puntos + data.puntos,
        dadosSelecionados: [],
      });

      setGame({
        ...game,
        dadosDeLaRonda: [0, 0, 0, 0, 0],
        historial: game.historial.concat([data]),
        tiradasEnElTurno: 0,
      });

      const turnosFaltantes = turnosRestantes(game);
      chequeoDeTurnos(turnosFaltantes);
    }
  };

  const handleClickDice = () => {
    setShowDice(!showDice);

    const dadosGuard = document.getElementById("dadosGuardados");
    dadosGuard.classList.toggle("mostrarDados");
  };

  return (
    <div className="userStatus">
      <div className="userStatusConteiner">
        <div className="jugadorYPuntos">
          <div className="nombreUsuario">
            <h3>
              Jugador: <span>{user.nombre}</span>
            </h3>
          </div>
          <div className="puntosUsuario">
            <h3>
              Puntos:{" "}
              <span>
                {user.puntos} / {getDificultad(game.dificultad).obejetivo}
              </span>
            </h3>
          </div>
        </div>

        <div className="headerTitle">
          <div className="seccionCentral">
            <Link to="/" className="salirBTN">
              salir
            </Link>
            <h1>Generala</h1>
            <Link to="/comojugar" className="comoJugar">
              Como jugar
            </Link>
          </div>
          <button
            className="btn_header btn-tirar"
            id="btn-tirar"
            onClick={generarDados}
          >
            Tirar {game.tiradasEnElTurno}/3
          </button>
          <button
            className="btn_header btn-finalizar"
            id="btn-finalizar"
            onClick={sumarPuntos}
          >
            Jugar mano
          </button>
        </div>

        <div className="dadosJuntados" id="dadosGuardados">
          <div className="titleSection">
            <h3>
              Dados <span>guardados</span>
            </h3>
            {showDice ? (
              <ImArrowRight2
                className="arrowDadosGuardados"
                onClick={handleClickDice}
              />
            ) : (
              <ImArrowLeft2
                className="arrowDadosGuardados"
                onClick={handleClickDice}
              />
            )}
          </div>

          <div className="dadosGuardados">
            <div className="siluetaDado">
              {convertirDado(Number(user.dadosSelecionados[0]), "dadoGuardado")}
            </div>
            <div className="siluetaDado">
              {convertirDado(Number(user.dadosSelecionados[1]), "dadoGuardado")}
            </div>
            <div className="siluetaDado">
              {convertirDado(Number(user.dadosSelecionados[2]), "dadoGuardado")}
            </div>
            <div className="siluetaDado">
              {convertirDado(Number(user.dadosSelecionados[3]), "dadoGuardado")}
            </div>
            <div className="siluetaDado">
              {convertirDado(Number(user.dadosSelecionados[4]), "dadoGuardado")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserStatus;
