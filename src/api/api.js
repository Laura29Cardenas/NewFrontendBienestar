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

// Obtener programaciones por ficha
export const getProgramacionesPorFicha = async (ficha, cordinacion) => {
  const response = await fetch(`${API_BASE_URL}/programacion/ficha/${ficha}/cordinacion/${cordinacion}`);
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

// Talleres
export const getTalleres = async () => {
  const response = await fetch(`${API_BASE_URL}/taller`);
  return response.json();
};

export const getTaller = async (id) => {
  const response = await fetch(`${API_BASE_URL}/taller/${id}`);
  return response.json();
};

export const postTaller = async (taller) => {
  const response = await fetch(`${API_BASE_URL}/taller`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taller),
  });
  return response.json();
};

export const putTaller = async (id, taller) => {
  const response = await fetch(`${API_BASE_URL}/taller/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(taller),
  });
  return response.json();
};

export const deleteTaller = async (id) => {
  await fetch(`${API_BASE_URL}/taller/${id}`, {
    method: 'DELETE',
  });
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

export const postFicha = async (ficha) => {
  const response = await fetch(`${API_BASE_URL}/ficha`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(ficha),
  });
  return response.json();
};

export const putFicha = async (id, ficha) => {
  const response = await fetch(`${API_BASE_URL}/ficha/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(ficha),
  });
  return response.json();
};

export const deleteFicha = async (numeroFicha) => {
  await fetch(`${API_BASE_URL}/ficha/${numeroFicha}`, {
    method: 'DELETE',
  });
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
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(capacitador),
  });
  return response.json();
};

export const putCapacitador = async (id, capacitador) => {
  const response = await fetch(`${API_BASE_URL}/capacitador/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
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
    throw error; // Re-lanzar el error para que el componente pueda manejarlo
  }
};

export const getbuscarUsuario = async (tipoDocumento, numeroDocumento, nombre) => {
  try {
    const url = new URL(`${API_BASE_URL}/usuario/tipoDoc/${tipoDocumento}/documento/${numeroDocumento}/nombre/${nombre || ''}`);
    console.log('Generated URL:', url.toString()); // Verificar la URL
    
    const response = await fetch(url);
    
    console.log('Response status:', response.status); // Verifica el estado de la respuesta
    
    if (!response.ok) {
      throw new Error(`Error al buscar el usuario: ${response.status}`);
    }

    const data = await response.json();
    
    // Verifica el formato de los datos
    console.log('Data received:', data);

    return data;
  } catch (error) {
    console.error('Error al buscar el usuario:', error.message);
    throw error;
  }
};





export const login = async (correo_Usua, clave_Usua) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: 'POST', // Usar el método POST
      headers: {
        'Content-Type': 'application/json', // Definir el tipo de contenido
      },
      body: JSON.stringify({
        correo_Usua, // Enviar los datos como JSON
        clave_Usua,
      }),
    });

    if (!response.ok) {
      throw new Error('Error de autenticación'); // Manejar el error si el login falla
    }

    const data = await response.json(); // Obtener la respuesta en formato JSON

    // Verificar si hay un usuario y token en la respuesta
    if (data && data.user && data.token) {
      // Guarda el token en localStorage
      localStorage.setItem('token', data.token);

      // Guarda el id_Usuario en localStorage
      localStorage.setItem('id_Usuario', data.user.id);

      // Puedes también almacenar más información del usuario si lo necesitas
      localStorage.setItem('nombre_Usuario', data.user.nombre);  // Ejemplo: guardar el nombre
    }

    return data;
  } catch (error) {
    throw new Error(error.message || 'Error de conexión');
  }
};
