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

        {/* REGLAS */}
        <div className="reglas">
          <h3>Juegos:</h3>        

          <ul>
            <li><span className="CJ_jugada">Generala:</span> (cinco de un mismo número). <span className="CJ_puntos">Otorga 60 puntos</span></li>
            <li><span className="CJ_jugada"> Poker:</span> (cuatro de un mismo número).  <span className="CJ_puntos">Otorga 40 puntos</span></li>
            <li><span className="CJ_jugada">Full:</span> (tres de un mismo número y un par).  <span className="CJ_puntos">Otorga 30 puntos.</span></li>
            <li>
            <span className="CJ_jugada">Escalera:</span> Se considera escalera del 1 al 5 o del 2 al 6.  <span className="CJ_puntos">Otorga 20
              puntos.</span>
            </li>
            <li>
              {" "}
              <span className="CJ_jugada">Número:</span> Dados iguales del mismo número.  <span className="CJ_puntos">Se suma el
              valor de los dados.</span>
            </li>
          </ul>
        </div>

        {/* PASOS */}
        <div className="pasos">
          <h3>Pasos:</h3>
          <ul>
            <li>
              oprima <span className="palabraMarcada">Tirar</span> para lanzar
              los dados
            </li>
            <li>
              seleccione los dados que quiera conservar para la proxima ronda
            </li>
            <li>
              cuando ya tenga sus dados selecionados, presione en{" "}
              <span className="palabraMarcada">Guardar dados</span> para pasar a
              la siguiente ronda
            </li>
            <li>
              Si ya tiene un juego en la mesa puede clickear en{" "}
              <span className="palabraMarcada">Jugar mesa </span>
              para computar su jugada sin tener que guardase los dados
            </li>
            <li>
              Si ya tiene un juego entre sus dados guardados precione
              <span className="palabraMarcada"> Jugar mano</span> para
              computar su jugada
            </li>
          </ul>
        </div>

        {/* COMO GANAR */}
        <div className="ComoGanar">
          <h3> Como ganar:</h3>        

         
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit modi tenetur voluptate ipsum. Quidem alias dignissimos a recusandae corrupti deleniti voluptatum itaque vitae cupiditate, expedita debitis accusamus consequatur, nesciunt fugiat!</p>
        </div>

        {/* MAS INFO */}
        <div className="masInfo">
          <p>
            Para mas informacion ingrese a{" "}
            <a
              rel="noreferrer"
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
