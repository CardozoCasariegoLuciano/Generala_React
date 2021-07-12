import React from "react";
import {
  FaDiceOne,
  FaDiceTwo,
  FaDiceThree,
  FaDiceFour,
  FaDiceFive,
  FaDiceSix,
  FaDiceD6,
} from "react-icons/fa";
import "./estilos.scss";
import {
  isEscalera,
  isFull,
  isGenerala,
  isNumero,
  isPoker,
} from "./logicaDeJugadas";

export const convertirDado = (unNumero, unaClase) => {
  switch (unNumero) {
    case 0:
      return <FaDiceD6 className="dadoDefault" />;
    case 1:
      return <FaDiceOne className={"dado " + unaClase} />;
    case 2:
      return <FaDiceTwo className={"dado " + unaClase} />;
    case 3:
      return <FaDiceThree className={"dado " + unaClase} />;
    case 4:
      return <FaDiceFour className={"dado " + unaClase} />;
    case 5:
      return <FaDiceFive className={"dado " + unaClase} />;
    case 6:
      return <FaDiceSix className={"dado " + unaClase} />;

    default:
      break;
  }
};

export const getMaxCombination = (lista) => {
  let listaDeDados = lista.map((num) => Number(num));

  let ret = {
    puntos: 0,
    jugada: "",
    dados: listaDeDados,
  };

  const generala = 60;
  const poker = 40;
  const full = 30;
  const escalera = 20;

  if (isGenerala(listaDeDados)) {
    ret.puntos = generala;
    ret.jugada = "Generala";
  } else if (isPoker(listaDeDados)) {
    ret.puntos = poker;
    ret.jugada = "Poker";
  } else if (isFull(listaDeDados)) {
    ret.puntos = full;
    ret.jugada = "Full";
  } else if (isEscalera(listaDeDados)) {
    ret.puntos = escalera;
    ret.jugada = "Escalera";
  } else {
    ret.puntos = isNumero(listaDeDados);
    ret.jugada = "Numero";
  }

  return ret;
};

export const setDStyles = (undado, ind) => {
  let ret = "";
  let randPosition = Math.floor(Math.random() * 3) + 1;

  if (undado !== 0) {
    ret = `dado${ind}_${randPosition}`;
  }

  return ret;
};

export const dadosDelUser = (listaDeDados, cant) => {
  const ret = listaDeDados;

  for (let i = 0; i < cant; i++) {
    ret.pop();
  }

  return ret;
};

export const turnosRestantes = (game) =>
  getDificultad(game.dificultad).cantMaxTurno - game.historial.length;

export const puntosFaltantes = (game, user) =>
  getDificultad(game.dificultad).obejetivo - user.puntos;

export const getDificultad = (numero) => {
  const valor = Number(numero);

  const ret = {
    obejetivo: 0,
    cantMaxTurno: 0,
    dificuldat: "",
  };

  switch (valor) {
    case 1:
      ret.obejetivo = 150;
      ret.cantMaxTurno = 10;
      ret.dificuldat = "Facil";
      break;
    case 2:
      ret.obejetivo = 250;
      ret.cantMaxTurno = 10;
      ret.dificuldat = "Medio";
      break;
    case 3:
      ret.obejetivo = 400;
      ret.cantMaxTurno = 15;
      ret.dificuldat = "Dificil";
      break;
    case 4:
      ret.obejetivo = 550;
      ret.cantMaxTurno = 20;
      ret.dificuldat = "Imposible";
      break;

    default:
      ret.obejetivo = 999999;
      ret.cantMaxTurno = 999999;
      ret.dificuldat = "Infinito";
      break;
  }

  return ret;
};

export const toggleBtnUserStatus = (
  tiradasEnElTurno,
  historialLength,
  dadosSelecionadosLength
) => {
  const butTirar = document.getElementById("btn-tirar");
  const butFinalizar = document.getElementById("btn-finalizar");

  if (tiradasEnElTurno === 0 && historialLength < 2) {
    butTirar.classList.add("brillar");
  } else {
    butTirar.classList.remove("brillar");
  }

  if (tiradasEnElTurno >= 3 || dadosSelecionadosLength === 5) {
    butTirar.classList.add("disableBTN");
  } else {
    butTirar.classList.remove("disableBTN");
  }

  if (dadosSelecionadosLength === 0) {
    butFinalizar.classList.add("disableBTN");
  } else {
    butFinalizar.classList.remove("disableBTN");
  }
};

export const toggleBtnAreaDeJuego = (
  valoresGuardadosLength,
  dadosDeLaRonda
) => {
  const butGrd = document.getElementById("guardarDados");
  const butJugarMs = document.getElementById("jugarMesa");

  if (valoresGuardadosLength === 0) {
    butGrd.classList.add("disableBTN");
  } else {
    butGrd.classList.remove("disableBTN");
  }

  if (dadosDeLaRonda.every((elem) => elem === 0)) {
    butJugarMs.classList.add("disableBTN");
  } else {
    butJugarMs.classList.remove("disableBTN");
  }
};

export const chequeoDeTurnos = (cant) => {
  const contTurn = document.getElementById("ContadorDeTurnos");

  if (cant > 1) {
    switch (cant) {
      case 4:
        contTurn.classList.add("turnos3");
        break;
      case 3:
        contTurn.classList.remove("turnos3");
        contTurn.classList.add("turnos2");
        break;
      case 2:
        contTurn.classList.remove("turnos2");
        contTurn.classList.add("turnos1");
        break;

      default:
        contTurn.classList.remove("turnos1");
        contTurn.classList.remove("turnos2");
        contTurn.classList.remove("turnos3");
        break;
    }
  }
};
