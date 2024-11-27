import React from "react";
import logo from "../../static/img/Logo de Bienestar.png";
import perfil from "../../static/img/perfil.png";
import calendario from "../../static/img/calendario.png"; 
import informes from "../../static/img/informes.png";
import programaciones from "../../static/img/programaciones.png";
import usuarios from "../../static/img/usuarios.png";
import cerrar_sesion from "../../static/img/cerrarSesion.png";
import { Link } from "react-router-dom";

function NavbarAdmin() {
  return ( 
    <div className="body-navbarAdmin">
      <header className="header-nav-admin">
        <img
          src={logo} 
          className="logo-navadmin-bienestar"
          alt="logo-bienestar"
        />
        <nav className="nav-admin">
          <ul className="ul-navadmin">
            <li className="li-navadmin">
              <Link
                to="/perfilAdmin"
                className="enlaceIcono-navadmin"
                href="ProfileAdmin.html"
                title="Perfil"
              >
                <img
                  src={perfil}
                  alt="Perfil"
                  className="icono"
                />
              </Link>
            </li>
            <li className="li-navadmin">
              <Link
                to="/CalendarioAdmin"
                className="enlaceIcono-navadmin"
                href="calendarioAdmin.html"
                title="Ver calendario"
              >
                <img
                  src={calendario}
                  alt="Calendario"
                  className="icono"
                />
              </Link>
            </li>
            <li className="li-navadmin">
              <Link
                to="/informes"
                className="enlaceIcono-navadmin"
                href="InformesAdmin.html"
                title="Informes"
              >
                <img
                  src={informes}
                  alt="Informes"
                  className="icono"
                />
              </Link>
            </li>
            <li className="li-navadmin">
              <Link
                to="/programacionAdmin"
                className="enlaceIcono-navadmin"
                href="Programacion.html"
                title="Programaciones"
              >
                <img
                  src={programaciones}
                  alt="Programaciones"
                  className="icono"
                />
              </Link>
            </li>
            <li className="li-navadmin">
              <Link
                to="/usuarios"
                className="enlaceIcono-navadmin"
                href="usuariosAdmin.html"
                title="Usuarios"
              >
                <img
                  src={usuarios}
                  alt="Usuarios"
                  className="icono"
                />
              </Link>
            </li>
          </ul>
        </nav>
        <div className="cerrarSesion">
          <Link
            to="/"
            className="cerrarSesion-navadmin" 
            href="cerrar_sesion" 
            title="Cerrar sesión"
          >
            <img src={cerrar_sesion} className="icono" alt="cerrar-sesion"/>
            Cerrar sesión
          </Link>
        </div>
      </header>
    </div>
  );
}

export default NavbarAdmin;
