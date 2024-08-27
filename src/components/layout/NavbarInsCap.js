import React from "react";
import { Link } from "react-router-dom";
import logo from "../../static/img/logo.png";
import perfil from "../../static/img/perfil.png";
import calendario from "../../static/img/calendario.png";
import informes from "../../static/img/informes.png";
import programaciones from "../../static/img/programaciones.png";
import usuarios from "../../static/img/usuarios.png";
import cerrar_sesion from "../../static/img/cerrarSesion.png";

function Navbarinscap () {
    return (
        <header>
        <img src={logo} className="logo" alt="logo" />
        <nav>
          <ul>
            <li>
              <Link href="ProfileAdmin.html" title="Perfil">
                <img
                  src={perfil}
                  alt="Perfil"
                  className="icono"
                />
              </Link>
            </li>
            <li>
              <Link href="calendarioAdmin.html" title="Ver calendario">
                <img
                  src={calendario}
                  alt="Calendario"
                  className="icono"
                />
              </Link>
            </li>
            <li>
              <Link href="InformesAdmin.html" title="Informes">
                <img
                  src={informes}
                  alt="Informes"
                  className="icono"
                />
              </Link>
            </li>
            <li>
              <Link href="#" title="Programaciones">
                <img
                  src={programaciones}
                  alt="Programaciones"
                  className="icono"
                />
              </Link>
            </li>
            <li>
              <Link href="usuariosAdmin.html" title="Usuarios">
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
          <Link href="#" title="Cerrar sesión">
            <img src={cerrar_sesion} className="icono" alt="cerrar_sesion" />
            Cerrar sesión
          </Link>
        </div>
      </header>
    );
};

export default Navbarinscap;