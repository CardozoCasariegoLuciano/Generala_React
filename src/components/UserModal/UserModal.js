import React, { useContext, useState } from "react";
import "./userModal.scss";
import { useHistory } from "react-router";
import UserNameContext from "../../context/userContex";

const UserModal = () => {
  const { setName } = useContext(UserNameContext);
  const history = useHistory();
  const [userName, setUserName] = useState("");

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(userName === ""){
        setName("Jugador anonimo")
    }else{
        setName(userName)
    }
    
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
