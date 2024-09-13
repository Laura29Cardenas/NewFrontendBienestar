import React from "react";
import { Link } from "react-router-dom";
import actividades from "../../static/img/actividades.png";

function NavbarInicio() {
  return (
    <div>
      <header className="encabezado-index">
        <div className="menu-index container-index">
          <Link to="#" className="logo-index">
            AVA
          </Link>
          <input type="checkbox" id="menu" />
          <label className="menu-label-index" htmlFor="menu">
            <img src={actividades} className="menu-icono" alt="actividades" />
          </label>
          <nav className="index-navbar">
            <ul className="ul-navIndex">
              <li className="li-navIndex">
                <Link className="enlace-iniciarsesion" to="/login">Iniciar Sesión</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header2-index container-index">
          <h1 className="titulo1-bienestar">Bienestar </h1>
        </div>
      </header>
    </div>
  );
};

export default NavbarInicio; 