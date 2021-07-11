import React, { createContext, useState } from "react";

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const [game, setGame] = useState({
    dadosDeLaRonda: [0, 0, 0, 0, 0],
    historial: [],
    tiradasEnElTurno: 0,
    dificultad: "1"
  });

  const data = { game, setGame };

  return <GameContext.Provider value={data}>{children}</GameContext.Provider>;
};

export { GameProvider };
export default GameContext;
