import React from "react";

function ProfileAdmin() {
  return (
    <div>
    <div>
  <div className="title-container">
    <h2 className="seccion-titulo-perfil">Informacion del Perfil</h2>
  </div>
  <main className="informacion-perfil">
    <div className="perfil-container">
      <form className="formulario-perfil" for="formulario" action="#" method="post">
        <div className="form-group">
          <label className="label-dato-perfil" for="nombre">Nombre:</label>
          <input className="input-dato-perfil" type="text" id="nombre" name="nombre" defaultValue="Juan" readOnly />
        </div>
        <div className="form-group">
          <label className="label-dato-perfil" htmlFor="apellido">Apellido:</label>
          <input className="input-dato-perfil" type="text" id="apellido" name="apellido" defaultValue="Pérez" readOnly />
        </div>
        <div className="form-group">
          <label className="label-dato-perfil" htmlFor="correo">Correo institucional:</label>
          <input className="input-dato-perfil" type="email" id="correo" name="correo" defaultValue="juan.perez@ejemplo.com" readOnly />
        </div>
        <div className="form-group">
          <label className="label-dato-perfil" htmlFor="clave">Clave:</label>
          <input className="input-dato-perfil" type="password" id="clave" name="clave" defaultValue={123456} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="genero">Género:</label>
          <select className="select-perfil" for="genero" name="genero" disabled>
            <option value>Seleccione una opción</option>
            <option value="masculino" selected>Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="rol">Rol:</label>
          <select className="select-perfil" id="rol" name="rol" disabled>
            <option value>Seleccione una opción</option>
            <option value="instructor">Instructor</option>
            <option value="capacitador">Capacitador</option>
            <option value="administrador" selected>Administrador</option>
          </select>
        </div>
      </form>
    </div>
  </main>
</div>

    </div>
  );
};

export default ProfileAdmin;
