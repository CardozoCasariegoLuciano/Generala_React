import React, { useContext, useState } from "react";
import "./userModal.scss";
import { useHistory } from "react-router";
import UserNameContext from "../../context/userContex";
import GameContext from "../../context/gameContext";

const UserModal = () => {
  const { setUser } = useContext(UserNameContext);
  const { setGame } = useContext(GameContext);
  const history = useHistory();
  const [userName, setUserName] = useState("");

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userName === "") {
      setUser({ puntos: 0, dadosSelecionados: [], nombre: "Jugador anonimo" });
    } else {
      setUser({ puntos: 0, dadosSelecionados: [], nombre: userName });
    }

    setGame({
      dadosDeLaRonda: [0, 0, 0, 0, 0],
      historial: [],
      tiradasEnElTurno: 0,
    });

    history.push("/juego");
  };

  return (
    <div className="UserModal">
      <div className="userModal-formConteiner">
        <form onSubmit={handleSubmit}>
          <label htmlFor="userName">Cual es tu nombre?</label>
          <input
            type="text"
            id="userName"
            placeholder="Escribe aqui tu nombre"
            onChange={handleChange}
            value={userName}
          />
          <button type="submit">Jugar!!</button>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
