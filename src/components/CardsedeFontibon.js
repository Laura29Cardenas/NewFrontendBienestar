import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { getProgramacionesPorSedeFontibon } from '../api/api'; // Asegúrate de que la ruta sea correcta

function CardsedeFontibon() {
  const [programaciones, setProgramaciones] = useState([]);

  useEffect(() => {
    const fetchProgramaciones = async () => {
      try {
        const data = await getProgramacionesPorSedeFontibon();

        // Asegúrate de que los datos se estructuran correctamente
        const extractedData = Object.values(data[0]).filter(item => item !== undefined);
        setProgramaciones(extractedData);
      } catch (error) { 
        console.error("Error al obtener programaciones:", error);
        Swal.fire({
          title: 'Error',
          text: 'No se pudieron cargar las programaciones.',
          icon: 'error',
          confirmButtonText: 'Cerrar',
        });
      }
    };

    fetchProgramaciones();
  }, []);

  const showTallerAlert = (programacion) => {
    Swal.fire({
      title: `Información del Taller: ${programacion.nombre_Taller}`,
      html: `
        <div class="workshop-container">
          <div class="workshop-content">
            <p><strong>Fecha y Hora:</strong> ${programacion.fecha_procaptall} | ${programacion.horaInicio_procaptall} - ${programacion.horaFin_procaptall}</p>
            <p><strong>Descripción:</strong> ${programacion.descripcion_procaptall}</p>
            <p><strong>Ambiente:</strong> ${programacion.ambiente_procaptall}</p>
            <p><strong>Capacitador:</strong> ${programacion.nombre_Capacitador}</p>
            <p><strong>Sede:</strong> ${programacion.sede_procaptall}</p>
            <p><strong>Número de Ficha:</strong> ${programacion.numero_FichaFK}</p>
          </div>
        </div>
      `,
      showConfirmButton: false,
    });
  };

  return (
    <div className="card">
      <h2 className="title">Sede Fontibón</h2>
      <div className="card-content">
        {programaciones.length > 0 ? (
          programaciones.map((programacion, index) => (
            <div
              className="cuadro-info"
              onClick={() => showTallerAlert(programacion)}
              key={index}
            >
              <ul className="text-info">
                <li className="li-card-usua">{programacion.descripcion_procaptall}</li>
                <li className="li-card-usua">{programacion.nombre_Capacitador}</li>
                <li className="li-card-usua">{programacion.fecha_procaptall} | {programacion.horaInicio_procaptall}</li>
              </ul> 
            </div> 
          ))
        ) : (
          <p>No hay programaciones disponibles.</p>
        )}
      </div>
    </div>
  );
}

export default CardsedeFontibon;






