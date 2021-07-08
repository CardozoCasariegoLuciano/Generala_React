import React from 'react';
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
        return <FaDiceOne className="dado" />;
      case 2:
        return <FaDiceTwo className="dado" />;
      case 3:
        return <FaDiceThree className="dado" />;
      case 4:
        return <FaDiceFour className="dado" />;
      case 5:
        return <FaDiceFive className="dado" />;
      case 6:
        return <FaDiceSix className="dado" />;

      default:
        return <FaDiceD6 className="dadoDefault" />;
    }
  };