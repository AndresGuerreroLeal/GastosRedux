import React, { useEffect, useState } from "react";
import Add from "../add/Add";

import Gastos from "../Gastos/Gastos";

import "./home.css";

import { useDispatch, useSelector } from "react-redux";
import { costoTotalAction, filtrosAction } from "../../actions/gastos";

const Home = () => {
  const gastos = useSelector((state) => state.gastos.gastos);
  const total = useSelector((state) => state.gastos.totalGastos);

  const dispatch = useDispatch();

  const handleFiltro = (e) => {
    dispatch(filtrosAction(e.target.value));
  };

  useEffect(() => {
    if (gastos.length > 0) {
      dispatch(costoTotalAction());
    }
  }, [gastos]);

  return (
    <main className="container main">
      {gastos.length ? (
        <div className="main__info">
          <div>
            <h2>
              Costo total: $<strong>{total}</strong>
            </h2>
            <p>Total de gastos: {gastos.length}</p>
          </div>
          <div>
            <select id="categoria" name="categoria" onChange={handleFiltro}>
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
        </div>
      ) : null}

      <Gastos />

      <Add />
    </main>
  );
};

export default Home;
