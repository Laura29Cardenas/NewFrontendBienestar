import React from 'react';
import axios from 'axios';

function Clave() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const messageElement = document.getElementById('message');
  
    // Validación de correo
    const validEmail = /.+@(?:soy\.sena\.edu\.co|sena\.edu\.co)$/;
  
    if (!validEmail.test(email)) {
      messageElement.textContent = 'Por favor, introduce un correo válido: usuario@soy.sena.edu.co o usuario@sena.edu.co';
      return;
    }
  
    try {
      // Asegúrate de que la URL apunte al puerto correcto
      const response = await axios.post('http://localhost:3000/api/enviar-enlace', { email });
      messageElement.textContent = `Se ha enviado un enlace de restauración de contraseña a ${email}.`;
    } catch (error) {
      messageElement.textContent = 'Error al enviar el enlace, intenta nuevamente.';
    }
  
    // Limpiar el campo de correo
    document.getElementById('email').value = '';
  };

  return (
    <div>
      <div className="password-reset-container">
        <h1 className='Titulo-Principal'>AVA</h1>
        <p className="subtitle">¿Desea recuperar su contraseña?</p>
        <p className="instructions">Para recuperar su cuenta, escriba su correo electrónico institucional.</p>
        <p id="message" className="message"></p>
        <form id="passwordResetForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className='titulo-correo' htmlFor="email">Correo Electrónico Institucional</label>
            <input className='Texto-cuadro' type="email" id="email" placeholder="Introduce tu nombre de usuario o correo electrónico" required />
            <p className="email-example">Ejemplo: usuario@soy.sena.edu.co o usuario@sena.edu.co</p>
          </div>
          <button type="submit" className="btn-submit">Enviar Enlace de Restauración</button>
        </form>
      </div>
    </div>
  );
}

export default Clave;

