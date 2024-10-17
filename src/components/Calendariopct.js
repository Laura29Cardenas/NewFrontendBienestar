import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Modal, Button, Form } from "react-bootstrap";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  getProgramaciones,
  createProgramacion,
  updateProgramacion,
  deleteProgramacion,
  getTalleres,
  getCapacitadores, 
  getFichas,
} from "../api/api";

const Calendariopct = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [newEvent, setNewEvent] = useState({
    id: null,
    sede: null,
    descripcion: "",
    date: "",
    startTime: "",
    endTime: "",
    taller: null,
    capacitador: null,
    ficha: [],
    allDay: false,
  });
  const [sede] = useState([
    { value: "SEDE 52", label: "SEDE 52" },
    { value: "SEDE 64", label: "SEDE 64" },
    { value: "SEDE FONTIBON", label: "SEDE FONTIBON" },
  ]);
  const [talleres, setTalleres] = useState([]);
  const [capacitadores, setCapacitadores] = useState([]);
  const [fichas, setFichas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [talleresData, capacitadoresData, fichasData] = await Promise.all(
          [getTalleres(), getCapacitadores(), getFichas()]
        );

        setTalleres(
          talleresData.map((taller) => ({
            value: taller.id_Taller,
            label: taller.nombre_Taller,
          }))
        );

        setCapacitadores(
          capacitadoresData.map((capacitador) => ({
            value: capacitador.id_Capac,
            label: `${capacitador.nombre_Capac} ${capacitador.apellidos_Capac}`,
          }))
        );

        setFichas(
          fichasData.map((ficha) => ({
            value: ficha.numero_Ficha,
            label: ficha.numero_Ficha.toString(),
          }))
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      const programaciones = await getProgramaciones();
      setEvents(
        programaciones.map((event) => ({
          id: event.id,
          start: event.start,
          end: event.end,
          extendedProps: {
            sede: event.sede,
            descripcion: event.descripcion,
            taller: event.taller,
            capacitador: event.capacitador,
            ficha: event.ficha,
          },
        }))
      );
    } catch (error) {
      console.error("Error loading events", error);
    }
  };

  const handleDateClick = (info) => {
    setNewEvent({
      id: null,
      sede: null,
      descripcion: "",
      date: info.dateStr,
      startTime: "",
      endTime: "",
      taller: null,
      capacitador: null,
      ficha: [],
      allDay: false,
    });
    setIsEditMode(false);
    setShowModal(true);
  };

  const handleEventClick = (info) => {
    const eventProps = info.event.extendedProps;
    setSelectedEvent(info.event);
    setNewEvent({
      id: info.event.id,
      sede: sede.find((sede) => sede.value === eventProps.sede) || null,
      descripcion: eventProps.descripcion || "",
      date: info.event.startStr.split("T")[0] || "",
      startTime: info.event.startStr.split("T")[1] || "",
      endTime: info.event.endStr ? info.event.endStr.split("T")[1] : "",
      taller:
        talleres.find((taller) => taller.value === eventProps.taller) || null,
      capacitador:
        capacitadores.find(
          (capacitador) => capacitador.value === eventProps.capacitador
        ) || null,
      ficha:
        fichas.filter((ficha) => eventProps.ficha.includes(ficha.value)) || [],
      allDay: info.event.allDay || false,
    });
    setIsEditMode(true);
    setShowModal(true);
  };

  const handleEventSubmit = async () => {
    if (
      !newEvent.date ||
      !newEvent.startTime ||
      !newEvent.taller ||
      !newEvent.capacitador ||
      !newEvent.sede
    ) {
      alert(
        "Por favor complete todos los campos obligatorios: sede, taller, capacitador, fecha y hora de inicio."
      );
      return;
    }

    const start = `${newEvent.date}T${newEvent.startTime}`;
    const end = newEvent.endTime
      ? `${newEvent.date}T${newEvent.endTime}`
      : null;

    const event = {
      id: newEvent.id || null,
      start,
      end,
      extendedProps: {
        sede: newEvent.sede ? newEvent.sede.value : "",
        descripcion: newEvent.descripcion || "",
        taller: newEvent.taller ? newEvent.taller.value : "",
        capacitador: newEvent.capacitador ? newEvent.capacitador.value : "",
        ficha: newEvent.ficha ? newEvent.ficha.map((f) => f.value) : [],
      },
    };

    try {
      if (isEditMode) {
        await updateProgramacion(selectedEvent.id, event);
        setEvents(events.map((e) => (e.id === selectedEvent.id ? event : e)));
      } else {
        const newEventResponse = await createProgramacion(event);
        setEvents([...events, { ...event, id: newEventResponse.id }]);
      }

      setShowModal(false);
    } catch (error) {
      console.error("Error saving event", error);
      alert(
        "Error al crear o actualizar la programación. Verifica los campos y vuelve a intentarlo."
      );
    }
  };

  const handleDeleteEvent = async () => {
    if (selectedEvent) {
      try {
        await deleteProgramacion(selectedEvent.id);
        setEvents(events.filter((event) => event.id !== selectedEvent.id));
        setShowModal(false);
      } catch (error) {
        console.error("Error deleting event", error);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleSelectChange = (selectedOption, actionMeta) => {
    setNewEvent({ ...newEvent, [actionMeta.name]: selectedOption });
  };

  return (
    <>
      <div className="calendar-container-ptc">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          locale="es"
          events={events}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
          editable={true}
        />
      </div>

      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        className="modal-dialog-ptc"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {isEditMode ? "Editar Programación" : "Agregar Programación"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-content-ptc">
          <Form>{/* ... tus campos del formulario ... */}</Form>
        </Modal.Body>
        <Modal.Footer className="modal-footer-ptc">
          {isEditMode && (
            <Button variant="danger" onClick={handleDeleteEvent}>
              Eliminar
            </Button>
          )}
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button className="btn-volver-ptc" >
            Volver
          </Button>
          <Button variant="primary" onClick={handleEventSubmit}>
            {isEditMode ? "Guardar Cambios" : "Agregar"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Calendariopct;
