import React from 'react';
import Swal from 'sweetalert2';
import { utils, writeFile } from 'xlsx';

function Usuarios1() {
  // Función para generar el archivo Excel
  const generarArchivoExcel = () => {
    try {
      // Datos de ejemplo para el archivo Excel
      const data = [
        { Nombre: '', Apellido: '', Correo: '', Clave: '', Tipo_Documento: '', Genero: '', Rol: '' } // Encabezados de columna vacíos para entrada de datos
      ];

      // Crear una nueva hoja de Excel
      const ws = utils.json_to_sheet(data, { header: ["Nombre", "Apellido", "Correo", "Clave", "Tipo_Documento", "Genero", "Rol"] });

      // Crear un nuevo libro de Excel y agregar la hoja
      const wb = utils.book_new();
      utils.book_append_sheet(wb, ws, 'Registro');

      // Guardar el libro como un archivo
      writeFile(wb, 'registro_personas.xlsx');
    } catch (error) {
      console.error('Error al generar el archivo Excel:', error);
    }
  };

  // Función para manejar el botón de "Registrar"
  const handleRegister = () => {
    Swal.fire({
      title: "Registrar Usuario",
      html: `
        <main class="registrar">
          <div class="registrar-container">
            <form class="form-registrar-usuario" id="registrar-form" action="#" method="post">
              <div class="form-group-usuarios">
                <label class="label-registrar-usuario" for="nombre">Nombre:</label>
                <input class="input-registrar-usuario" type="text" id="nombre" name="nombre" required>
              </div>
              <div class="form-group-usuarios">
                <label class="label-registrar-usuario" for="apellido">Apellido:</label>
                <input class="input-registrar-usuario" type="text" id="apellido" name="apellido" required>
              </div>
              <div class="form-group-usuarios">
                <label class="label-registrar-usuario" for="correo">Correo institucional:</label>
                <input class="input-registrar-usuario" type="email" id="correo" name="correo" required>
              </div>
              <div class="form-group-usuarios">
                <label class="label-registrar-usuario" for="clave">Clave:</label>
                <input class="input-registrar-usuario" type="password" id="clave" name="clave" required>
              </div>
              <div class="form-group-usuarios">
                <label class="label-registrar-usuario" for="tipoDocumento">Tipo de documento:</label>
                <select class="select-registrar-usuario" id="tipoDocumento" name="tipoDocumento" required>
                  <option value="">Seleccione una opción</option>
                  <option value="Cedula de Ciudadania">Cédula de Ciudadanía</option>
                  <option value="Cedula de Extranjeria">Cédula de Extranjería</option>
                  <option value="PEP">PEP</option>
                  <option value="NIT">NIT</option>
                </select>
              </div>
              <div class="form-group-usuarios">
                <label class="label-registrar-usuario" for="genero">Género:</label>
                <select class="select-registrar-usuario" id="genero" name="genero" required>
                  <option value="">Seleccione una opción</option>
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div class="form-group-usuarios">
                <label class="label-registrar-usuario" for="rol">Rol:</label>
                <select class="select-registrar-usuario" id="rol" name="rol" required>
                  <option value="">Seleccione una opción</option>
                  <option value="instructor">Instructor</option>
                  <option value="capacitador">Capacitador</option>
                  <option value="administrador">Administrador</option>
                </select>
              </div>
            </form>
          </div>
          <div id="extra-buttons">
            <button id="add-more" class="agregar-mas-usuarios" style="background-color: #5cb85c; border: none; padding: 10px 20px; color: white; cursor: pointer; border-radius: 8px; margin-left: -28%;">Agregar más de un usuario</button>
          </div>
        </main>
      `,
      showConfirmButton: true,
      confirmButtonText: "Guardar usuario",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      focusConfirm: false,
      didOpen: () => {
        document.getElementById('add-more').addEventListener('click', () => {
          Swal.fire({
            title: 'Generar archivo Excel para registrar',
            text: 'Aquí podrías abrir un nuevo formulario para registrar los usuarios que desees',
            icon: 'info',
            confirmButtonText: 'Generar archivo Excel',
            preConfirm: () => {
              generarArchivoExcel(); // Llama a la función cuando se confirme
            }
          });
        });
      },
      preConfirm: () => {
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const correo = document.getElementById("correo").value;
        const clave = document.getElementById("clave").value;
        const tipoDocumento = document.getElementById("tipoDocumento").value;
        const genero = document.getElementById("genero").value;
        const rol = document.getElementById("rol").value;

        if (!nombre || !apellido || !correo || !clave || !tipoDocumento || !genero || !rol) {
          Swal.showValidationMessage(`Por favor completa todos los campos`);
        } else {
          return { nombre, apellido, correo, clave, tipoDocumento, genero, rol };
        }
      }
    });
  };

  // Función para manejar el botón de "Buscar"
  const handleSearch = () => {
    // Elimina el formulario de información anterior si existe
    const existingForm = document.querySelector(".informacion-container-usuarios");
    if (existingForm) {
      existingForm.remove();
    }

    const searchFormContainer = document.querySelector(".buscador-usuarios");
    const formHTML = `
      <div class="informacion-container-usuarios">
        <h2 class="titulo-info-usuarios">Información del usuario</h2>
        <form id="formulario" action="#" method="post">
          <div class="form-group">
            <div class="column-form-usuarios">
              <label class="label-alert-form-usuarios" for="nombre">Nombre:</label>
              <input class="input-alert-form-usuarios" type="text" id="nombre" name="nombre" value="Juan" readonly>
            </div>
            <br>
            <div class="column-form-usuarios">
              <label class="label-alert-form-usuarios" for="apellido">Apellido:</label>
              <input class="input-alert-form-usuarios" type="text" id="apellido" name="apellido" value="Pérez" readonly>
            </div>
          </div>
          <div class="form-group">
            <div class="column-form-usuarios">
              <label class="label-alert-form-usuarios" for="correo">Correo institucional:</label>
              <input class="input-alert-form-usuarios" type="email" id="correo" name="correo" value="juan.perez@ejemplo.com" readonly>
            </div>
            <br>
            <div class="column-form-usuarios">
              <label class="label-alert-form-usuarios" for="clave">Clave:</label>
              <input class="input-alert-form-usuarios" type="password" id="clave" name="clave" value="123456" readonly>
            </div>
          </div>
          <div class="form-group">
            <label class="label-alert-form-usuarios" for="genero">Género:</label>
            <select class="select-alert-form-usuarios" id="genero" name="genero" disabled>
              <option value="">Seleccione una opción</option>
              <option value="masculino" selected>Masculino</option>
              <option value="femenino">Femenino</option>
              <option value="otro">Otro</option>
            </select>
          </div>
          <div class="form-group">
            <label class="label-alert-form-usuarios" for="rol">Rol:</label>
            <select class="select-alert-form-usuarios" id="rol" name="rol" disabled>
              <option value="">Seleccione una opción</option>
              <option value="instructor">Instructor</option>
              <option value="capacitador">Capacitador</option>
              <option value="administrador" selected>Administrador</option>
            </select>
          </div>
          <div class="form-group">
            <div>
              <button type="button" id="modificarButton" class="modificar-usuario">Modificar</button>
            </div>
            <div>
              <button type="submit" id="inactivarButton" class="inactivar-usuario">Inactivar</button>
            </div>
          </div>
        </form>
      </div>
    `;
    searchFormContainer.insertAdjacentHTML("afterend", formHTML);

    // Asignar el evento 'onclick' al botón 'Modificar' después de que el formulario se haya insertado en el DOM
    document.getElementById("modificarButton").onclick = function (event) {
      event.preventDefault(); // Evita el envío del formulario

      const button = document.getElementById("modificarButton");

      if (button.textContent === "Modificar") {
        // Hacer que los campos sean editables
        document.getElementById("nombre").removeAttribute("readonly");
        document.getElementById("apellido").removeAttribute("readonly");
        document.getElementById("correo").removeAttribute("readonly");
        document.getElementById("clave").removeAttribute("readonly");
        document.getElementById("genero").removeAttribute("disabled");
        document.getElementById("rol").removeAttribute("disabled");

        // Cambiar el texto del botón a "Guardar"
        button.textContent = "Guardar";

      } else if (button.textContent === "Guardar") {
        // Aquí puedes agregar la lógica para guardar los cambios, por ejemplo, enviando el formulario
        // document.getElementById("formulario").submit();

        // Hacer que los campos vuelvan a ser de solo lectura
        document.getElementById("nombre").setAttribute("readonly", true);
        document.getElementById("apellido").setAttribute("readonly", true);
        document.getElementById("correo").setAttribute("readonly", true);
        document.getElementById("clave").setAttribute("readonly", true);
        document.getElementById("genero").setAttribute("disabled", true);
        document.getElementById("rol").setAttribute("disabled", true);

        // Cambiar el texto del botón de nuevo a "Modificar"
        button.textContent = "Modificar";
      }
    };
  };

  return (
    <div>
      <div>
        <h2 className="titulo-usuarios">¿Cuál usuario desea buscar?</h2>
        <div className="buscador-usuarios">
          <form>
            <div className="form-busqueda-usuarios">
              <div className="campo-usuarios">
                <label
                  className="label-form-registrar-usuarios"
                  htmlFor="tipo-documento"
                >
                  Tipo de documento:
                </label>
                <select
                  className="select-form-registrar-usuarios"
                  id="tipo-documento"
                  name="tipo-documento"
                >
                  <option value="">Seleccione un tipo de documento</option>
                  <option value="CC">Cédula de ciudadanía</option>
                  <option value="CE">Cédula de extranjería</option>
                  <option value="PEP">PEP</option>
                  <option value="NIT">NIT</option>
                </select>
              </div>
              <div className="campo-usuarios">
                <label
                  className="label-form-registrar-usuarios"
                  htmlFor="documento"
                >
                  Número de documento:
                </label>
                <input
                  className="input-form-registrar-usuarios"
                  type="text"
                  id="documento"
                  name="documento"
                  required
                />
              </div>
              <div className="campo-usuarios">
                <label
                  className="label-form-registrar-usuarios"
                  htmlFor="nombre"
                >
                  Nombre (opcional):
                </label>
                <input
                  className="input-form-registrar-usuarios"
                  type="text"
                  id="documento"
                  name="documento"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="campo-usuarios">
                <button
                  type="button"
                  id="buscarButton"
                  className="buscar-usuario"
                  onClick={handleSearch}
                >
                  Buscar
                </button>
              </div>
              <div className="campo-usuarios">
                <button
                  type="button"
                  id="registrar"
                  className="registrar-usuario"
                  onClick={handleRegister}
                >
                  Registrar nuevo usuario
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Usuarios1;
