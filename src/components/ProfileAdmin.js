import React from "react";

function ProfileAdmin() {
  return (
    <div>
      <div>
        <div className="title-container">
          <h2 className="section-title-profile-admin">
            Informacion del Perfil
          </h2>
        </div>
        <main className="container-profile-admin">
          <div className="profile-admin-container">
            <form
              className="form-perfil-admin"
              id="formulario"
              action="#"
              method="post"
            >
              <div className="form-group">
                <label className="label-form-profile-admin" htmlFor="nombre">
                  Nombre:
                </label>
                <input
                  className="input-form-profile-admin"
                  type="text"
                  id="nombre"
                  name="nombre"
                  defaultValue="Juan"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label className="label-form-profile-admin" htmlFor="apellido">
                  Apellido:
                </label>
                <input
                  className="input-form-profile-admin"
                  type="text"
                  id="apellido"
                  name="apellido"
                  defaultValue="Pérez"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label className="label-form-profile-admin" htmlFor="correo">
                  Correo institucional:
                </label>
                <input
                  className="input-form-profile-admin"
                  type="email"
                  id="correo"
                  name="correo"
                  defaultValue="juan.perez@ejemplo.com"
                  readOnly
                />
              </div>
              <div className="form-group">
                <label className="label-form-profile-admin" htmlFor="clave">
                  Clave:
                </label>
                <input
                  className="input-form-profile-admin"
                  type="password"
                  id="clave"
                  name="clave"
                  defaultValue={123456}
                  readOnly
                />
              </div>
              <div className="form-group">
                <label className="label-form-profile-admin" htmlFor="genero">
                  Género:
                </label>
                <select
                  className="select-form-profile-admin"
                  id="genero"
                  name="genero"
                  disabled
                >
                  <option value>Seleccione una opción</option>
                  <option value="masculino" selected>
                    Masculino
                  </option>
                  <option value="femenino">Femenino</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div className="form-group">
                <label className="label-form-profile-admin" htmlFor="rol">
                  Rol:
                </label>
                <select
                  className="select-form-profile-admin"
                  id="rol"
                  name="rol"
                  disabled
                >
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
    </div>
  );
}

export default ProfileAdmin;
