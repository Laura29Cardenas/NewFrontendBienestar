const API_BASE_URL = 'http://localhost:7777/api'; // Cambia esto a la URL de tu backend

// Obtener todas las programaciones
export const getProgramaciones = async () => {
  const response = await fetch(`${API_BASE_URL}/programacion`);
  return response.json();
};

// Obtener una programación por ID
export const getProgramacion = async (id) => {
  const response = await fetch(`${API_BASE_URL}/programacion/${id}`);
  return response.json();
};

// Obtener programaciones por sede
export const getProgramacionesPorSede = async (sede) => {
  const response = await fetch(`${API_BASE_URL}/programaciones/${sede}`);
  return response.json();
};

// Crear una nueva programación
export const createProgramacion = async (programacion) => {
  const response = await fetch(`${API_BASE_URL}/programacion`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(programacion),
  });
  return response.json();
};

// Actualizar una programación existente
export const updateProgramacion = async (id, programacion) => {
  const response = await fetch(`${API_BASE_URL}/programacion/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(programacion),
  });
  return response.json();
};

// Eliminar una programación
export const deleteProgramacion = async (id) => {
  const response = await fetch(`${API_BASE_URL}/programacion/${id}`, {
    method: 'DELETE',
  });
  return response.json();
};

// Obtener programacion por sede (Sede 52)
export const getProgramacionesPorSede52 = async () => {
  const response = await fetch(`${API_BASE_URL}/programaciones/sede52`);
  if (!response.ok) {
    throw new Error('Error al obtener las programaciones');
  }
  return response.json();
};

// Obtener programacion por sede (Sede 64)
export const getProgramacionesPorSede64 = async () => {
  const response = await fetch(`${API_BASE_URL}/programaciones/sede64`);
  if (!response.ok) {
    throw new Error('Error al obtener las programaciones');
  }
  return response.json();
};

// Obtener programacion por sede (Sede fontibon)
export const getProgramacionesPorSedeFontibon = async () => {
  const response = await fetch(`${API_BASE_URL}/programaciones/sedeFontibon`);
  if (!response.ok) {
    throw new Error('Error al obtener programaciones de la sede Fontibón');
  }
  return response.json();
};

// Obtener programaciones por ficha
export const getProgramacionesPorFicha = async (ficha, cordinacion) => {
  const response = await fetch(`${API_BASE_URL}/programacion/ficha/${ficha}/cordinacion/${cordinacion}`);
  return response.json();
};
 
// Talleres
// En api.js 
export const createTaller = async (tipoTaller, nombreTaller) => {
  const response = await fetch(`${API_BASE_URL}/taller`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tipo_Taller: tipoTaller, nombre_Taller: nombreTaller }),
  });
  
  if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error desconocido');
  }

  return await response.json();
};



export const getTalleres = async () => {
  const response = await fetch(`${API_BASE_URL}/taller`);
  return response.json();
};

export const getTaller = async (id) => {
  const response = await fetch(`${API_BASE_URL}/taller/${id}`);
  return response.json();
};

export const consultarTallerPorNombre = async (nombreTaller) => {
  try {
    const response = await fetch(`${API_BASE_URL}/taller/${nombreTaller}`);
    
    if (!response.ok) {
      throw new Error('Taller no encontrado');
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const postTaller = async (tallerData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/taller`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tallerData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error desconocido');
    }

    return await response.json();
  } catch (error) {
    console.error('Error al agregar el taller:', error);
    throw error;
  }
};

// Actualizar un taller existente
export const updateTaller = async (id, taller) => {
  const response = await fetch(`${API_BASE_URL}/taller/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(taller),
  });
  
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Error al actualizar el taller');
  }
  
  return response.json();
};

// Eliminar un taller
export const deleteTaller = async (id) => {
  const response = await fetch(`${API_BASE_URL}/taller/${id}`, {
    method: 'DELETE',
  });
  
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Error al eliminar el taller');
  }
  
  return response.json();
};

// Fichas
export const getFichas = async () => {
  const response = await fetch(`${API_BASE_URL}/ficha`);
  return response.json();
};

export const getFicha = async (id) => {
  const response = await fetch(`${API_BASE_URL}/ficha/${id}`);
  return response.json();
};

export const createFicha = async (numero_Ficha, cordinacion_Ficha) => {
  try {
    const response = await fetch(`${API_BASE_URL}/ficha`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        numero_Ficha,
        cordinacion_Ficha,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error desconocido');
    }

    return await response.json();
  } catch (error) {
    console.error('Error en la conexión a la API:', error);
    throw error;
  }
};

export const updateFicha = async (numero_Ficha, updateData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/ficha/${numero_Ficha}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error desconocido');
    }

    return await response.json();
  } catch (error) {
    console.error('Error en la conexión a la API:', error);
    throw error;
  }
};

export const deleteFicha = async (numero_Ficha) => {
  try {
    const response = await fetch(`${API_BASE_URL}/ficha/${numero_Ficha}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Error desconocido');
    }

    return await response.json();
  } catch (error) {
    console.error('Error en la conexión a la API:', error);
    throw error;
  }
};

// Capacitadores
export const getCapacitadores = async () => {
  const response = await fetch(`${API_BASE_URL}/capacitador`);
  return response.json();
};

export const getCapacitador = async (id) => {
  const response = await fetch(`${API_BASE_URL}/capacitador/${id}`);
  return response.json();
};

export const postCapacitador = async (capacitador) => {
  const response = await fetch(`${API_BASE_URL}/capacitador`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(capacitador),
  });
  return response.json();
};

export const putCapacitador = async (id, capacitador) => {
  const response = await fetch(`${API_BASE_URL}/capacitador/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(capacitador),
  });
  return response.json();
};

// Función para obtener el perfil del usuario
export const getPerfil = async (id_Usuario) => {
  try {
    const response = await fetch(`${API_BASE_URL}/perfil/${id_Usuario}`);
    
    if (!response.ok) {
      throw new Error('Error al obtener el perfil');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener el perfil:', error.message);
    throw error;
  }
};

let idUsuarioGlobal = null;

export const getbuscarUsuario = async (tipoDocumento, numeroDocumento, nombre) => {
  try {
    const url = new URL(`${API_BASE_URL}/usuario/tipoDoc/${tipoDocumento}/documento/${numeroDocumento}/nombre/${nombre || ''}`);
    
    console.log('Generated URL:', url.toString());

    const response = await fetch(url);
    console.log('Response status:', response.status);
    
    if (!response.ok) {
      throw new Error(`Error al buscar el usuario: ${response.status}`);
    }

    const data = await response.json();
    console.log('Data received:', data);

    if (data && data[0] && typeof data[0].id_Usuario !== 'undefined') {
      idUsuarioGlobal = data[0].id_Usuario;
      console.log("ID del usuario asignado:", idUsuarioGlobal);
    } else {
      console.error("No se encontró el campo 'id_Usuario' en los datos recibidos.");
      idUsuarioGlobal = null;
    }
    
    return data;
  } catch (error) {
    console.error('Error al buscar el usuario:', error.message);
    throw error;
  }
};

// Función para obtener el ID del usuario global
export const getIdUsuarioGlobal = () => {
  console.log("Valor de idUsuarioGlobal en la llamada:", idUsuarioGlobal);
  return idUsuarioGlobal;
};

// API para actualizar un usuario existente
export const updateUsuario = async (id_Usuario, usuario) => { 
  try {
    const response = await fetch(`${API_BASE_URL}/usuario/${id_Usuario}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(usuario),
    });

    if (!response.ok) {
      throw new Error(`Error en la actualización: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Error al actualizar el usuario:', error.message);
    throw error;
  }
};

export const login = async (correo_Usua, clave_Usua) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        correo_Usua,
        clave_Usua,
      }),
    });

    if (!response.ok) {
      throw new Error('Error de autenticación');
    }

    const data = await response.json();

    if (data && data.user && data.token) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('id_Usuario', data.user.id);
      localStorage.setItem('nombre_Usuario', data.user.nombre);
    }

    return data;
  } catch (error) {
    throw new Error(error.message || 'Error de conexión');
  }
};

export const getProgramacionesPorFichaYCoordinacion = async (ficha, coordinacion) => {
  try {
    const response = await fetch(`${API_BASE_URL}/programacion/ficha/${ficha}/cordinacion/${coordinacion}`);
    if (!response.ok) {
      throw new Error('Error en la respuesta de la API');
    }
    return response.json();
  } catch (error) {
    console.error('Error al obtener las programaciones:', error);
    throw error;
  }
};

// Función para registrar usuario
export const registrarUsuario = async (nuevoUsuario) => {
  try {
    console.log("Datos enviados a la API:", nuevoUsuario);
    const response = await fetch(`${API_BASE_URL}/usuario`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        correo: nuevoUsuario.correo,
        clave: nuevoUsuario.clave,
        rol: nuevoUsuario.rol,
        nombre: nuevoUsuario.nombre,
        apellido: nuevoUsuario.apellido,
        tipoDocumento: nuevoUsuario.tipoDocumento,
        documento: nuevoUsuario.documento,
        genero: nuevoUsuario.genero,
      }),
    });

    const data = await response.json();
    console.log('Respuesta del servidor:', data);
    
    if (!response.ok) {
      throw new Error(data.message || 'Error en la respuesta de la API al registrar el usuario');
    }

    return data;
  } catch (error) {
    console.error(`Error al registrar el usuario: ${error.message}`);
    throw error;
  }
};

export const registrarUsuariosDesdeExcel = async (formData) => {
  const response = await fetch(`${API_BASE_URL}/usuarios/cargar-masivo`, {
    method: 'POST',
    body: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Error al registrar los usuarios');
  }
  
  return response.json();
};
