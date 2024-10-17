import React from "react";
import Swal from 'sweetalert2';

function Informes1() {
  const showReportAlert = () => {
    const informeData = {
      programName: "Programación Taller de Deporte",
      workshopType: "Deportes",
      workshopDescription:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam incidunt, asperiores iusto nesciunt delectus nemo, porro esse adipisci suscipit repellendus at ipsum accusantium. Vel accusamus molestiae omnis nihil aspernatur iste! ',
      date: "2023-05-12",
      time: "10:00 AM",
      specialty: "Tele - informatica",
      trainers: ["Juan Pérez", "María López"], 
      locations: ["Sede Central", "Sede Norte"],
      duration: "4 horas",
    };

    const trainersList = informeData.trainers.join(", ");
    const locationsList = informeData.locations.join(", ");

    Swal.fire({
      title: "Informe de Taller",
      html: `
              <div class="report-container">
                  <div class="report-header">
                      <h2>${informeData.programName}</h2>
                  </div>
                  <div class="report-content">
                      <p class="texto-informe" ><strong>Tipo de taller:</strong>  </br> ${informeData.workshopType}</p>
                      <p class="texto-informe" ><strong>Descripcion:</strong>  </br> ${informeData.workshopDescription}</p>
                      <p class="texto-informe" ><strong>Fecha y hora del taller:</strong>  </br> ${informeData.date} a las ${informeData.time}</p>
                      <p class="texto-informe" ><strong>Especialidad:</strong>  </br> ${informeData.specialty}</p>
                      <p class="texto-informe" ><strong>Capacitador(es):</strong> </br>  ${trainersList}</p>
                      <p class="texto-informe" ><strong>Sede(s):</strong> </br>  ${locationsList}</p>
                      <p class="texto-informe" ><strong>Duración estimada:</strong>  </br> ${informeData.duration}</p>
                  </div>
                  <div class="report-footer">
                      <p>Hecho por Bienestar al Aprendiz</p>
                  </div>
                  <button class="download-button" onclick="downloadReport()">
                      <i class="fa fa-download"></i> Descargar
                  </button>
              </div>
          `,
      showConfirmButton: false,
    });
  };

  const downloadReport = () => {
    // Aquí puedes agregar la lógica para descargar el informe en formato PDF o cualquier otro formato.
    alert("Descargar informe no está implementado aún.");
  };

  return (
    <div className="informes-container">
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
        {/* Botón de Ver Informe */}
        <div className="button-container">
          <button onClick={showReportAlert} className="show-report-button">
            Ver Informe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Informes1;






















