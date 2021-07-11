import UserNameContext from "../../context/userContex";

import React, { useContext, useEffect, useState } from "react";
import {
  convertirDado,
  getMaxCombination,
  setDStyles,
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
  const [selectDice, setselectDice] = useState(false);

  useEffect(() => {
    setDadosEnElTablero(game.dadosDeLaRonda);

    toggleBtn();
  }, [game.dadosDeLaRonda]);

  const toggleBtn = () => {
    const butGrd = document.getElementById("guardarDados");
    const butJugarMs = document.getElementById("jugarMesa");

    if (valoresGuardados.length === 0) {
      butGrd.classList.add("disableBTN");
    } else {
      butGrd.classList.remove("disableBTN");
    }

    if (game.dadosDeLaRonda.every((elem) => elem === 0)) {
      butJugarMs.classList.add("disableBTN");
    } else {
      butJugarMs.classList.remove("disableBTN");
    }
  };

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
      toggleBtn();
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
        dadosDeLaRonda: [0, 0, 0, 0, 0],
        historial: game.historial.concat([data]),
        tiradasEnElTurno: 0,
      });

      setDadosEnElTablero([0, 0, 0, 0, 0]);
    }
  };

  return (
    <div className="juego">
      <div className="btnsection">
        <div className="guardarDados" onClick={guardadDados} id="guardarDados">
          Guardar dados
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
