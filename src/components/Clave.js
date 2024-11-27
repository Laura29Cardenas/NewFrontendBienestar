import React, { useState } from "react";

function Clave() {
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:7777/api/restablecer-clave", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }), // Envía el correo ingresado por el usuario
      });

      if (!response.ok) { 
        const data = await response.json();
        throw new Error(data.message || "Hubo un error al enviar la clave temporal.");
      }

      const data = await response.json();
      setMensaje(data.message); // Muestra un mensaje de éxito al usuario
      setError("");
    } catch (err) {
      console.error("Error al enviar el correo:", err);
      setMensaje("");
      setError(err.message);
    }
  };

  return (
    <div className="outer-container">
      <div className="password-reset-container">
        <h1 className="Titulo-Principal">SENA</h1>
        <p className="subtitle">¿Desea recuperar su contraseña?</p>
        <p className="instructions">
          Para recuperar su cuenta, escriba su correo electrónico institucional.
        </p>
        <form id="passwordResetForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="titulo-correo" htmlFor="email">
              Correo Electrónico Institucional
            </label>
            <input
              className="Texto-cuadro"
              type="email"
              id="email"
              placeholder="Correo Institucional"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-submit">
            Enviar Clave Temporal
          </button>
        </form>
        {mensaje && <p style={{ color: "green" }}>{mensaje}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
}

export default Clave;
