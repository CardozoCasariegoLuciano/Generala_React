import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AreaDeJuego from "../../components/AreaDeJuego/AreaDeJuego";
import UserStatus from "../../components/UserStatus/UserStatus";
import UserNameContext from "../../context/userContex";
import { getMaxCombination } from "../../utils/functions";

import "./Tablero.scss";

const Tablero = () => {
  const { user, setUser } = useContext(UserNameContext);
  const [dados, setDados] = useState([0, 0, 0, 0, 0]);

  const generarDados = () => {
    const datosgenerados = [0, 0, 0, 0, 0].map(
      (n) => Math.floor(Math.random() * 6) + 1
    );
    const guardarDados = dadosDelUser(datosgenerados);

    setDados(guardarDados);
  };

  const dadosDelUser = (listaDeDados) => {
    const ret = listaDeDados;

    for (let i = 0; i < user.dadosSelecionados.length; i++) {
      ret.pop();
    }

    return ret;
  };

  const sumarPuntos = () => {
    const data = getMaxCombination(user.dadosSelecionados );

    console.log(data);

    setUser({
      ...user,
      puntos: user.puntos + data.puntos,
      dadosSelecionados: [],      
    });

    setDados([0, 0, 0, 0, 0]);
  };

  return (
    <div className="Tablero">
      <div className="datosDelUsuario">
        <Link to="/comojugar" className="comoJugar">
          Como jugar
        </Link>
        <UserStatus />
        <button className="btn_tirarDados" onClick={generarDados}>
          Tirar
        </button>

        <button className="btn_tirarDados" onClick={sumarPuntos}>
          Finalizar turno
        </button>
      </div>

      <div className="areaDeJuego">
        <AreaDeJuego dados={dados} />
      </div>
    </div>
  );
};

export default Tablero;
