import React from "react";
import { Link } from "react-router-dom";
import "./comoJugar.scss";

const ComoJugar = () => {
  return (
    <div className="ComoJugar">
      <div className="ComoJugar_conteiner">
        <Link className="btnVolverAlJuego" to="/juego">
          {" "}
          Volver al juego
        </Link>
        <div className="pasos">
          <ul>
            <li>oprima "Tirar" para lanzar los dados</li>
            <li>
              seleccione los dados que quiera conservar para la proxima ronda
            </li>
            <li>
              cuando ya tenga sus dados selecionados, presione en "Guardar
              dados" para pasar a la siguiente ronda
            </li>
            <li>
              Si ya tiene un juego en la mesa puede clickear en "Jugar mesa"
              para computar su jugada sin tener que guardase los dados
            </li>
          </ul>
        </div>
        <div className="masInfo">
          <p>
            Para mas informacion ingrese a{" "}
            <a rel="noreferrer"
              href="http://www.plastigal.com.ar/sites/default/files/reglamentos/reglamento-generala.pdf"
              target="_blank"
            >
              Reglas oficiales
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComoJugar;
