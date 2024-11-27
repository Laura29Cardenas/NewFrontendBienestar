import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { getProgramacionesPorSede52 } from '../api/api'; // Verifica que la ruta sea correcta

function Cardsedeuno() {
  const [programaciones, setProgramaciones] = useState([]);

  useEffect(() => {
    const fetchProgramaciones = async () => {
      try {
        const data = await getProgramacionesPorSede52(); // Llama a la función de API

        // Extraer todas las programaciones de la respuesta
        const extractedData = Object.values(data[0]); // Obtiene todos los valores del primer objeto

        setProgramaciones(extractedData.filter(item => item !== undefined)); // Filtrar los valores indefinidos
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
      title: `Información del Taller de ${programacion.nombre_Taller}`,
      html: `
        <div class="workshop-container">
          <div class="workshop-content">
            <p><strong>Fecha y Hora:</strong> ${programacion.fecha_procaptall} | ${programacion.horaInicio_procaptall} - ${programacion.horaFin_procaptall}</p>
            <p><strong>Descripción:</strong> ${programacion.descripcion_procaptall}</p>
            <p><strong>Ambiente:</strong> ${programacion.ambiente_procaptall}</p>
            <p><strong>Taller:</strong> ${programacion.nombre_Taller}</p>
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
    <div className="card" style={{ textAlign: 'left' }}>
      <h2 className="title">Sede 52</h2>
      <div className="card-content" style={{ textAlign: 'left' }}>
        {programaciones.length > 0 ? (
          programaciones.map((programacion, index) => (
            <div
              className="cuadro-info"
              onClick={() => showTallerAlert(programacion)} // Pasa la programacion al alert
              key={index} // Cambia el key a un índice si no hay un ID único
              style={{ cursor: 'pointer', marginBottom: '10px', padding: '10px', textAlign: 'left' }} // Estilo en línea para el cuadro
            > 
              <ul className="text-info" style={{ listStyleType: 'none', padding: 0 }}>
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

export default Cardsedeuno;




