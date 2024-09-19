import React, { useState } from "react";
import Swal from "sweetalert2";
import { utils, writeFile } from "xlsx";
import { getbuscarUsuario } from "../api/api"; // Asegúrate de que la ruta a tu archivo api.js es correcta
import { updateUsuario } from "../api/api";
import { getIdUsuarioGlobal } from "../api/api"; // Asegúrate de que la ruta sea correcta

function Usuarios1() {
  const [user, setUser] = useState(null);

  // Función para generar el archivo Excel
  const generarArchivoExcel = () => {
    try {
      const data = [
        {
          Nombre: "",
          Apellido: "",
          Correo: "",
          Clave: "",
          Tipo_Documento: "",
          Genero: "",
          Rol: "",
        },
      ];

      const ws = utils.json_to_sheet(data, {
        header: [
          "Nombre",
          "Apellido",
          "Correo",
          "Clave",
          "Tipo_Documento",
          "Genero",
          "Rol",
        ],
      });
      const wb = utils.book_new();
      utils.book_append_sheet(wb, ws, "Registro");
      writeFile(wb, "registro_personas.xlsx");
    } catch (error) {
      console.error("Error al generar el archivo Excel:", error);
    }
  };

  // Función para manejar el botón de "Registrar"
  const handleRegister = () => {
    Swal.fire({
      title: "Registrar Usuario",
      html: `...`, // Tu HTML del formulario de registro aquí
      showConfirmButton: true,
      confirmButtonText: "Guardar usuario",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      focusConfirm: false,
      didOpen: () => {
        document.getElementById("add-more").addEventListener("click", () => {
          Swal.fire({
            title: "Generar archivo Excel para registrar",
            text: "Aquí podrías abrir un nuevo formulario para registrar los usuarios que desees",
            icon: "info",
            confirmButtonText: "Generar archivo Excel",
            preConfirm: () => {
              generarArchivoExcel(); // Llama a la función cuando se confirme
            },
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

        if (
          !nombre ||
          !apellido ||
          !correo ||
          !clave ||
          !tipoDocumento ||
          !genero ||
          !rol
        ) {
          Swal.showValidationMessage(`Por favor completa todos los campos`);
        } else {
          return {
            nombre,
            apellido,
            correo,
            clave,
            tipoDocumento,
            genero,
            rol,
          };
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
                    <option value="2" ${
                      user.tipo_rol === "Instructor" ? "selected" : ""
                    }>Instructor</option>
                    <option value="capacitador" ${
                      user.tipo_rol === "3" ? "selected" : ""
                    }>Capacitador</option>
                    <option value="1" ${
                      user.tipo_rol === "Administrador" ? "selected" : ""
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
              document.getElementById("estado-info").removeAttribute("disabled");
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
                estado
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
          </div>
        </form>
      </div>
    </div>
  );
}

export default Usuarios1;
