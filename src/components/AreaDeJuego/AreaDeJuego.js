import UserNameContext from "../../context/userContex";

import React, { useContext, useEffect, useState } from "react";
import { convertirDado, getMaxCombination } from "../../utils/functions";
import "./areaDeJuego.scss";
import "./dicePosition.scss";

const AreaDeJuego = ({ dados }) => {
  const { user, setUser } = useContext(UserNameContext);

  const [dadosEnElTablero, setDadosEnElTablero] = useState([]);

  useEffect(() => {
    setDadosEnElTablero(dados);
  }, [dados]);

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

  const setDStyles = (undado, ind) => {
    let ret = "";
    let randPosition = Math.floor(Math.random() * 3) + 1;

    if (undado !== 0) {
      ret = `dado${ind}_${randPosition}`;
    }

    return ret;
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
