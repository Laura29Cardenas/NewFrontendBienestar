import React from "react";
import { Link } from "react-router-dom";
import actividades from "../../static/img/actividades.png";

function NavbarInicio() {
  return (
    <div>
      <header className="header">
        <div className="menu container">
          <Link to="#" className="logo">
            AVA
          </Link>
          <input type="checkbox" id="menu" />
          <label htmlFor="menu">
            <img src={actividades} className="menu-icono" alt="actividades" />
          </label>
          <nav className="navbar">
            <ul>
              <li>
                <Link to="#">Iniciar Sesión</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-content container">
          <h1>Bienestar </h1>
        </div>
      </header>
    </div>
  );
};

export default NavbarInicio;