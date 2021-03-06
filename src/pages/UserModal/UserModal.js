import React, { useContext, useState } from "react";
import "./userModal.scss";
import { useHistory } from "react-router";
import UserNameContext from "../../context/userContex";
import GameContext from "../../context/gameContext";
import { ImUser, ImUsers } from "react-icons/im";
import FinContext from "../../context/finContext";

const UserModal = () => {
  const { setUser } = useContext(UserNameContext);
  const { setGame } = useContext(GameContext);
  const { setIsFin } = useContext(FinContext);
  const history = useHistory();
  const [gamedata, setGamedata] = useState({
    name: "",
    dificultad: "1",
  });

  const handleChange = (e) => {
    setGamedata({ ...gamedata, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (gamedata.name === "") {
      setUser({ puntos: 0, dadosSelecionados: [], nombre: "Jugador 1" });
    } else {
      setUser({ puntos: 0, dadosSelecionados: [], nombre: gamedata.name });
    }

    setGame({
      dadosDeLaRonda: [0, 0, 0, 0, 0],
      historial: [],
      tiradasEnElTurno: 0,
      dificultad: gamedata.dificultad,
    });

    setIsFin({ mostrar: false, isWin: false, style: "" });

    history.push("/juego");
  };

  const multiplayer = () => {

    const multiplayetBTN = document.getElementById("multiplayer")

    multiplayetBTN.classList.toggle("mostrarEtiqueta")

    console.log(multiplayetBTN)


  }

  return (
    <div className="UserModal">
      <div className="userModalConteiner">
        <div className="players">
          <div className="singlePLayer">
            <ImUser />
          </div>
          <div className="twoPLayers" id="multiplayer" onClick={multiplayer}>
            <ImUsers />
            <p className="etiqueta_texto">Proximamente</p>
          </div>
        </div>

        <div className="formConteiner">
          <form action="" onSubmit={handleSubmit}>
            <h3>Generala</h3>
            <label htmlFor="nombre">Ingresa tu nombre</label>
            <input
              type="text"
              placeholder="ingresa tu nombre"
              id="nombre"
              name="name"
              value={gamedata.name}
              onChange={handleChange}
            />

            <label htmlFor="dificultad">Elija una dificultad</label>
            <select
              name="dificultad"
              id="dificultad"
              value={gamedata.dificultad}
              onChange={handleChange}
            >
              <option value={1}>Facil</option>
              <option value={2}>Media</option>
              <option value={3}>Dificil</option>
              <option value={4}>Imposible</option>
            </select>

            <button type="submit">Iniciar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
