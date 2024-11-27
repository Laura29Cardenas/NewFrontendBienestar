import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Para redirigir si no se tiene acceso
import { getPerfil } from "../api/api.js"; // Ajusta la ruta según tu estructura de directorios

function ProfileAdmin() {
  const [perfil, setPerfil] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPerfil = async () => {
      try {
        // Verificar rol del usuario
        const rol = localStorage.getItem("rol");
        if (rol !== "administrador") {
          setError("Acceso denegado. No tiene permisos para ver esta página.");
          navigate("/"); // Redirigir al inicio si no es administrador
          return;
        }

        // Obtener ID de usuario del localStorage
        const id_Usuario = localStorage.getItem("id_Usuario");
        if (!id_Usuario) {
          setError("Usuario no autenticado. Por favor, inicie sesión.");
          navigate("/login"); // Redirigir al login si no está autenticado
          return;
        }

        console.log("Fetching perfil for user ID:", id_Usuario);
        const data = await getPerfil(id_Usuario);
        console.log("Perfil data received:", data);
        setPerfil(data);
      } catch (err) {
        console.error("Error fetching perfil:", err);
        setError(err.message || "Error al cargar el perfil.");
      } finally {
        setLoading(false);
      }
    };

    fetchPerfil();
  }, [navigate]);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div className="body-profile-admin">
      <div className="title-container">
        <h2 className="section-title-profile-admin">Información del Perfil</h2>
      </div>
      <main className="container-profile-admin">
        <div className="profile-admin-container">
          <form className="form-perfil-admin" id="formulario" method="post">
            <div className="form-group-perfilAdmin">
              <label className="label-form-profile-admin" htmlFor="nombre">
                Nombre:
              </label>
              <input
                className="input-form-profile-admin"
                type="text"
                id="nombre"
                name="nombre"
                value={perfil.nombre || ""}
                readOnly
              />
            </div>
            <div className="form-group-perfilAdmin">
              <label className="label-form-profile-admin" htmlFor="apellido">
                Apellido:
              </label>
              <input
                className="input-form-profile-admin"
                type="text"
                id="apellido"
                name="apellido"
                value={perfil.apellido || ""}
                readOnly
              />
            </div>
            <div className="form-group-perfilAdmin">
              <label className="label-form-profile-admin" htmlFor="correo">
                Correo institucional:
              </label>
              <input
                className="input-form-profile-admin"
                type="email"
                id="correo"
                name="correo"
                value={perfil.correo || ""}
                readOnly
              />
            </div>
            <div className="form-group-perfilAdmin">
              <label className="label-form-profile-admin" htmlFor="genero">
                Género:
              </label>
              <input
                className="input-form-profile-admin"
                type="text"
                id="genero"
                name="genero"
                value={perfil.genero || ""}
                readOnly
              />
            </div>
            <div className="form-group-perfilAdmin">
              <label className="label-form-profile-admin" htmlFor="rol">
                Rol:
              </label>
              <input
                className="input-form-profile-admin"
                type="text"
                id="rol"
                name="rol"
                value={perfil.rol || ""}
                readOnly
              />
            </div>
            <div className="form-group-perfilAdmin">
              <label className="label-form-profile-admin" htmlFor="tipo_documento">
                Tipo de documento:
              </label>
              <input
                className="input-form-profile-admin"
                type="text"
                id="tipo_documento"
                name="tipo_documento"
                value={perfil.tipo_documento || ""}
                readOnly
              />
            </div>
            <div className="form-group-perfilAdmin">
              <label className="label-form-profile-admin" htmlFor="documento">
                Número de documento:
              </label>
              <input
                className="input-form-profile-admin"
                type="text"
                id="documento"
                name="documento"
                value={perfil.documento || ""}
                readOnly
              />
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
 
export default ProfileAdmin;
