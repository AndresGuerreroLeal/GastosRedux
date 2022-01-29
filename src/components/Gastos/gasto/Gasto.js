import React from "react";
import {
  eliminarGastoAction,
  mostrarModalAction,
  obtenerGastoEditarAction,
} from "../../../actions/gastos";

import "./gasto.css";

import { useDispatch } from "react-redux";

import Ahorro from "../../images/ahorro.png";
import Comida from "../../images/comida.png";
import Viajes from "../../images/viaje.png";
import Auto from "../../images/auto.png";
import Transporte from "../../images/transporte.png";
import Salidas from "../../images/salidas.png";
import Ropa from "../../images/ropa.png";
import Educacion from "../../images/educacion.png";
import Otros from "../../images/otros.png";

const Iconos = {
  ahorro: Ahorro,
  comida: Comida,
  viajes: Viajes,
  auto: Auto,
  salidas: Salidas,
  transporte: Transporte,
  ropa: Ropa,
  educacion: Educacion,
  otros: Otros,
};

const Gasto = ({ gasto }) => {
  const dispatch = useDispatch();

  const handleEditar = (gasto) => {
    dispatch(obtenerGastoEditarAction(gasto));
    dispatch(mostrarModalAction());
  };

  return (
    <div className="container__gasto">
      <div className="info__gasto">
        <img src={Iconos[gasto.categoria]} />
        <div>
          <h2 className="nombre">{gasto.nombre}</h2>
          <p>Categoria: {gasto.categoria}</p>
        </div>
      </div>
      <div className="categoria">
        <p>Precio: </p>
        <span>${gasto.precio}</span>
      </div>
      <div className="acciones__gasto">
        <button
          className="button__gasto editar"
          onClick={() => handleEditar(gasto)}
        >
          Editar
        </button>
        <button
          className="button__gasto eliminar"
          onClick={() => dispatch(eliminarGastoAction(gasto.id))}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Gasto;
