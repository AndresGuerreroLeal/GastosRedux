import React from "react";
import { useSelector } from "react-redux";
import Gasto from "./gasto/Gasto";

import "./gastos.css";

const Gastos = () => {
  const gastos = useSelector((state) => state.gastos.gastos);
  const gastosFiltrados = useSelector((state) => state.gastos.gastosFiltrados);
  const filtro = useSelector((state) => state.gastos.filtro);


  return (
    <div className="main__gastos">
      {!filtro ? (
        <>
          {!gastos.length ? (
            <p className="gastos__mensaje">Añade un nuevo gasto.</p>
          ) : (
            gastos.map((gasto) => <Gasto gasto={gasto} key={gasto.id} />)
          )}
        </>
      ) : (
        <>
          {gastosFiltrados.length ? (
            gastosFiltrados.map((gasto) => (
              <Gasto gasto={gasto} key={gasto.id} />
            ))
          ) : (
            <p className="gastos__mensaje">
              No se encontro ningun gasto con la categoria {filtro}.
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default Gastos;
