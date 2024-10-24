import React, { useState } from "react";
import Swal from "sweetalert2";

function Informes1() {
  const [fecha, setFecha] = useState("");
  const [sede, setSede] = useState("");
  const [coordinacion, setCoordinacion] = useState("");
  const [numeroFicha, setNumeroFicha] = useState("");
  const [ambiente, setAmbiente] = useState("");
  const [informeData, setInformeData] = useState(null); // Estado para almacenar el informe

  const showReportAlert = async () => {
    try {
      const response = await fetch("http://localhost:7777/api/obtenerInforme", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fecha,
          sede,
          coordinacion,
          numeroFicha,
          ambiente,
        }),
      });

      if (!response.ok) {
        throw new Error("No se encontraron informes para los datos proporcionados.");
      }

      const data = await response.json();
      setInformeData(data); // Almacena el informe en el estado
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
      });
    }
  };

  const downloadAndOpenReport = async () => {
    const response = await fetch('http://localhost:7777/api/generarInformePDF', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          fecha,
          sede,
          coordinacion,
          numeroFicha,
          ambiente,
      }),
  });
  

    if (!response.ok) {
        alert('Error al generar el informe');
        return;
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    // Crea un enlace para la descarga
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'informe.pdf'; // Nombre del archivo al descargar
    document.body.appendChild(a);
    a.click(); // Simula un clic para descargar
    window.URL.revokeObjectURL(url); // Revoca el objeto URL

    // Aquí puedes abrir el PDF en una nueva ventana/tab
    window.open(url, '_blank'); // Esto abrirá el PDF en una nueva pestaña
};

  return (
    <div className="informes-container">
      <h1 className="titulo1-informes">Bienvenido a los informes</h1>
      <h3 className="titulo2-informes">
        A continuación llena los datos para poder visualizar el informe que estás buscando
      </h3>
      <div className="container-form-informes">
        <div className="inputs-container">
          {/* Inputs del formulario */}
          <div className="campo-programacion-informe">
            <label className="label-form-programacion-informe">Fecha:</label>
            <input type="date" className="input-form-programacion-informe" onChange={(e) => setFecha(e.target.value)} />
          </div>
          <div className="campo-programacion-informe">
            <label htmlFor="sede-select" className="select-label">Sede</label>
            <select className="selector-informe" onChange={(e) => setSede(e.target.value)}>
              <option value="" disabled selected>Selecciona una opción</option>
              <option value="SEDE 52">Sede calle 52</option>
              <option value="SEDE 64">Sede calle 64</option>
              <option value="SEDE FONTIBON">Sede Fontibon</option>
            </select>
          </div>
          <div className="campo-programacion-informe">
            <label htmlFor="coordinacion-select" className="select-label">Coordinación</label>
            <select className="selector-informe" onChange={(e) => setCoordinacion(e.target.value)}>
              <option value="" disabled selected>Selecciona una opción</option>
              <option value="Teleinformatica">Teleinformatica</option>
              <option value="Logistica">Logistica</option>
              <option value="Mercadeo">Mercadeo</option>
            </select>
          </div>
          <div className="campo-programacion-informe">
            <label htmlFor="numeroFicha" className="number-label">Número de ficha</label>
            <input className="numero-informe" type="number" onChange={(e) => setNumeroFicha(e.target.value)} />
          </div>
          <div className="campo-programacion-informe">
            <label htmlFor="ambiente" className="number-label">Ambiente de formación</label>
            <input className="numero-informe" type="text" onChange={(e) => setAmbiente(e.target.value)} />
          </div>
          {/* Botón de Ver Informe */}
          <div className="button-container">
            <button onClick={showReportAlert} className="show-report-button">
              Ver Informe
            </button>
          </div>
        </div>

        {/* Contenedor del informe */}
        <div className="informe-container">
          {informeData && (
            <div className="report-container">
              <div className="report-header">
                <h2>{informeData.descripcion_procaptall}</h2>
              </div>
              <div className="report-content">
                <p><strong>Sede:</strong> {informeData.sede_procaptall}</p>
                <p><strong>Descripción:</strong> {informeData.descripcion_procaptall}</p>
                <p><strong>Ambiente:</strong> {informeData.ambiente_procaptall}</p>
                <p><strong>Fecha:</strong> {informeData.fecha_procaptall}</p>
                <p><strong>Hora de Inicio:</strong> {informeData.horaInicio_procaptall}</p>
                <p><strong>Hora de Fin:</strong> {informeData.horaFin_procaptall}</p>
                <p><strong>Número de Ficha:</strong> {informeData.numero_FichaFK}</p>
                <p><strong>Coordinación:</strong> {informeData.cordinacion_Ficha}</p>
              </div>
              <button className="download-button" onClick={downloadAndOpenReport}>
                <i className="fa fa-download"></i> Descargar
              </button>
            </div>
          )} 
        </div>
      </div>
    </div>
  );
}

export default Informes1;

