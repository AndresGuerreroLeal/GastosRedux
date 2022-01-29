import React, { useState } from "react";

import user from "../images/user.png";

import "./header.css";

const Header = () => {
  return (
    <header className="container header">
      <h1>Control de Gastos</h1>
      <div className="perfil">
        <p>Andres Guerrero</p>
        <div className="perfil__avatar">
          <img src={user} alt="avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
