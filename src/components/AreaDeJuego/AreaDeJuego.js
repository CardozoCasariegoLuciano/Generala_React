import UserNameContext from "../../context/userContex";

import React, { useContext, useEffect, useState } from "react";
import {
  chequeoDeTurnos,
  convertirDado,
  getMaxCombination,
  setDStyles,
  toggleBtnAreaDeJuego,
  turnosRestantes,
} from "../../utils/functions";
import "./areaDeJuego.scss";
import "./dicePosition.scss";
import GameContext from "../../context/gameContext";

const AreaDeJuego = () => {
  const { user, setUser } = useContext(UserNameContext);
  const { game, setGame } = useContext(GameContext);

  const dadosGuardados = [];
  const valoresGuardados = [];

  const [dadosEnElTablero, setDadosEnElTablero] = useState([]);

  useEffect(() => {
    setDadosEnElTablero(game.dadosDeLaRonda);
    toggleBtnAreaDeJuego(valoresGuardados.length, game.dadosDeLaRonda);
  }, [game.dadosDeLaRonda]); // eslint-disable-line react-hooks/exhaustive-deps

  const selecionarDado = (undado, ind) => {
    if (undado !== 0) {
      const aDice = document.getElementById("dado" + ind);

      const valodDado = aDice.dataset.valor;

      if (dadosGuardados.includes(aDice)) {
        aDice.classList.remove("disableDice");
        const position = dadosGuardados.indexOf(aDice);
        dadosGuardados.splice(position, 1);

        const position2 = dadosGuardados.indexOf(valodDado);
        valoresGuardados.splice(position2, 1);
      } else {
        dadosGuardados.push(aDice);
        valoresGuardados.push(valodDado);
        aDice.classList.add("disableDice");
      }
      toggleBtnAreaDeJuego(valoresGuardados.length, game.dadosDeLaRonda);
    }
  };

  const guardadDados = () => {
    if (valoresGuardados.length !== 0) {
      setUser({
        ...user,
        dadosSelecionados: user.dadosSelecionados.concat(valoresGuardados),
      });

      setDadosEnElTablero([0, 0, 0, 0, 0]);

      setGame({
        ...game,
        dadosDeLaRonda: [0, 0, 0, 0, 0],
      });
    }
  };

  const jugarDeLaMesa = () => {
    if (!game.dadosDeLaRonda.every((elem) => elem === 0)) {
      const data = getMaxCombination(dadosEnElTablero);

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

      setDadosEnElTablero([0, 0, 0, 0, 0]);

      const turnosFaltantes = turnosRestantes(game);
      chequeoDeTurnos(turnosFaltantes);
    }
  };

  return (
    <div className="juego">
      <div className="btnsection">
        <div className="guardarDados" onClick={guardadDados} id="guardarDados">
          Guardar dados
        </div>

        <div className="ContadorDeTurnos" id="ContadorDeTurnos">
          Turnos restantes <br /> {turnosRestantes(game)}
        </div>

        <div className="jugarMesa" onClick={jugarDeLaMesa} id="jugarMesa">
          Jugar mesa
        </div>
      </div>

      <div className="areaDeDados">
        <div className="dadosSection">
          {dadosEnElTablero.map((undado, ind) => (
            <div
              className={setDStyles(undado, ind)}
              key={ind}
              id={`dado${ind}`}
              data-valor={undado}
              onClick={() => selecionarDado(undado, ind)}
            >
              {convertirDado(undado, "dadoTablero")}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AreaDeJuego;
