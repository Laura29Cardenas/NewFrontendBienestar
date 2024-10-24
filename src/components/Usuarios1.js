import React, { useState } from "react";
import Swal from "sweetalert2";
import { utils, writeFile } from "xlsx";
import { getbuscarUsuario } from "../api/api"; // Asegúrate de que la ruta a tu archivo api.js es correcta
import { updateUsuario } from "../api/api";
import { getIdUsuarioGlobal } from "../api/api"; // Asegúrate de que la ruta sea correcta
import { registrarUsuario } from "../api/api";
import { registrarUsuariosDesdeExcel } from "../api/api"; 

function Usuarios1() {
  const [user, setUser] = useState(null); 
  // Función para generar el archivo Excel
  const generarArchivoExcel = () => {
    try {
      // Datos de ejemplo con el formato necesario
      const data = [
        {
          Nombre: "Juan",
          Apellido: "Pérez",
          Correo: "juan.perez@example.com",
          Clave: "password123",
          Tipo_Documento: "CC",
          Documento: "12345678", // Agregado para Documento
          Genero: "Masculino",
          Rol: "Administrador", // Nombre del rol
        },
        {
          Nombre: "María",
          Apellido: "López",
          Correo: "maria.lopez@example.com",
          Clave: "securepass",
          Tipo_Documento: "CE",
          Documento: "X123456", // Agregado para Documento
          Genero: "Femenino",
          Rol: "Instructor", // Nombre del rol
        },
        {
          Nombre: "Carlos",
          Apellido: "González",
          Correo: "carlos.gonzalez@example.com",
          Clave: "cap123456",
          Tipo_Documento: "NIT",
          Documento: "987654321", // Agregado para Documento
          Genero: "Masculino",
          Rol: "Capacitador", // Nombre del rol
        },
      ];

      // Crear hoja de cálculo con los datos de ejemplo
      const ws = utils.json_to_sheet(data, {
        header: [
          "Nombre",
          "Apellido",
          "Correo",
          "Clave",
          "Tipo_Documento",
          "Documento", // Agregado campo Documento
          "Genero",
          "Rol",
        ],
      });

      // Crear libro de trabajo y añadir la hoja de datos
      const wb = utils.book_new();
      utils.book_append_sheet(wb, ws, "Registro");

      // Generar archivo Excel para descarga
      writeFile(wb, "registro_personas_ejemplo.xlsx");

      console.log("Archivo Excel generado con éxito.");
    } catch (error) {
      console.error("Error al generar el archivo Excel:", error);
    }
  };

  const handleRegister = () => {
    Swal.fire({
      title: "Registrar Usuario",
      html: `
      <main class="registrar">
        <div class="registrar-container">
          <form class="form-registrar-usuario" id="registrar-form" action="#" method="post">
            <div class="form-group-usuarios">
              <label class="label-registrar-usuario" for="nombre_Usua">Nombre:</label>
              <input class="input-registrar-usuario" type="text" id="nombre_Usua" name="nombre" required>
            </div>
            <div class="form-group-usuarios">
              <label class="label-registrar-usuario" for="apellido_Usua">Apellido:</label>
              <input class="input-registrar-usuario" type="text" id="apellido_Usua" name="apellido" required>
            </div>
            <div class="form-group-usuarios">
              <label class="label-registrar-usuario" for="correo_Usua">Correo institucional:</label>
              <input class="input-registrar-usuario" type="email" id="correo_Usua" name="correo" required>
            </div>
            <div class="form-group-usuarios">
              <label class="label-registrar-usuario" for="clave_Usua">Clave:</label>
              <input class="input-registrar-usuario" type="password" id="clave_Usua" name="clave" required>
            </div>
            <div class="form-group-usuarios">
              <label class="label-registrar-usuario" for="tipo_documento">Tipo de documento:</label>
              <select class="select-registrar-usuario" id="tipo_documento" name="tipoDocumento" required>
                <option value="">Seleccione una opción</option>
                <option value="CC">Cédula de Ciudadanía</option>
                <option value="CE">Cédula de Extranjería</option>
                <option value="PEP">PEP</option>
                <option value="NIT">NIT</option>
              </select>
            </div>
            <div class="form-group-usuarios">
              <label class="label-registrar-usuario" for="documento_1">Número documento:</label>
              <input class="input-registrar-usuario" type="text" id="documento_1" name="documento" required>
            </div>
            <div class="form-group-usuarios">
              <label class="label-registrar-usuario" for="genero">Género:</label>
              <select class="select-registrar-usuario" id="genero" name="genero" required>
                <option value="">Seleccione una opción</option>
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </select>
            </div>
            <div class="form-group-usuarios">
              <label class="label-registrar-usuario" for="id_Rol1FK">Rol:</label>
              <select class="select-registrar-usuario" id="id_Rol1FK" name="rol" required>
                <option value="">Seleccione una opción</option>
                <option value="1">Administrador</option>
                <option value="2">Instructor</option>
                <option value="3">Capacitador</option>
              </select>
            </div>
          </form>
        </div>
        <div>
      </main>
    `,
      showConfirmButton: true,
      confirmButtonText: "Guardar usuario",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      focusConfirm: false,
      preConfirm: async () => {
        // Obtener los valores del formulario
        const nombre = document.getElementById("nombre_Usua").value.trim();
        const apellido = document.getElementById("apellido_Usua").value.trim();
        const correo = document.getElementById("correo_Usua").value.trim();
        const clave = document.getElementById("clave_Usua").value.trim();
        const tipoDocumento = document
          .getElementById("tipo_documento")
          .value.trim();
        const documento = document.getElementById("documento_1").value.trim();
        const genero = document.getElementById("genero").value.trim();
        const rol = document.getElementById("id_Rol1FK").value.trim();

        // Validación de campos
        const rolesValidos = [1, 2, 3]; // Define los roles válidos según tu base de datos

        if (
          !nombre ||
          !apellido ||
          !correo ||
          !clave ||
          !tipoDocumento ||
          tipoDocumento === "" ||
          !documento ||
          !genero ||
          genero === "" ||
          !rol ||
          rol === "" ||
          !rolesValidos.includes(parseInt(rol, 10))
        ) {
          Swal.showValidationMessage(
            `Por favor completa todos los campos correctamente`
          );
        } else {
          const nuevoUsuario = {
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            clave: clave,
            tipoDocumento: tipoDocumento,
            documento: documento,
            genero: genero,
            rol: rol,
          };

          try {
            console.log("Datos enviados:", nuevoUsuario); // Verificar los datos antes de enviarlos
            const response = await registrarUsuario(nuevoUsuario); // Enviar usuario a la API
            Swal.fire({
              icon: "success",
              title: "Usuario registrado",
              text: `El usuario ${nombre} ha sido registrado exitosamente.`,
            });
          } catch (error) {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: `Hubo un problema al registrar el usuario: ${error.message}`,
            });
          }
        }
      },
    });
  };

  const handleSearch = async (event) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    try {
      const tipoDocumento = document.getElementById("tipo-documento").value;
      const numeroDocumento = document.getElementById("documento").value;
      const nombre = document.getElementById("nombre-busqueda").value;

      if (!tipoDocumento || !numeroDocumento) {
        Swal.fire({
          icon: "warning",
          title: "Campos incompletos",
          text: "Por favor completa el tipo y número de documento.",
        });
        return;
      }

      // Llamar a la API para buscar el usuario
      const response = await getbuscarUsuario(
        tipoDocumento,
        numeroDocumento,
        nombre
      );

      // Verifica que la respuesta contenga datos
      if (response && response[0]) {
        const user = response[0]; // Acceder directamente al objeto del usuario
        console.log(user);
        if (user) {
          const searchFormContainer =
            document.querySelector(".buscador-usuarios");

          // Eliminar el formulario existente
          const existingForm = document.querySelector(
            ".informacion-container-usuarios"
          );
          if (existingForm) {
            existingForm.remove();
          }

          // Crear nuevo formulario HTML con los datos del usuario
          const formHTML = `
            <div class="informacion-container-usuarios">
              <h2 class="titulo-info-usuarios">Información del usuario</h2>
              <form id="formulario" action="#" method="post">
                <div class="form-group">
                  <div class="column-form-usuarios">
                    <label class="label-alert-form-usuarios" for="nombre-info">Nombre:</label>
                    <input class="input-alert-form-usuarios" type="text" id="nombre-info" name="nombre" value="${
                      user.nombre || ""
                    }" readonly>
                  </div>
                  <br>
                  <div class="column-form-usuarios">
                    <label class="label-alert-form-usuarios" for="apellido-info">Apellido:</label>
                    <input class="input-alert-form-usuarios" type="text" id="apellido-info" name="apellido" value="${
                      user.apellido || ""
                    }" readonly>
                  </div>
                </div>
                <div class="form-group">
                  <div class="column-form-usuarios">
                    <label class="label-alert-form-usuarios" for="correo-info">Correo institucional:</label>
                    <input class="input-alert-form-usuarios" type="email" id="correo-info" name="correo" value="${
                      user.correo || ""
                    }" readonly>
                  </div>
                  <br>
                  <div class="column-form-usuarios">
                    <label class="label-alert-form-usuarios" for="clave-info">Clave:</label>
                    <input class="input-alert-form-usuarios" type="password" id="clave-info" name="clave" value="${
                      user.clave || ""
                    }" readonly>
                  </div>
                </div>
                <div class="form-group">
                  <label class="label-alert-form-usuarios" for="genero-info">Género:</label>
                  <select class="select-alert-form-usuarios" id="genero-info" name="genero" disabled>
                    <option value="">Seleccione una opción</option>
                    <option value="Masculino" ${
                      user.genero === "Masculino" ? "selected" : ""
                    }>Masculino</option>
                    <option value="Femenino" ${
                      user.genero === "Femenino" ? "selected" : ""
                    }>Femenino</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="label-alert-form-usuarios" for="rol-info">Rol:</label>
                  <select class="select-alert-form-usuarios" id="rol-info" name="rol" disabled>
                    <option value="">Seleccione una opción</option>
                    <option value=2 ${
                      user.tipo_rol === 2 ? "selected" : ""
                    }>Instructor</option>
                    <option value=3 ${
                      user.tipo_rol === 3 ? "selected" : ""
                    }>Capacitador</option>
                    <option value=1 ${
                      user.tipo_rol === 1 ? "selected" : ""
                    }>Administrador</option>
                  </select>
                </div>
                <div class="form-group">
                  <label class="label-alert-form-usuarios" for="estado-info">Estado del usuario:</label>
                  <select class="select-alert-form-usuarios" id="estado-info" name="estado" disabled>
                    <option value="">Seleccione una opción</option>
                    <option value=1 ${
                      user.estado === 1 ? "selected" : ""
                    }>Activo</option>
                    <option value=0 ${
                      user.estado === 0 ? "selected" : ""
                    }>Inactivo</option>
                  </select>
                </div>
                <div class="form-group">
                  <div>
                    <button type="button" id="modificarButton" class="modificar-usuario">Modificar</button>
                  </div>
                </div>
              </form>
            </div>
          `;
          searchFormContainer.insertAdjacentHTML("afterend", formHTML);

          document.getElementById("modificarButton").onclick = async function (
            event
          ) {
            event.preventDefault(); // Evita el envío del formulario

            const button = document.getElementById("modificarButton");

            if (button.textContent === "Modificar") {
              // Habilitar campos de edición
              document
                .getElementById("nombre-info")
                .removeAttribute("readonly");
              document
                .getElementById("apellido-info")
                .removeAttribute("readonly");
              document
                .getElementById("correo-info")
                .removeAttribute("readonly");
              document.getElementById("clave-info").removeAttribute("readonly");
              document
                .getElementById("genero-info")
                .removeAttribute("disabled");
              document.getElementById("rol-info").removeAttribute("disabled");
              document
                .getElementById("estado-info")
                .removeAttribute("disabled");
              button.textContent = "Guardar";
            } else if (button.textContent === "Guardar") {
              // Obtener los valores del formulario
              const id_Usuario = getIdUsuarioGlobal();

              // Validar que idUsuario no sea null
              if (!id_Usuario) {
                Swal.fire({
                  icon: "error",
                  title: "Error",
                  text: "No se encontró el ID del usuario. Asegúrate de que el usuario esté cargado correctamente.",
                });
                return; // Detener la ejecución
              }
              console.log("ID de usuario global:", id_Usuario);
              // Obtener los valores del formulario
              const nombre = document.getElementById("nombre-info").value;
              const apellido = document.getElementById("apellido-info").value;
              const correo = document.getElementById("correo-info").value;
              const clave = document.getElementById("clave-info").value; // O puedes omitir si no deseas cambiar la clave
              const genero = document.getElementById("genero-info").value;
              const tipoRol = document.getElementById("rol-info").value;
              const estado = document.getElementById("estado-info").value;

              // Crear el objeto usuario actualizado
              const usuarioActualizado = {
                nombre,
                apellido,
                correo_Usua: correo,
                clave_Usua: clave,
                genero,
                id_Rol1FK: tipoRol,
                estado,
              };

              try {
                // Llamar a la función que conecta con el backend
                const response = await updateUsuario(
                  id_Usuario,
                  usuarioActualizado
                );

                if (response.message === "Usuario actualizado con éxito") {
                  Swal.fire({
                    icon: "success",
                    title: "Éxito",
                    text: "Usuario actualizado correctamente",
                  });

                  // Deshabilitar los campos de nuevo
                  document
                    .getElementById("nombre-info")
                    .setAttribute("readonly", true);
                  document
                    .getElementById("apellido-info")
                    .setAttribute("readonly", true);
                  document
                    .getElementById("correo-info")
                    .setAttribute("readonly", true);
                  document
                    .getElementById("clave-info")
                    .setAttribute("readonly", true);
                  document
                    .getElementById("genero-info")
                    .setAttribute("disabled", true);
                  document
                    .getElementById("rol-info")
                    .setAttribute("disabled", true);
                  document
                    .getElementById("estado-info")
                    .setAttribute("disabled", true);
                  button.textContent = "Modificar";
                } else {
                  Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "No se pudo actualizar el usuario.",
                  });
                }
              } catch (error) {
                Swal.fire({
                  icon: "error",
                  title: "Error",
                  text: "Hubo un problema al actualizar el usuario. Inténtalo de nuevo.",
                });
                console.error(error);
              }
            }
          };
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "No se pudo encontrar el usuario. Por favor, revisa los datos y vuelve a intentarlo.",
          });
        }
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error en la búsqueda",
        text: "Hubo un problema con la búsqueda del usuario. Por favor, intenta nuevamente más tarde.",
      });
      console.error(error);
    }
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) {
      Swal.fire({
        icon: "warning",
        title: "No se seleccionó archivo",
        text: "Por favor, selecciona un archivo Excel para cargar.",
      });
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await registrarUsuariosDesdeExcel(formData);

      if (response.message === "Usuarios cargados con éxito") {
        Swal.fire({
          icon: "success",
          title: "Carga masiva exitosa",
          text: "Los usuarios se han cargado correctamente.",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error en la carga",
          text: "Hubo un problema al cargar los usuarios. Inténtalo de nuevo.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al subir el archivo. Inténtalo de nuevo.",
      });
      console.error(error);
    }
  };

  // Renderizar condicionalmente el formulario con los datos del usuario
  return (
    <div>
      <h2 className="titulo-usuarios">¿Cuál usuario desea buscar?</h2>
      <div className="buscador-usuarios">
        <form onSubmit={handleSearch}>
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
                required
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
                htmlFor="nombre-busqueda"
              >
                Nombre (opcional):
              </label>
              <input
                className="input-form-registrar-usuarios"
                type="text"
                id="nombre-busqueda"
                name="nombre"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="campo-usuarios">
              <button
                type="submit"
                id="buscarButton"
                className="buscar-usuario"
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
            {/* <div className="campo-usuarios">
              <div className="subtitulo-boton">
                <span
                  className="agregar-mas-usuarios"
                  onClick={handleFileUpload}
                >
                  Seleccionar archivo
                </span>
              </div>
              <div className="subtitulo-boton">
                <button
                  onClick={generarArchivoExcel}
                  className="agregar-mas-usuarios"
                >
                  Generar archivo Excel (formato)
                </button>
              </div>
              </div> 
            */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Usuarios1;