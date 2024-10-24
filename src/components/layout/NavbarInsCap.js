import React from "react";
import { Link } from "react-router-dom";
import logo from "../../static/img/Logo de Bienestar.png";
import perfil from "../../static/img/perfil.png";
import calendario from "../../static/img/calendario.png";
import programaciones from "../../static/img/programaciones.png";
import cerrar_sesion from "../../static/img/cerrarSesion.png";
 
function Navbarinscap() {
  return (
    <div className="body-navbarUsuario">
      <header className="header-navusuario">
        <img src={logo} className="logoBienestar-navUsuario" alt="logo" />
        <nav className="navbar-usuario">
          <ul className="ul-nav-usuario"> 
            <li className="li-navUsuario">
              <Link
                to="/calendariousua"
                href="calendarioUsua.html"
                title="Ver calendario"
                className="enlace-navUsuario"
              >
                <img src={calendario} alt="Calendario" className="icono" />
                Calendario
              </Link>
            </li>
            <li className="li-navUsuario">
              <Link 
                to="/profileUsua"
                className="enlace-navUsuario" 
                href="profileUsua.html" 
                title="Perfil">
                <img src={perfil} alt="Perfil" className="icono" />
                Perfil
              </Link>
            </li>
            <li className="li-navUsuario">
              <Link 
                to="/programacionesUsua"
                className="enlace-navUsuario" 
                href="programacionUsua.html" 
                title="Programaciones">
                <img
                  src={programaciones}
                  alt="Programaciones"
                  className="icono"
                />
                Programaciones
              </Link>
            </li>
          </ul>
        </nav>
        <div className="cerrarSesion">
          <Link 
            to="/"
            className="enlaceCerrar-navUsuario" 
            href="#" 
            title="Cerrar sesión">
            <img src={cerrar_sesion} className="icono" alt="cerrar_sesion" />
            Cerrar sesión
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Navbarinscap;