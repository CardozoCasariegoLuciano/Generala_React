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
