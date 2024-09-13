// src/components/Profile.js
import React from 'react'; 

function Profile ()  {
  return (
    <div>
      <div className="title-container">
        <h2 className="section-title-profile-usua">
          Información del Perfil
        </h2>
      </div>
      <main className='container-profile-usua'>
        <div className="profile-usua-container">
          <form 
          className="form-perfil-usua"
          id="formulario" 
          action="#" 
          method="post">

            <div className="form-group-perfilUsuario">
              <label className="label-form-profile-usua" htmlFor="nombre">Nombre:</label>
              <input className="input-form-profile-usua"
                type="text"
                id="nombre"
                name="nombre"
                defaultValue="Juan"
                readOnly
              />
            </div>
            <div className="form-group-perfilUsuario">
              <label className="label-form-profile-usua" htmlFor="apellido">Apellido:</label>
              <input 
              className="input-form-profile-usua"
                type="text"
                id="apellido"
                name="apellido"
                defaultValue="Pérez"
                readOnly
              />
            </div>
            <div className="form-group-perfilUsuario">
              <label className="label-form-profile-usua" htmlFor="correo">Correo institucional:</label>
              <input 
              className="input-form-profile-usua"
                type="email"
                id="correo"
                name="correo"
                defaultValue="juan.perez@ejemplo.com"
                readOnly
              />
            </div>
            <div className="form-group-perfilUsuario">
              <label className="label-form-profile-usua" htmlFor="clave">Clave:</label>
              <input 
              className="input-form-profile-usua"
                type="password"
                id="clave"
                name="clave"
                defaultValue={123456}
                readOnly
              />
            </div>
            <div className="form-group-perfilUsuario">
              <label className="label-form-profile-usua" htmlFor="genero">Género:</label>

              <select 
              className="select-form-profile-usua" 
              id="genero" 
              name="genero" 
              disabled>

                <option value>Seleccione una opción</option>
                <option value="masculino" selected>
                  Masculino
                </option>
                <option value="femenino">Femenino</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            <div className="form-group-perfilUsuario">
              <label className="label-form-profile-usua" htmlFor="rol">Rol:</label>

              <select className="select-form-profile-usua" id="rol" name="rol" disabled>
                
                <option value>Seleccione una opción</option>
                <option value="instructor">Instructor</option>
                <option value="capacitador">Capacitador</option>
                <option value="administrador" selected>
                  Administrador
                </option>
              </select>
            </div>
            <div className="form-group-perfilUsuario">
              <label className="label-form-profile-usua" htmlFor="rol">Tipo Documento:</label>

              <select className="select-form-profile-usua" id="rol" name="rol" disabled>
                
                <option value>Seleccione una opción</option>
                <option value="cedula de extranjeria">Cedula de extranjeria</option>
                <option value="tarjeta de identidad">Tarjeta de identidad</option>
                <option value="cedula" selected>
                  Cedula
                </option>
              </select>
            </div>
            <div className="form-group-perfilUsuario">
              <label className="label-form-profile-usua" htmlFor="nombre">Documento:</label>
              <input className="input-form-profile-usua"
                type="text"
                id="nombre"
                name="documento"
                defaultValue="123456789"
                readOnly
              />
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Profile;