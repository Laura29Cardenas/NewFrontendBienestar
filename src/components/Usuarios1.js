import React from "react";

function Usuarios1() {
  return (
    <div>
<div>
  <h2 className="titulo-usuario">¿Cúal usuario desea buscar?</h2>
  <div className="buscador-usuarios">
    <form>
      <div className="form-busqueda">
        <div className="campo">
          <label className="label-usuarios" id="tipo-documento">Tipo de documento:</label>
          <select className="selector-documento" id="tipo-documento" name="tipo-documento">
            <option value>Seleccione un tipo de documento</option>
            <option value="CC">Cédula de ciudadanía</option>
            <option value="CE">Cédula de extranjería</option>
            <option value="PEP">PEP</option>
            <option value="NIT">NIT</option>
          </select>
        </div>
        <div className="campo">
          <label className="label-usuarios" htmlFor="documento">Número de documento:</label>
          <input className="input-check-usuarios" type="text" id="documento" name="documento" required />
        </div>
        <div className="campo">
          <label className="label-usuarios" htmlFor="nombre">Nombre (opcional):</label>
          <input className="input-check-usuarios" type="text" id="nombre" name="nombre" />
        </div>
      </div>
      <div className="form-group">
        <div className="campo">
          <button className="boton-usuario" type="button" id="buscarButton">Buscar</button>
        </div>
        <div className="campo">
          <button className="boton-usuario" type="button" id="registrar">Registrar nuevo usuario</button>
        </div>
      </div>
    </form>
  </div>
</div>

    </div>
  );
};

export default Usuarios1;
