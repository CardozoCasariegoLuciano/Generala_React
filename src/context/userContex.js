import React, { createContext, useState } from "react";

const UserNameContext = createContext();

const UserNameProvider = ({ children }) => {   

  const [name, setName] = useState("");  

  const data = { name, setName};

  return <UserNameContext.Provider value={data}>{children}</UserNameContext.Provider>;
};

export { UserNameProvider };
export default UserNameContext;