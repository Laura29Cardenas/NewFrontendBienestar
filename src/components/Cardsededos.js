import React from "react";
import Swal from "sweetalert2";

function Cardsededos() {
  const tallerData = {
    sede_procaptall: "SEDE 64",
    descripcion_procaptall: "Métodos Anticonceptivos y Sexualidad",
    fecha_procaptall: "2024-09-20",
    horaInicio_procaptall: "15:30:00",
    horaFin_procaptall: "17:00:00",
    nombre_Taller: "metodos anticonceptivos",
    nombre_Capacitador: "María López Martínez",
    numero_FichaFK: 5678562,
  };

  const showTallerAlert = () => {
    Swal.fire({
      title: `Información del Taller de ${tallerData.nombre_Taller}`,
      html: `
        <div class="workshop-container">
          <div class="workshop-content">
            <p><strong>Fecha y Hora:</strong> ${tallerData.fecha_procaptall} | ${tallerData.horaInicio_procaptall} - ${tallerData.horaFin_procaptall}</p>
            <p><strong>Descripción:</strong> ${tallerData.descripcion_procaptall}</p>
            <p><strong>Ambiente:</strong> ${tallerData.ambiente_procaptall}</p>
            <p><strong>Taller:</strong> ${tallerData.nombre_Taller}</p>
            <p><strong>Capacitador:</strong> ${tallerData.nombre_Capacitador}</p>
            <p><strong>Sede:</strong> ${tallerData.sede_procaptall}</p>
            <p><strong>Número de Ficha:</strong> ${tallerData.numero_FichaFK}</p>
          </div>
        </div>
      `,
      showConfirmButton: false,
    });
  };

  return (
    <div className="card">
      <h2 className="title">Sede 64</h2>
      <div className="card-content">
        <div className="cuadro-info" onClick={showTallerAlert}>
          <ul className="text-info">
            <li className="li-card-usua">{tallerData.descripcion_procaptall}</li>
            <li className="li-card-usua">{tallerData.nombre_Capacitador}</li>
            <li className="li-card-usua">{tallerData.fecha_procaptall} | {tallerData.horaInicio_procaptall}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cardsededos;


