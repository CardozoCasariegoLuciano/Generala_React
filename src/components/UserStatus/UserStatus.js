import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import GameContext from "../../context/gameContext";
import UserNameContext from "../../context/userContex";
import {
  convertirDado,
  dadosDelUser,
  getMaxCombination,
} from "../../utils/functions";
import "./userStatus.scss";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const UserStatus = () => {
  const { user, setUser } = useContext(UserNameContext);
  const { game, setGame } = useContext(GameContext);

  const [showDice, setShowDice] = useState(false);

  const generarDados = () => {
    const datosgenerados = [0, 0, 0, 0, 0].map(
      (n) => Math.floor(Math.random() * 6) + 1
    );
    const guardarDados = dadosDelUser(
      datosgenerados,
      user.dadosSelecionados.length
    );

    setGame({ ...game, dadosDeLaRonda: guardarDados });
  };

  const sumarPuntos = () => {
    const data = getMaxCombination(user.dadosSelecionados);

    console.log(data);

    setUser({
      ...user,
      puntos: user.puntos + data.puntos,
      dadosSelecionados: [],
    });

    setGame({ ...game, dadosDeLaRonda: [0, 0, 0, 0, 0] });
    setGame({ ...game, historial: game.historial.concat([data]) });
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
              Puntos: <span>{user.puntos}</span>
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
          <button className="btn_header btn-tirar" onClick={generarDados}>
            Tirar
          </button>
          <button className="btn_header btn-finalizar" onClick={sumarPuntos}>
            Finalizar turno
          </button>
        </div>

        <div className="dadosJuntados">
          <h3>
            Dados <span>guardados</span>
          </h3>
          {showDice ? (
            <IoIosArrowUp
              className="arrowDadosGuardados"
              onClick={handleClickDice}
            />
          ) : (
            <IoIosArrowDown
              className="arrowDadosGuardados"
              onClick={handleClickDice}
            />
          )}

          <div className="dadosGuardados" id="dadosGuardados">
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
