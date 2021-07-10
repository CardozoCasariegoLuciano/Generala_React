import React, { createContext, useState } from "react";

const UserNameContext = createContext();

const UserNameProvider = ({ children }) => {
  const [user, setUser] = useState({
    nombre: "",
    puntos: 0,
    dadosSelecionados: [],
  });

  const data = { user, setUser };

  return (
    <UserNameContext.Provider value={data}>{children}</UserNameContext.Provider>
  );
};

export { UserNameProvider };
export default UserNameContext;
