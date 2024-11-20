import React, { useState } from "react";
import { useParams } from "react-router-dom"; // Para obtener parámetros de la URL
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Librería de íconos

function CambiarClave() {
  const { token } = useParams(); // Obtener el token de la URL
  const [oldPassword, setOldPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Token que se envía:", token);
  
    if (!password) {
      setMessage('Por favor, ingrese una nueva contraseña.');
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:7777/api/restablecer-clave/${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newPassword: password }), // Asegúrate de que "newPassword" esté bien definido
      });
  
      if (!response.ok) {
        const data = await response.json();
            console.log("Respuesta del servidor:", data);
            setMessage('Contraseña actualizada con éxito.');
      } else {
        const errorData = await response.json();
            console.error("Detalles del error:", errorData);
            setMessage(errorData.message || 'Error al cambiar la contraseña.');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
      setMessage('Error al enviar la solicitud.');
    }
  };  

  const toggleShowOldPassword = () => {
    setShowOldPassword(!showOldPassword);
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
          Por favor, ingrese su nueva contraseña y confírmela.
        </p>
        <p id="message" className="mensaje-texto">
          {message}
        </p>
        <form id="passwordChangeForm" onSubmit={handleSubmit}>
          {/* Campo de Contraseña Anterior */}
          <div className="form-group">
            <label className="label-clave" htmlFor="oldPassword">
              Contraseña Anterior
            </label>
            <div className="input-contenedor">
              <input
                className="input-clave"
                type={showOldPassword ? "text" : "password"}
                id="oldPassword"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
              />
              <span className="icon-eye" onClick={toggleShowOldPassword}>
                {showOldPassword ? <FaEyeSlash /> : <FaEye />}
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
        </form>
      </div>
    </div>
  );
}

export default CambiarClave;
