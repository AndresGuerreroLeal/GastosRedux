import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mostrarModalAction } from "../../actions/gastos";

import add from "../images/add.png";
import Modal from "../modal/Modal";

import "./add.css";

const Add = () => {
  const modal = useSelector((state) => state.gastos.modal);

  const dispatch = useDispatch();

  return (
    <>
      <div className="main__añadir">
        <img
          src={add}
          alt="boton agregar"
          onClick={() => dispatch(mostrarModalAction())}
        />
      </div>
      {modal && <Modal />}
    </>
  );
};

export default Add;
