import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';

function CambiarClave({ email }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      try {
        const response = await axios.post('http://localhost:3000/api/cambiar-clave', { email, password });
        setMessage('La contraseña ha sido cambiada exitosamente.');
        setTimeout(() => {
          window.location.href = '/login';
        }, 2000);
      } catch (error) {
        setMessage('Error al cambiar la contraseña.');
      }
    } else {
      setMessage('Las contraseñas no coinciden. Inténtelo nuevamente.');
    }

    // Limpiar los campos de contraseña
    setPassword('');
    setConfirmPassword('');
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
        <h1 className="titulo-principal">AVA</h1>
        <p className="subtitulo-clave">Cambiar Contraseña</p>
        <p className="text-clave">Por favor, ingrese su nueva contraseña y confírmela.</p>
        <p id="message" className="mensaje-texto">{message}</p>
        <form id="passwordChangeForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="label-clave" htmlFor="password">Nueva Contraseña</label>
            <div className="input-contenedor">
              <input
                className="input-clave"
                type={showPassword ? 'text' : 'password'}
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

          <div className="form-group">
            <label className="label-clave" htmlFor="confirmPassword">Confirmar Contraseña</label>
            <div className="input-contenedor">
              <input
                className="input-clave"
                type={showConfirmPassword ? 'text' : 'password'}
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

          <button type="submit" className="boton-cambiar-clave">Cambiar Contraseña</button>
        </form>
      </div>
    </div>
  );
}

export default CambiarClave;
