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
        <h3>Dados guardados:</h3>
        <div className="dadosGuardados">         
          <div className="siluetaDado">
              {user.dadosSelecionados[0]}
            </div>
            <div className="siluetaDado">
            {user.dadosSelecionados[1]}
            </div>
            <div className="siluetaDado">
            {user.dadosSelecionados[2]}
            </div>
            <div className="siluetaDado">
            {user.dadosSelecionados[3]}
            </div>
            <div className="siluetaDado">
            {user.dadosSelecionados[4]}
            </div>
        </div>
      </div>
    </div>
  );
};

export default UserStatus;
