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

export const convertirDado = (unNumero) => {
  switch (unNumero) {
    case 1:
      return <FaDiceOne className="dado marcado" />;
    case 2:
      return <FaDiceTwo className="dado marcado" />;
    case 3:
      return <FaDiceThree className="dado marcado" />;
    case 4:
      return <FaDiceFour className="dado marcado" />;
    case 5:
      return <FaDiceFive className="dado marcado" />;
    case 6:
      return <FaDiceSix className="dado marcado" />;

    default:
      return <FaDiceD6 className="dadoDefault" />;
  }
};

export const getMaxCombination = (listaDeDados) => {
  let ret = {
    puntos: 0,
    jugada: "",
  };

  console.log(listaDeDados);

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

//Logica de jugadas
const isGenerala = (listaDeDados) => {
  const ret = hayXiguals(listaDeDados[0], 5, listaDeDados).cumple;

  return ret;
};

const isPoker = (listaDeDados) => {
  let ret = false;

  listaDeDados.forEach((dado) => {
    ret = ret || hayXiguals(dado, 4, listaDeDados).cumple;
  });

  return ret;
};

const isFull = (listaDeDados) => {
  const obj = {
    cumple: false,
    numero: 0,
  };

  listaDeDados.forEach((dado) => {
    obj.cumple = obj.cumple || hayXiguals(dado, 3, listaDeDados).cumple;

    if (hayXiguals(dado, 3, listaDeDados).cumple) {
      obj.numero = hayXiguals(dado, 3, listaDeDados).num;
    }
  });

  const ret = obj.cumple && hayPar(obj.numero, listaDeDados);

  return ret;
};

const isEscalera = (listaDeDados) => {
  let ret = false;

  const condicion =
    (listaDeDados.includes(1) &&
      listaDeDados.includes(2) &&
      listaDeDados.includes(3) &&
      listaDeDados.includes(4) &&
      listaDeDados.includes(5)) ||
    (listaDeDados.includes(2) &&
      listaDeDados.includes(3) &&
      listaDeDados.includes(4) &&
      listaDeDados.includes(5) &&
      listaDeDados.includes(6));

  if (condicion) {
    ret = true;
  }

  return ret;
};

const isNumero = (listaDeDados) => {
  let ret = 0;

  const listaDeRepetidos = repetidosLS(listaDeDados);

  listaDeRepetidos.forEach((elem) => {
    ret += elem;
  });

  return ret;
};

//Aux
const hayXiguals = (dadoSeleccionado, cantRepetidos, listaDeDados) => {
  let result = {
    cant: 0,
    num: 0,
    cumple: false,
  };

  listaDeDados.forEach((dado) => {
    if (dado === dadoSeleccionado) {
      result.cant++;
    }
  });

  result.cumple = result.cant === cantRepetidos;
  result.num = dadoSeleccionado;

  return result;
};

const repetidosLS = (listaDeDados) => {
  let ret = [];

  const lista = listaDeDados.sort();

  let primero = lista.shift();

  while (lista.length > 0) {
    if (lista[0] === primero) {
      const repetidos = todosIguales(primero, lista);

      ret = ret.concat(repetidos);

      for (let i = 0; i < repetidos.length; i++) {
        primero = lista.shift();
      }
    } else {
      primero = lista.shift();
    }
  }

  return ret;
};

const todosIguales = (primero, lista) => {
  let ret = [primero];

  lista.forEach((elem) => {
    if (elem === primero) {
      ret.push(elem);
    }
  });

  return ret;
};

const hayPar = (unNumero, unaLista) => {
  const resltado = unaLista.filter((elem) => elem !== unNumero);

  const ret = resltado.filter((elem) => elem % 2 === 0);

  return ret.length > 0;
};
