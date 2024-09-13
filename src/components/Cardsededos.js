import React from "react";
import Swal from "sweetalert2";

function Cardsededos() {
  const showTallerAlert = () => {
    const tallerData = {
      headerName: "Información del Taller de Deporte",
      dateTime: "15/09/2024  |  9:00am",
      description: "En este taller se llevará a cabo pruebas físicas, se harán retos de resistencia, fuerza, velocidad. Por último, se realizará una charla sobre lo que se realizó y los resultados obtenidos.",
      workshop: "Pruebas físicas",
      trainer: "Jorge Torres",
      environment: "304",
      resources: "Sibalto, lasos",
      coordination: "Coordinación"
    };

    Swal.fire({
      title: tallerData.headerName,
      html: `
        <div class="workshop-container">
          <div class="workshop-content">
            <p><strong>Fecha y Hora:</strong> ${tallerData.dateTime}</p>
            <p><strong>Descripción:</strong> ${tallerData.description}</p>
            <p><strong>Taller:</strong> ${tallerData.workshop}</p>
            <p><strong>Capacitador:</strong> ${tallerData.trainer}</p>
            <p><strong>Ambiente:</strong> ${tallerData.environment}</p>
            <p><strong>Recursos:</strong> ${tallerData.resources}</p>
            <p><strong>Coordinación:</strong> ${tallerData.coordination}</p>
          </div>
        </div>
      `,
      showConfirmButton: false,
    });
  };

  return (
    <div className="card">
      <h2 className="tittle">Sede 64</h2>
      <div className="cuadro-info" onClick={showTallerAlert}>
        <ul className="text-info">
          <li className="li-card-usua">Deporte - Pruebas físicas</li>
          <li className="li-card-usua">Jorge Torres</li>
          <li className="li-card-usua">15/09/2024 | 9:00am</li>
        </ul>
      </div>
      {/* Repite para otras secciones si es necesario */}
    </div>
  );
}

export default Cardsededos;
