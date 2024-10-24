import React, { useState } from 'react';

function Clave() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
 
    try {
      const response = await fetch(`http://localhost:7777/api/cambiar-clave`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }), // Asegúrate de enviar el email o el token, según lo que necesites
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      const data = await response.text();
      console.log(data);
      // Aquí podrías mostrar un mensaje al usuario de que el correo fue enviado
    } catch (error) {
      console.error('Error en el envío del formulario:', error);
    }
  };

  return (
    <div className="outer-container">
      <div className="password-reset-container">
        <h1 className='Titulo-Principal'>SENA</h1>
        <p className="subtitle">¿Desea recuperar su contraseña?</p>
        <p className="instructions">
          Para recuperar su cuenta, escriba su correo electrónico institucional.
        </p>
        <form id="passwordResetForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className='titulo-correo' htmlFor="email">Correo Electrónico Institucional</label>
            <input
              className='Texto-cuadro'
              type="email"
              id="email"
              placeholder="Correo Institucional"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-submit">Enviar Enlace de Restauración</button>
        </form>
      </div>
    </div>
  );
}

export default Clave;


