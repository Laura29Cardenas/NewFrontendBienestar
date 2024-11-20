import React, { useState } from 'react';

function Clave() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch('http://localhost:7777/api/restablecer-clave', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: 'dframirez786@soy.sena.edu.co' })  // Usar el correo que quieres probar
      });
      
  
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Hubo un error al enviar el correo.');
      }
  
      // Mostrar un mensaje al usuario que el correo fue enviado
      alert('Se ha enviado un enlace de restauración a su correo electrónico.');
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      alert('Hubo un error al enviar el correo. Inténtelo de nuevo.');
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

