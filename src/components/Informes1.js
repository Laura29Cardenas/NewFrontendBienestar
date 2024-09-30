import React from "react";
import Swal from "sweetalert2";

function Informes1() {
  const showReportAlert = async (event) => {
    event.preventDefault();

    const fecha = `${document.getElementById("year").value}-${
      document.getElementById("month").value
    }-${document.getElementById("day").value}`;
    const sede = document.getElementById("jornada-select").value;
    const coordinacion = document.getElementById("coordinacion-select").value;
    const numeroFicha = document.getElementById("numero-ficha").value;
    const ambiente = document.getElementById("ambiente-formacion").value;

    try {
      const response = await fetch('http://localhost:7777/api/obtenerInforme', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fecha, sede, coordinacion, numeroFicha, ambiente }),
    });

      if (!response.ok) {
        const errorData = await response.json();
        Swal.fire({
          icon: "error",
          title: "Error",
          text:
            errorData.message ||
            "No se encontraron informes para los datos proporcionados.",
        });
        return;
      }

      // Aquí tratamos la respuesta como un blob para descargar el PDF
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "informe.pdf"; // Nombre del archivo a descargar
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error al mostrar el informe: ", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ocurrió un error inesperado al intentar mostrar el informe.",
      });
    }
  };
  return (
    <div className="informes-container">
      <h1 className="titulo1-informes">Bienvenido a los informes</h1>
      <h3 className="titulo2-informes">
        A continuación llena los datos para poder visualizar el informe que
        estás buscando
      </h3>
      <form className="container">
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
        {/* Selección de Sede */}
        <div className="select-button">
          <label htmlFor="jornada-select" className="select-label">
            Sede
          </label>
          <select className="selector-informe" id="jornada-select" required>
            <option value="" disabled defaultValue>
              Seleccione una opción
            </option>
            <option value="sede 52">Sede 52</option>
            <option value="sede 64">Sede 64</option>
            <option value="sede fontibon">Sede Fontibón</option>
          </select>
        </div>
        {/* Selección de Coordinación */}
        <div className="select-button">
          <label htmlFor="coordinacion-select" className="select-label">
            Coordinación
          </label>
          <select
            className="selector-informe"
            id="coordinacion-select"
            required
          >
            <option value="" disabled defaultValue>
              Seleccione una opción
            </option>
            <option value="mercadeo">Mercadeo</option>
            <option value="logistica">Logística</option>
            <option value="teleinformatica">Teleinformática</option>
          </select>
        </div>
        {/* Número de ficha */}
        <div className="number-button">
          <label htmlFor="numero-ficha" className="number-label">
            Número de ficha
          </label>
          <input
            className="numero-informe"
            type="number"
            id="numero-ficha"
            placeholder="Ingresa un número"
            required
          />
        </div>
        {/* Ambiente de formación */}
        <div className="number-button">
          <label htmlFor="ambiente-formacion" className="number-label">
            Ambiente de formación
          </label>
          <input
            className="numero-informe"
            type="text"
            id="ambiente-formacion"
            placeholder="Ingresa el ambiente"
            required
          />
        </div>
        {/* Botón de Ver Informe */}
        <div className="button-container">
          <button onClick={showReportAlert} className="show-report-button">
            Ver Informe
          </button>
        </div>
      </form>
    </div>
  );
}

export default Informes1;
