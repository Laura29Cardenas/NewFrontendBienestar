import React from "react";

function Profile() {
  return (
    <div>
      <div className="title-container">
        <h2 className="section-title">Informacion del Perfil</h2>
      </div>
      <main>
        <div className="profile-container">
          <form id="formulario" action="#" method="post">
            <div className="form-group">
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                defaultValue="Juan"
                readOnly
              />
            </div>
            <div className="form-group">
              <label htmlFor="apellido">Apellido:</label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                defaultValue="Pérez"
                readOnly
              />
            </div>
            <div className="form-group">
              <label htmlFor="correo">Correo institucional:</label>
              <input
                type="email"
                id="correo"
                name="correo"
                defaultValue="juan.perez@ejemplo.com"
                readOnly
              />
            </div>
            <div className="form-group">
              <label htmlFor="clave">Clave:</label>
              <input
                type="password"
                id="clave"
                name="clave"
                defaultValue={123456}
                readOnly
              />
            </div>
            <div className="form-group">
              <label htmlFor="genero">Género:</label>
              <select id="genero" name="genero" disabled>
                <option value>Seleccione una opción</option>
                <option value="masculino" selected>
                  Masculino
                </option>
                <option value="femenino">Femenino</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="rol">Rol:</label>
              <select id="rol" name="rol" disabled>
                <option value>Seleccione una opción</option>
                <option value="instructor">Instructor</option>
                <option value="capacitador">Capacitador</option>
                <option value="administrador" selected>
                  Administrador
                </option>
              </select>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Profile;