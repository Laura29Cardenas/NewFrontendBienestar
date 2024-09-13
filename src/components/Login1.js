import React, { useState } from "react";
import { login } from "./api"; // Importa la función de login que realiza la solicitud al backend
import logo from "../../src/static/img/Logo de Bienestar.png";
import logonormal from "../../src/static/img/logo.png";

function Login1() {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita la recarga de la página

    try {
      const data = await login(correo, contraseña); // Llama a la API con los valores del formulario
      console.log("Inicio de sesión exitoso:", data);

      // Guardar el token en el almacenamiento local o session storage si es necesario
      localStorage.setItem("token", data.token);

      // Redirecciona a la página de inicio del administrador
      window.location.href = "/inicioAdmin";
    } catch (err) {
      console.error("Error de inicio de sesión:", err);
      setError("Correo o contraseña incorrectos. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="body-login">
      <div className="container-login">
        <header className="header-login">
          <div className="logo">
            <img src={logo} className="logobienestar" alt="Logo" />
          </div>
        </header>
        <div className="form-container-login">
          <form className="login-formulario" onSubmit={handleSubmit}>
            <img src={logonormal} className="logo2" alt="Logo" />
            <div className="mb-3">
              <label htmlFor="correo" className="formLogin-label">
                Correo:
              </label>
              <input
                type="email"
                className="form-control-login"
                id="correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="contraseña" className="form-label">
                Contraseña:
              </label>
              <input
                type="password"
                className="form-control-login"
                id="contraseña"
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
                required
              />
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button className="botonLogin-inicio" type="submit">
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login1;
