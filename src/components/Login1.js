import React, { useState } from "react";
import logo from "../../src/static/img/Logo de Bienestar.png";
import logonormal from "../../src/static/img/logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom"; // Importar useNavigate para redirección

function Login1() {
  const [correo, setCorreo] = useState(""); // Almacena el valor del input de correo
  const [contraseña, setContraseña] = useState(""); // Almacena el valor del input de contraseña
  const [error, setError] = useState(""); // Almacena mensajes de error
  const [mostrarContraseña, setMostrarContraseña] = useState(false); // Alterna entre mostrar/ocultar la contraseña
  const navigate = useNavigate(); // Hook para redirección

  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita la recarga de página

    // Validar que los campos no estén vacíos
    if (!correo || !contraseña) {
      setError("Por favor, ingrese su correo y contraseña.");
      return;
    }

    try {
      const response = await fetch("http://localhost:7777/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ correo, contraseña }), // Enviar correo y contraseña
      });

      const data = await response.json();

      if (!response.ok) {
        // Manejo de errores del servidor
        setError(data.message || "Error desconocido al iniciar sesión.");
        return;
      }

      console.log("Inicio de sesión exitoso:", data);

      // Guardar datos del usuario (como el rol) en localStorage
      localStorage.setItem("rol", data.rol); // Almacenar el rol
      localStorage.setItem("token", data.token); // Almacenar el token si es necesario

      // Redirigir según el rol
      if (data.rol === "administrador") {
        navigate("/perfilAdmin"); // Redirige al perfil del administrador
      } else if (data.rol === "usuario") {
        navigate("/profileUsua"); // Redirige al perfil del usuario
      } else {
        setError("Rol no reconocido. Contacta al administrador.");
      }
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
      setError("Ocurrió un error inesperado. Intenta nuevamente.");
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
                onChange={(e) => setCorreo(e.target.value)} // Controla el valor con useState
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
                  onChange={(e) => setContraseña(e.target.value)} // Controla el valor con useState
                  required
                />
                <span
                  className="password-toggle-icon"
                  onClick={() => setMostrarContraseña(!mostrarContraseña)} // Alterna la visibilidad
                >
                  {mostrarContraseña ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>} {/* Muestra errores aquí */}
            <button className="botonLogin-inicio" type="submit">
              Iniciar sesión
            </button>
            <Link className="link-volver" to="/">
              Volver
            </Link>
            <Link className="link-clave" to="/RestaurarClave">
              ¿Olvidaste tu contraseña?
            </Link>
          </form>
        </div>
      </div> 
    </div>
  );
}

export default Login1;

