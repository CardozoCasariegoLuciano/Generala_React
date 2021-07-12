import React, { createContext, useState } from "react";

const FinContext = createContext();

const FinProvider = ({ children }) => {
  const [isFin, setIsFin] = useState({
    mostrar: false,
    isWin: false,
    style: "",
  });

  const data = { isFin, setIsFin };

  return <FinContext.Provider value={data}>{children}</FinContext.Provider>;
};

export { FinProvider };
export default FinContext;
