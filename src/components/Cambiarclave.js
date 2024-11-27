import React, { useState } from "react";
import { Link } from "react-router-dom"; // Para navegación
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Librería de íconos

function CambiarClave() {
  const [email, setEmail] = useState("");
  const [temporaryPassword, setTemporaryPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showTemporaryPassword, setShowTemporaryPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !temporaryPassword || !password || !confirmPassword) {
      setMessage("Todos los campos son obligatorios.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Las contraseñas no coinciden.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:7777/api/cambiar-clave`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          temporaryPassword,
          newPassword: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Contraseña actualizada con éxito.");
      } else {
        setMessage(data.message || "Error al cambiar la contraseña.");
      }
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
      setMessage("Error interno del servidor.");
    }
  };

  const toggleShowTemporaryPassword = () => {
    setShowTemporaryPassword(!showTemporaryPassword);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="container-form-cambio-clave">
      <div className="caja-form">
        <h1 className="titulo-principal">SENA</h1>
        <p className="subtitulo-clave">Cambiar Contraseña</p>
        <p className="text-clave">
          Por favor, ingrese su correo, clave temporal, nueva contraseña y
          confírmela.
        </p>
        <p id="message" className="mensaje-texto">
          {message}
        </p>
        <form id="passwordChangeForm" onSubmit={handleSubmit}>
          {/* Campo de Correo */}
          <div className="form-group">
            <label className="label-clave" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              className="input-clave"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Campo de Clave Temporal */}
          <div className="form-group">
            <label className="label-clave" htmlFor="temporaryPassword">
              Clave Temporal
            </label>
            <div className="input-contenedor">
              <input
                className="input-clave"
                type={showTemporaryPassword ? "text" : "password"}
                id="temporaryPassword"
                value={temporaryPassword}
                onChange={(e) => setTemporaryPassword(e.target.value)}
                required
              />
              <span className="icon-eye" onClick={toggleShowTemporaryPassword}>
                {showTemporaryPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {/* Campo de Nueva Contraseña */}
          <div className="form-group">
            <label className="label-clave" htmlFor="password">
              Nueva Contraseña
            </label>
            <div className="input-contenedor">
              <input
                className="input-clave"
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span className="icon-eye" onClick={toggleShowPassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {/* Campo de Confirmar Contraseña */}
          <div className="form-group">
            <label className="label-clave" htmlFor="confirmPassword">
              Confirmar Contraseña
            </label>
            <div className="input-contenedor">
              <input
                className="input-clave"
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <span className="icon-eye" onClick={toggleShowConfirmPassword}>
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <button type="submit" className="boton-cambiar-clave">
            Cambiar Contraseña
          </button>
          <Link className="link-volver" to="/">
            Volver atrás
          </Link>
        </form> 
      </div>
    </div>
  );
}

export default CambiarClave;
