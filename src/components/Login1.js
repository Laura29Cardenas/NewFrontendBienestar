import React, { useState } from "react";
import { login } from "../api/api"; // Importa la función de login que realiza la solicitud al backend
import logo from "../../src/static/img/Logo de Bienestar.png";
import logonormal from "../../src/static/img/logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login1() {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState("");
  const [mostrarContraseña, setMostrarContraseña] = useState(false); // Estado para mostrar/ocultar contraseña

  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita la recarga de la página

    try {
      const data = await login(correo, contraseña); // Llama a la API con los valores del formulario
      console.log("Inicio de sesión exitoso:", data);

      // Guardar el token en el almacenamiento local
      localStorage.setItem("token", data.token);

      // Dependiendo del rol, redireccionar a diferentes páginas
      const rol = data.user.rol; // Acceder al rol dentro de "user"

      if (rol === 1) {
        window.location.href = "/perfilAdmin";
      } else if (rol === 2) {
        window.location.href = "/profileUsua";
      } else if (rol === 3) {
        window.location.href = "/profileUsua";
      } else {
        setError("Rol no reconocido. Contacte con el administrador.");
      }
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
            <div className="mb-3 password-container">
              <label htmlFor="contraseña" className="form-label">
                Contraseña:
              </label>
              <div className="input-container">
                <input
                  type={mostrarContraseña ? "text" : "password"}
                  className="form-control-login"
                  id="contraseña"
                  value={contraseña}
                  onChange={(e) => setContraseña(e.target.value)}
                  required
                />
                <span
                  className="password-toggle-icon"
                  onClick={() => setMostrarContraseña(!mostrarContraseña)}
                >
                  {mostrarContraseña ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
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
