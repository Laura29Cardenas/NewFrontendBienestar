import React from "react";
import { Link } from "react-router-dom";
import logo from "../../static/img/Logo de Bienestar.png";
import perfil from "../../static/img/perfil.png";
import calendario from "../../static/img/calendario.png";
import programaciones from "../../static/img/programaciones.png";
import cerrar_sesion from "../../static/img/cerrarSesion.png";

function Navbarinscap () {
    return (
  <div>
  <header>
    <img src= {logo} className="logo" alt="logo" />
    <nav>
      <ul>
        <li><Link href="calendarioUsua.html" title="Ver calendario" className="active"><img src= {calendario} alt="Calendario" className="icono" />Calendario</Link></li>
        <li><Link href="profileUsua.html" title="Perfil"><img src= {perfil} alt="Perfil" className="icono" />Perfil</Link></li>
        <li><Link href="programacionUsua.html" title="Programaciones"><img src={programaciones} alt="Programaciones" className="icono" />Programaciones</Link></li>
      </ul>
    </nav>
    <div className="cerrarSesion">
      <Link href="#" title="Cerrar sesión"><img src= {cerrar_sesion} className="icono" alt="cerrar_sesion"/>Cerrar sesión</Link>
    </div>
  </header>
</div>

    );
};

export default Navbarinscap;