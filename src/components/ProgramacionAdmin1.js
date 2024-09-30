import React, { useState } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import Insertar from '../static/img/enlaceInsertar.png'; 
import { createFicha } from  '../api/api';
import { createTaller } from '../api/api'; // Ajusta la ruta según tu estructura de carpetas

import { 
    updateFicha, 
    deleteFicha, 
    postTaller, 
    consultarTallerPorNombre, 
    updateTaller,  // Asegúrate de agregar esta línea
    deleteTaller    // Y también esta
} from '../api/api';

const ProgramacionAdmin1 = () => {
    const [coordinacion, setCoordinacion] = useState('');
    const [ficha, setFicha] = useState('');
    const [showInfo, setShowInfo] = useState(false);

    const handleGuardar = () => {
        Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: 'El horario se ha guardado correctamente.',
            confirmButtonText: 'Aceptar'
        });
    };

    const handleEliminar = () => {
        Swal.fire({
            icon: 'success',
            title: '¡Éxito!',
            text: 'El horario se ha eliminado correctamente.',
            confirmButtonText: 'Aceptar'
        });
    };

    const handleBuscar = () => {
        if (coordinacion && ficha) {
            setShowInfo(true);
        } else {
            setShowInfo(false);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor, completa ambos campos antes de buscar.',
            });
        }
    };

    const toggleDropdown = (e) => {
        const dropdown = e.currentTarget.nextElementSibling;
        const arrow = e.currentTarget.querySelector('.arrow');
        const isVisible = dropdown.style.display === 'block';

        document.querySelectorAll('.dropdown-content').forEach(content => content.style.display = 'none');
        document.querySelectorAll('.arrow').forEach(a => a.classList.remove('down'));

        if (!isVisible) {
            dropdown.style.display = 'block';
            arrow.classList.add('down');
        }
    };

    const handleAddFicha = () => {
        Swal.fire({
            title: 'Agregar Ficha',
            html: `
                <div style="display: flex; flex-direction: column;">
                    <label>Coordinación</label>
                    <input type="text" id="coordinacionAdd" class="swal2-input" placeholder="Ingrese la coordinación">
                    <label>Ficha</label>
                    <input type="text" id="fichaAdd" class="swal2-input" placeholder="Ingrese el número de ficha">
                </div>
                <div style="margin-top: 20px; text-align: center;">
                    <button id="guardarFichaBtn" class="swal2-confirm swal2-styled">Guardar</button>
                    <button id="cancelarFichaBtn" class="swal2-cancel swal2-styled" style="margin-left: 10px;">Cancelar</button>
                </div>
            `,
            showConfirmButton: false,
            didOpen: () => {
                document.getElementById('guardarFichaBtn').addEventListener('click', async () => {
                    const coordinacion = document.getElementById('coordinacionAdd').value;
                    const numeroFicha = document.getElementById('fichaAdd').value;
    
                    if (!coordinacion || !numeroFicha) {
                        Swal.fire('Error', 'Por favor complete todos los campos.', 'error');
                        return;
                    }
    
                    try {
                        const result = await createFicha(numeroFicha, coordinacion);
                        Swal.fire('Guardado', result.message, 'success');
                    } catch (error) {
                        Swal.fire('Error', error.message, 'error');
                    }
                });
    
                document.getElementById('cancelarFichaBtn').addEventListener('click', () => {
                    Swal.close(); // Close the current modal
                });
            }
        });
    };

    const handleConsultFicha = () => {
        Swal.fire({
            title: 'Consultar Ficha',
            html: `
                <div style="display: flex; flex-direction: column;">
                    <label>Coordinación</label>
                    <input type="text" id="coordinacionConsult" class="swal2-input" placeholder="Ingrese la coordinación">
                    <label>Ficha</label>
                    <input type="text" id="fichaConsult" class="swal2-input" placeholder="Ingrese el número de ficha">
                </div>
                <div style="margin-top: 20px; text-align: center;">
                    <button id="actualizarBtn" class="swal2-confirm swal2-styled">Actualizar</button>
                    <button id="eliminarBtn" class="swal2-confirm swal2-styled" style="margin-left: 10px;">Eliminar</button>
                </div>
            `,
            showConfirmButton: false,
            didOpen: () => {
                document.getElementById('actualizarBtn').addEventListener('click', async () => {
                    const coordinacion = document.getElementById('coordinacionConsult').value;
                    const numeroFicha = document.getElementById('fichaConsult').value;
    
                    if (!coordinacion || !numeroFicha) {
                        Swal.fire('Error', 'Por favor complete todos los campos.', 'error');
                        return;
                    }
    
                    try {
                        // Llama a la API para obtener la ficha
                        const response = await fetch(`http://localhost:7777/api/ficha/${numeroFicha}`);
                        const ficha = await response.json();
    
                        if (response.ok) {
                            // Mostrar datos en la ventana de actualización
                            Swal.fire({
                                title: 'Actualizar Ficha',
                                html: `
                                    <div style="display: flex; flex-direction: column;">
                                        <label>Coordinación</label>
                                        <input type="text" id="coordinacionUpdate" class="swal2-input" value="${ficha.cordinacion_Ficha}" placeholder="Ingrese la coordinación">
                                        <label>Ficha</label>
                                        <input type="text" id="fichaNumeroUpdate" class="swal2-input" value="${ficha.numero_Ficha}" placeholder="Ingrese el número de ficha" readonly>
                                    </div>
                                    <div style="margin-top: 20px; text-align: center;">
                                        <button id="guardarUpdateBtn" class="swal2-confirm swal2-styled">Guardar</button>
                                        <button id="cancelarUpdateBtn" class="swal2-cancel swal2-styled" style="margin-left: 10px;">Cancelar</button>
                                    </div>
                                `,
                                showConfirmButton: false,
                                didOpen: () => {
                                    document.getElementById('guardarUpdateBtn').addEventListener('click', async () => {
                                        const updatedCoordinacion = document.getElementById('coordinacionUpdate').value;
    
                                        try {
                                            // Llama a la API para actualizar la ficha
                                            await updateFicha(numeroFicha, { cordinacion_Ficha: updatedCoordinacion });
                                            Swal.fire('Guardado', 'Se ha guardado exitosamente', 'success');
                                        } catch (error) {
                                            Swal.fire('Error', error.message, 'error');
                                        }
                                    });
    
                                    document.getElementById('cancelarUpdateBtn').addEventListener('click', () => {
                                        Swal.close();
                                    });
                                }
                            });
                        } else {
                            Swal.fire('Error', ficha.message, 'error');
                        }
                    } catch (error) {
                        Swal.fire('Error', 'Error de conexión al servidor', 'error');
                    }
                });
    
                document.getElementById('eliminarBtn').addEventListener('click', () => {
                    const numeroFicha = document.getElementById('fichaConsult').value;
    
                    Swal.fire({
                        title: 'Eliminar Ficha',
                        text: '¿Estás seguro de que deseas eliminar esta ficha?',
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonText: 'Eliminar',
                        cancelButtonText: 'Cancelar'
                    }).then(async (result) => {
                        if (result.isConfirmed) {
                            try {
                                // Llama a la API para eliminar la ficha
                                await deleteFicha(numeroFicha);
                                Swal.fire('Eliminado', 'La ficha ha sido eliminada', 'success');
                            } catch (error) {
                                Swal.fire('Error', error.message, 'error');
                            }
                        }
                    });
                });
            }
        });
    };

    const handleAddTaller = () => {
        Swal.fire({
            title: 'Agregar Taller',
            html: `
                <div style="display: flex; flex-direction: column;">
                    <label>Tipo de Taller</label>
                    <input type="text" id="tipoTaller" class="swal2-input" placeholder="Ingrese el tipo de taller">
                    <label>Nombre del Taller</label>
                    <input type="text" id="nombreTaller" class="swal2-input" placeholder="Ingrese el nombre del taller">
                </div>
                <div style="margin-top: 20px; text-align: center;">
                    <button id="guardarTallerBtn" class="swal2-confirm swal2-styled">Guardar</button>
                    <button id="cancelarTallerBtn" class="swal2-cancel swal2-styled" style="margin-left: 10px;">Cancelar</button>
                </div>
            `,
            showConfirmButton: false,
            didOpen: () => {
                document.getElementById('guardarTallerBtn').addEventListener('click', async () => {
                    const tipoTaller = document.getElementById('tipoTaller').value;
                    const nombreTaller = document.getElementById('nombreTaller').value;
    
                    if (!tipoTaller || !nombreTaller) {
                        Swal.fire('Error', 'Por favor complete todos los campos.', 'error');
                        return;
                    }
    
                    try {
                        const response = await fetch('http://localhost:7777/api/taller', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ tipo_Taller: tipoTaller, nombre_Taller: nombreTaller }),
                        });
                        const result = await response.json();
                        Swal.fire('Guardado', result.message, 'success');
                        Swal.close();
                    } catch (error) {
                        Swal.fire('Error', error.message, 'error');
                    }
                });
    
                document.getElementById('cancelarTallerBtn').addEventListener('click', () => {
                    Swal.close();
                });
            }
        });
    };
    
    const handleConsultTaller = () => {
        Swal.fire({
            title: 'Consultar Taller',
            html: `
                <div style="display: flex; flex-direction: column;">
                    <label>Tipo del Taller</label>
                    <input type="text" id="tipoTallerConsult" class="swal2-input" placeholder="Ingrese el Tipo del taller">
                    <label>Nombre del Taller</label>
                    <input type="text" id="nombreTallerConsult" class="swal2-input" placeholder="Ingrese el nombre del taller">
                </div>
                <div style="margin-top: 20px; text-align: center;">
                    <button id="consultarTallerBtn" class="swal2-confirm swal2-styled">Consultar</button>
                    <button id="eliminarBtn" class="swal2-confirm swal2-styled" style="margin-left: 10px;">Eliminar</button>
                    <button id="cancelarBtn" class="swal2-cancel swal2-styled" style="margin-left: 10px;">Cancelar</button>
                </div>
            `,
            showConfirmButton: false,
            didOpen: () => {
                document.getElementById('consultarTallerBtn').addEventListener('click', async () => {
                    const tipoTaller = document.getElementById('tipoTallerConsult').value;
                    const nombreTaller = document.getElementById('nombreTallerConsult').value;
    
                    if (!tipoTaller || !nombreTaller) {
                        Swal.fire('Error', 'Por favor complete todos los campos.', 'error');
                        return;
                    }
    
                    try {
                        const response = await fetch(`http://localhost:7777/api/taller/${nombreTaller}`, { method: 'GET'});
                        const taller = await response.json();
    
                        if (response.ok) {
                            Swal.fire('Taller Encontrado', `Tipo: ${taller.tipo_Taller}, Nombre: ${taller.nombre_Taller}`, 'info');
                        } else {
                            Swal.fire('Error', 'No existe taller con esa información', 'error');
                        }
                    } catch (error) {
                        Swal.fire('Error', error.message, 'error');
                    }
                });
    
                document.getElementById('eliminarBtn').addEventListener('click', async () => {
                    const nombreTaller = document.getElementById('nombreTallerConsult').value;
    
                    if (!nombreTaller) {
                        Swal.fire('Error', 'Por favor, ingrese el nombre del taller.', 'error');
                        return;
                    }
    
                    try {
                        const response = await fetch(`http://localhost:7777/api/taller/${nombreTaller}`, { method: 'DELETE' });
                        const result = await response.json();
    
                        if (response.ok) {
                            Swal.fire('Eliminado', result.message, 'success');
                        } else {
                            Swal.fire('Error', 'No se pudo eliminar el taller', 'error');
                        }
                    } catch (error) {
                        Swal.fire('Error', error.message, 'error');
                    }
                });
    
                document.getElementById('cancelarBtn').addEventListener('click', () => {
                    Swal.close();
                });
            }
        });
    };    
    

    return (
        <div className="contenedor-principal">
            <div className="cuadros-insertar">
                <div className="cuadro-programacion" onClick={() => document.getElementById('file-upload1').click()}>
                    <label className="cuadro-label" htmlFor="file-upload1">
                        <img className="icono-cuadro" src={Insertar} alt="insertar" />
                        <p className="text-programacion-agregar">Agregar horario</p>
                    </label>
                    <input type="file" id="file-upload1" style={{ display: 'none' }} />
                </div>
                <div className="dropdown-container">
                    <div className="dropdown" onClick={toggleDropdown}>
                        <span>Ficha</span>
                        <span className="arrow">&#9660;</span>
                    </div>
                    <div className="dropdown-content">
                        <button onClick={handleAddFicha}>Agregar Ficha</button>
                        <button onClick={handleConsultFicha}>Consultar Ficha</button>
                    </div>
                </div>
                <div className="dropdown-container">
                    <div className="dropdown" onClick={toggleDropdown}>
                        <span>Taller</span>
                        <span className="arrow">&#9660;</span>
                    </div>
                    <div className="dropdown-content">
                        <button onClick={handleAddTaller}>Agregar Taller</button>
                        <button onClick={handleConsultTaller}>Consultar Taller</button>
                    </div>
                </div>
            </div>
            <div className="container-form-programacion">
                <h2 className="titulo-programacion">Consulta el horario</h2>
                <div className="buscador-programacion">
                    <form>
                        <div className="form-busqueda-programacion">
                            <div className="campo-programacion">
                                <label className="label-form-programacion" htmlFor="coordinacionBusqueda">Coordinación:</label>
                                <select
                                    className="select-form-programacion"
                                    id="coordinacionBusqueda"
                                    name="coordinacionBusqueda"
                                    value={coordinacion}
                                    onChange={(e) => setCoordinacion(e.target.value)}
                                >
                                    <option value="">Seleccione la coordinación</option>
                                    <option value="teleinformatica">Teleinformática</option>
                                    <option value="mercadeo">Mercadeo</option>
                                    <option value="logistica">Logística</option>
                                </select>
                            </div>
                            <div className="campo-programacion">
                                <label className="label-form-programacion" htmlFor="fichaBusqueda">Ficha:</label>
                                <input
                                    className="input-form-programacion-ficha"
                                    type="text"
                                    id="fichaBusqueda"
                                    name="fichaBusqueda"
                                    placeholder="Ingrese el número de ficha"
                                    value={ficha}
                                    onChange={(e) => setFicha(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="campo-programacion">
                                <button type="button" id="buscarButton" className="buscar-programacion" onClick={handleBuscar}>
                                    Buscar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {showInfo && (
                <div id="infoDisplay" className="info-display">
                    <div className="info-item">
                        <label>Coordinación:</label> <input type='text' className="espaciado" id="infoCoordinacion"/>
                    </div>
                    <div className="info-item">
                        <label>Ficha:</label> <input className="espaciado" id="infoFicha"/>
                    </div>
                    <div className="info-box">
                        {/* Space for further content */}
                    </div>
                    <div className="info-buttons">
                        <button className="buton-horario-guardar" id="guardarButton" onClick={handleGuardar}>
                            Guardar
                        </button>
                    </div>
                    <div className="info-buttons">
                        <button className="buton-horario-eliminar" id="eliminarButton" onClick={handleEliminar}>
                            Eliminar
                        </button>
                    </div>
                    <div className='info-buttons-agregarProgramacion'>
                        <button className="agregarProgramacion" id="agregarProgramacion" >
                            Agregar programación
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProgramacionAdmin1;