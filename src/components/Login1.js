import React, { useState } from "react";
import logo from "../../src/static/img/Logo de Bienestar.png";
import logonormal from "../../src/static/img/logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login1() {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState("");
  const [mostrarContraseña, setMostrarContraseña] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!correo || !contraseña) {
        setError("Por favor, complete todos los campos.");
        return;
    }

    console.log('Correo:', correo);
    console.log('Contraseña:', contraseña);


    try {
        const response = await fetch('http://localhost:7777/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ correo: correo, contraseña: contraseña }), // Verifica que estos nombres coincidan con lo que espera el backend
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Inicio de sesión exitoso:', data);
            // Aquí puedes redirigir o manejar el inicio de sesión exitoso
        } else {
            const errorData = await response.json();
            setError(errorData.message || 'Error en el inicio de sesión.'); // Muestra el mensaje de error
            console.error('Error de inicio de sesión:', errorData.message);
        }
    } catch (error) {
        setError('Error en el envío del formulario.');
        console.error('Error en el envío del formulario:', error);
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
                onChange={(e) => setCorreo(e.target.value)} // Asegúrate de que esto esté funcionando
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
