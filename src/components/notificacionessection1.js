import React from "react";

function notificacionessection (){
    return (
        <div className="title-search-container">
    <h2 className="section-title">Historial de Notificaciones</h2>
    <div className="search-filter-container">
      <input type="text" className="search-bar" placeholder="Buscar notificaciones..." />
      <button className="search-button" id="buscarNotificacion">
        <img src={busquedaUsua} className="Buscar" alt="Buscar" />
      </button>
      <button className="filter-button">
        <img src={filtrar} className="Filtrar" alt="Filtrar" />
      </button>
    </div>
  </div>
  <main className="notifications-container">
    <div className="notification-card">
      <h3>Asunto: Actualización de Taller</h3>
      <p>Descripción: Se ha actualizado el taller de Deportes para incluir nuevas actividades.</p>
      <div className="programacion">
        <p>Día: 01/08/2024</p>
        <p>Hora: 10:00 AM</p>
        <p>Sede: 52 auditorio</p>
        <p>Capacitador: Juan Pérez</p>
      </div>
    </div>
    <div className="notification-card">
      <h3>Asunto: Nueva Notificación</h3>
      <p>Descripción: Detalles sobre la nueva notificación que se ha enviado.</p>
      <div className="programacion">
        <p>Día: 02/08/2024</p>
        <p>Hora: 2:00 PM</p>
        <p>Sede: 52 patio</p>
        <p>Capacitador: María López</p>
      </div>
    </div>
    <div className="notification-card">
      <h3>Asunto: Nueva Notificación</h3>
      <p>Descripción: Detalles sobre la nueva notificación que se ha enviado.</p>
      <div className="programacion">
        <p>Día: 02/08/2024</p>
        <p>Hora: 2:00 PM</p>
        <p>Sede: 52 patio</p>
        <p>Capacitador: María López</p>
      </div>
    </div>
    <div className="notification-card">
      <h3>Asunto: Nueva Notificación</h3>
      <p>Descripción: Detalles sobre la nueva notificación que se ha enviado.</p>
      <div className="programacion">
        <p>Día: 02/08/2024</p>
        <p>Hora: 2:00 PM</p>
        <p>Sede: 52 patio</p>
        <p>Capacitador: María López</p>
      </div>
    )
}