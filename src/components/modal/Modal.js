import React, { useEffect, useState } from "react";

import "./modal.css";

import cerrar from "../images/cerrar.svg";

import { useDispatch, useSelector } from "react-redux";

import {
  agregarGastoAction,
  editarGastoAction,
  mostrarAlertaAction,
  ocultarModalAction,
} from "../../actions/gastos";

import { v4 as uuid } from "uuid";

import { mostrarModalAction } from "../../actions/gastos";

const Modal = () => {
  const [gasto, setGasto] = useState({
    nombre: "",
    precio: "",
    categoria: "",
  });

  const dispatch = useDispatch();

  const gastoEditar = useSelector((state) => state.gastos.productoEditar);

  useEffect(() => {
    if (gastoEditar) {
      setGasto(gastoEditar);
    }
  }, []);

  const { nombre, precio, categoria } = gasto;

  const handleChange = (e) => {
    setGasto({
      ...gasto,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim() === "" || precio === "" || categoria.trim() === "") {
      return dispatch(
        mostrarAlertaAction("Todos los campos son obligatorios.")
      );
    }

    if (gastoEditar) {
      dispatch(editarGastoAction(gasto));
    } else {
      gasto.id = uuid();

      dispatch(agregarGastoAction(gasto));
    }

    setGasto({
      nombre: "",
      precio: "",
      categoria: "",
    });

    dispatch(ocultarModalAction());
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img
          src={cerrar}
          alt="boton cerrar"
          onClick={() => dispatch(ocultarModalAction())}
        />
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Nuevo Gasto</h2>
        <div className="form__campo">
          <label htmlFor="nombre">Nombre </label>
          <input
            type="text"
            placeholder="Nombre de la compra"
            name="nombre"
            id="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>
        <div className="form__campo">
          <label htmlFor="precio">Precio </label>
          <input
            type="number"
            placeholder="Precio de la compra"
            name="precio"
            id="precio"
            value={precio}
            onChange={handleChange}
          />
        </div>

        <div className="form__campo">
          <label htmlFor="categoria">Categoria </label>
          <select
            id="categoria"
            name="categoria"
            value={categoria}
            onChange={handleChange}
          >
            <option value="">--Seleccione Categoria--</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="viajes">Viajes</option>
            <option value="auto">Auto</option>
            <option value="transporte">Transporte</option>
            <option value="salidas">Salidas</option>
            <option value="ropa">Ropa</option>
            <option value="educacion">Educacion</option>
            <option value="otros">Otros</option>
          </select>
        </div>

        <div className="form__campo">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Modal;
