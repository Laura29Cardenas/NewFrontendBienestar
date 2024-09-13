import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

function Calendariomain() {
  const [calendarHtml, setCalendarHtml] = useState('');
  const [calendarVisible, setCalendarVisible] = useState(false);

  // Función para generar el calendario del mes
  const generateCalendar = (year, month, events) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    let calendarHtml = '<div class="calendar-grid">';

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      const dateStr = date.toISOString().split('T')[0];
      const hasEvent = events.includes(dateStr);
      calendarHtml += `
        <div class="calendar-day ${hasEvent ? 'event' : ''}" data-date="${dateStr}">
          ${i}
        </div>
      `;
    }

    calendarHtml += '</div>';
    return calendarHtml;
  };

  // Función para manejar el envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();

    const ficha = event.target.ficha.value;
    const coordinacion = event.target.coordinacion.value;

    // Lógica para obtener eventos de la ficha y coordinación seleccionada (ejemplo estático)
    const events = {
      '2024-08-05': 'Taller de Programación',
      '2024-08-06': 'Taller de Diseño',
      '2024-08-07': 'Taller de Marketing',
      '2024-08-08': 'Taller de Ventas',
      '2024-08-09': 'Taller de Finanzas',
    };

    // Filtrar eventos para el mes actual
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    // Obtener solo las fechas de eventos en el mes actual
    const eventsInMonth = Object.keys(events).filter((dateStr) => {
      const date = new Date(dateStr);
      return (
        date.getMonth() === currentMonth && date.getFullYear() === currentYear
      );
    });

    setCalendarHtml(generateCalendar(currentYear, currentMonth, eventsInMonth));
    setCalendarVisible(true);
  };

  // Función para manejar clic en los días del calendario
  const handleDayClick = (event) => {
    const dateStr = event.target.dataset.date;

    if (dateStr) {
      const events = {
        '2024-08-05': 'Taller de Programación',
        '2024-08-06': 'Taller de Diseño',
        '2024-08-07': 'Taller de Marketing',
        '2024-08-08': 'Taller de Ventas',
        '2024-08-09': 'Taller de Finanzas',
      };

      const schedule = events[dateStr];

      if (schedule) {
        Swal.fire({
          title: `Programación para ${dateStr}`,
          text: schedule,
          confirmButtonText: 'Cerrar',
        });
      } else {
        Swal.fire({
          title: 'Sin Programación',
          text: 'No hay eventos programados para este día.',
          icon: 'info',
          confirmButtonText: 'Cerrar',
        });
      }
    }
  };

  // Ejecutar el manejador de clics cuando el calendario se vuelve visible
  useEffect(() => {
    if (calendarVisible) {
      // Agregar manejador de clics a los días del calendario
      const calendarContainer = document.getElementById('calendar-container');
      if (calendarContainer) {
        calendarContainer.addEventListener('click', handleDayClick);
      }

      // Limpia el manejador de clics cuando el componente se desmonte o se oculten los días del calendario
      return () => {
        if (calendarContainer) {
          calendarContainer.removeEventListener('click', handleDayClick);
        }
      };
    }
  }, [calendarVisible]);

  return (
    <main>
      <div className="form-container-calendariousua">
        <h2 className="Titulo-calendariousua">Seleccione Ficha y Coordinación</h2>
        <form id="selection-form" onSubmit={handleSubmit}>
          <label className="label-ficha-calendariousua" htmlFor="ficha">Ficha:</label>
          <input className="input-calendariousua" type="text" id="ficha" name="ficha" required />
          <label className="label-ficha-calendariousua" htmlFor="coordinacion">Coordinación:</label>
          <input className="input-calendariousua" type="text" id="coordinacion" name="coordinacion" required />
          <button className="boton-calendarioUsuario" type="submit">Mostrar Calendario</button>
        </form>
      </div>
      <div
        className="calendar-container"
        id="calendar-container"
        dangerouslySetInnerHTML={{ __html: calendarHtml }}
        style={{ display: calendarVisible ? 'block' : 'none' }}
      />
    </main>
  );
}

export default Calendariomain;
