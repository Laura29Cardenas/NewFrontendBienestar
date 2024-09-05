import React from "react";

function Informes1() {
  return (
    <div>
      <div>
        <h1 className="titulo1-informes">Bienvenido a los informes</h1>
        <h3 className="titulo2-informes">
          A continuación llena los datos para poder visualizar el informe que
          estas buscando
        </h3>
        <div className="container">
          {/* Botón de Fecha */}
          <div className="date-button">
            <label htmlFor="date-field" className="date-label">
              Fecha
            </label>
            <div className="date-inputs">
              <input
                className="input-fecha"
                type="text"
                id="day"
                placeholder="Día"
                maxLength={2}
              />
              <input
                className="input-fecha"
                type="text"
                id="month"
                placeholder="Mes"
                maxLength={2}
              />
              <input
                className="input-fecha"
                type="text"
                id="year"
                placeholder="Año"
                maxLength={4}
              />
            </div>
          </div>
          {/* Botón de Selección */}
          <div className="select-button">
            <label htmlFor="jornada-select" className="select-label">
              Sede
            </label>
            <select className="selector-informe" id="jornada-select">
              <option value disabled selected>
                Selecciona una opción
              </option>
              <option value={1}>Sede calle 52</option>
              <option value={2}>Sede calle 64</option>
              <option value={3}>Sede Fontibon</option>
            </select>
          </div>
          <div className="select-button">
            <label htmlFor="jornada-select" className="select-label">
              Jornada
            </label>
            <select className="selector-informe" id="jornada-select">
              <option value disabled selected>
                Selecciona una opción
              </option>
              <option value={1}>Diurna</option>
              <option value={2}>Mixta</option>
              <option value={3}>Nocturna</option>
            </select>
          </div>
          <div className="select-button">
            <label htmlFor="jornada-select" className="select-label">
              Coordinación
            </label>
            <select className="selector-informe" id="jornada-select">
              <option value disabled selected>
                Selecciona una opción
              </option>
              <option value={1}>Mercadeo</option>
              <option value={2}>Teleinformatica</option>
              <option value={3}>Logistica</option>
              <option value={3} />
            </select>
          </div>
          <div className="number-button">
            <label htmlFor="number-input" className="number-label">
              Numero de ficha
            </label>
            <input
              className="numero-informe"
              type="number"
              id="number-input"
              placeholder="Ingresa un número"
            />
          </div>
          <div className="number-button">
            <label htmlFor="number-input" className="number-label">
              Ambiente de formación
            </label>
            <input
              className="numero-informe"
              type="number"
              id="number-input"
              placeholder="Ingresa un número"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Informes1;
