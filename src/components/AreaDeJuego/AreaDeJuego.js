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

  const [dadosEnElTablero, setDadosEnElTablero] = useState([]);

  useEffect(() => {
    setDadosEnElTablero(game.dadosDeLaRonda);
  }, [game.dadosDeLaRonda]);

  const dadosGuardados = [];
  const valoresGuardados = [];

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
    }
  };

  const guardadDados = () => {
    if (valoresGuardados.length !== 0) {
      setUser({
        ...user,
        dadosSelecionados: user.dadosSelecionados.concat(valoresGuardados),
      });

      setDadosEnElTablero([0, 0, 0, 0, 0]);
    }
  };

  const jugarDeLaMesa = () => {
    const data = getMaxCombination(dadosEnElTablero);

    console.log(data);

    setUser({
      ...user,
      puntos: user.puntos + data.puntos,
      dadosSelecionados: [],
    });

    setGame({ ...game, historial: game.historial.concat([data]) });

    setDadosEnElTablero([0, 0, 0, 0, 0]);
  };

  return (
    <div className="juego">
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
      <div className="btnsection">
        <div className="guardarDados" onClick={guardadDados}>
          Guardar dados
        </div>

        <div className="jugarMesa" onClick={jugarDeLaMesa}>
          Jugar mesa
        </div>
      </div>
    </div>
  );
};

export default AreaDeJuego;
