import React from "react";

function Notificacionessectionuno() {
  return ( 
    <div>
      <div classname="title-search-container">
        <h2 classname="section-title" >Historial de Notificaciones</h2>
        <div classname="search-filter-container">
          <input
            type="text"
            classname="search-bar" 
            placeholder="Buscar notificaciones..."
          />
          <button classname="search-button" id="buscarNotificacion">
            <img src="{busquedaUsua}" classname="Buscar" alt="Buscar" />
          </button>
          <button classname="filter-button">
            <img src="{filtrar}" classname="Filtrar" alt="Filtrar" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Notificacionessectionuno;