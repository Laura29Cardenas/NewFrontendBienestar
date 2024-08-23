import React from "react";

function Usuarios1() {
  return (
    <div>
      <h2 className="titulo">¿Cúal usuario desea buscar?</h2>
      <div className="buscador-usuarios">
        <form>
          <div className="form-busqueda">
            <div className="campo">
              <label htmlFor="tipo-documento">Tipo de documento:</label>
              <select id="tipo-documento" name="tipo-documento">
                <option value>Seleccione un tipo de documento</option>
                <option value="CC">Cédula de ciudadanía</option>
                <option value="CE">Cédula de extranjería</option>
                <option value="PEP">PEP</option>
                <option value="NIT">NIT</option>
              </select>
            </div>
            <div className="campo">
              <label htmlFor="documento">Número de documento:</label>
              <input type="text" id="documento" name="documento" required />
            </div>
            <div className="campo">
              <label htmlFor="nombre">Nombre (opcional):</label>
              <input type="text" id="nombre" name="nombre" />
            </div>
          </div>
          <div className="form-group">
            <div className="campo">
              <button type="button" id="buscarButton" className="buscar">
                Buscar
              </button>
            </div>
            <div className="campo">
              <button type="button" id="registrar" className="registrar-usua">
                Registrar nuevo usuario
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Usuarios1;
