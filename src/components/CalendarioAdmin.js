import React from "react";

function CalendarioAdmin() {
  <main className="main-calendar">
    <div className="form-container">
      <h2 className="titulo1-calendario">Seleccione Ficha y Coordinación</h2>
      <form id="selection-form">
        <label className="label-calendario" htmlFor="ficha">Ficha:</label>
        <input className="input-calendario" type="text" id="ficha" name="ficha" required />
        <label className="label-calendario" htmlFor="coordinacion">Coordinación:</label>
        <input className="input-calendario" type="text" id="coordinacion" name="coordinacion" required />
        <button className="buton-calendario" type="submit">Mostrar Calendario</button>
      </form>
    </div>
    <div
      className="calendar-container"
      id="calendar-container"
      style={{ display: "none" }}
    >
      {/* El calendario se generará aquí */}
    </div>
  </main>;
}

export default CalendarioAdmin;
