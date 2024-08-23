import React from "react";

function Calendariomain () {
    return (
         
      <main>
      <div className="form-container">
        <h2>Seleccione Ficha y Coordinación</h2>
        <form id="selection-form">
          <label htmlFor="ficha">Ficha:</label>
          <input type="text" id="ficha" name="ficha" required />
          <label htmlFor="coordinacion">Coordinación:</label>
          <input type="text" id="coordinacion" name="coordinacion" required />
          <button type="submit">Mostrar Calendario</button>
        </form>
      </div>
      <div
        className="calendar-container"
        id="calendar-container"
        style={{ display: "none" }}
      >
        {/* El calendario se generará aquí */}
      </div>
    </main>
    );
};

export default Calendariomain;