import React, { useContext } from "react";
import UserNameContext from "../../context/userContex";
import "./userStatus.scss";

const UserStatus = () => {
  const { user } = useContext(UserNameContext);  

  return (
    <div className="userStatus">
      <div className="nombreUsuario">
        <h3>Jugador:</h3>
        <p>{user.nombre}</p>
      </div>

      <div className="puntosUsuario">
        <h3>Puntos:</h3>
        <p>{user.puntos}</p>
      </div>

      <div className="dadosJuntados">
        <h3>Dados:</h3>
        <div className="dadosGuardados">
          {user.dadosSelecionados.map((elem, ind) => (
            <div className="siluetaDado" key={ind}>
              {elem}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserStatus;
