import React from "react";
import logo from "../../src/static/img/Logo de Bienestar.png";
import logonormal from "../../src/static/img/logo.png";

function Login1() {
  return (
    <div className="body-login">
      <div className="container-login">
        <header className="header-login">
          <div className="logo">
            <img src={logo} className="logobienestar" alt="Logo" />
          </div>
        </header>
        <div className="form-container-login">
          <form className="login-formulario" action="#">
            <img src={logonormal} className="logo2" alt="Logo" />
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="formLogin-label">
                Correo:
              </label>
              <input type="text" className="form-control-login" id="correo" />
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Contraseña:
              </label>
              <input type="password" className="form-control-login" id="contraseña" />
            </div>
            <button className="botonLogin-inicio" type="submit">
              <a className="enlace-inicio-login" href="inicioAdmin.html">Iniciar sesión</a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login1;
