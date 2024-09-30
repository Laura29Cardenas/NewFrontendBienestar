import { ProgramacionCapaTaller } from "../models/programacion_capa_taller.model.js";

class ProgramacionCapaTallerController {

  // Obtener programaciones por ficha
  static async getProgramacionesPorFicha(req, res) {
    try {
      const ficha = parseInt(req.params.ficha, 10);
      const cordinacion = req.params.cordinacion;

      if (!ficha || !cordinacion) {
        return res.status(400).json({ message: 'Parámetros inválidos' });
      }

      // Llama al método del modelo
      const programaciones = await ProgramacionCapaTaller.getProgramacionPorFicha(ficha, cordinacion);

      // Filtrar duplicados basado en 'fecha_procaptall' y 'horaInicio_procaptall'
      const uniqueProgramaciones = programaciones.filter((programacion, index, self) =>
        index === self.findIndex((p) => p.fecha_procaptall === programacion.fecha_procaptall && p.horaInicio_procaptall === programacion.horaInicio_procaptall)
      );

      res.status(200).json(uniqueProgramaciones);
    } catch (error) {
      console.error(`Error al obtener las programaciones por ficha (${req.params.ficha}):`, error);
      res.status(500).json({ message: `Error al obtener las programaciones: ${error.message}` });
    }
  }

  static async getProgramacionesPorSede(req, res) {
    const { sede } = req.params;

    try {
      // Llama al método del modelo que ejecuta el procedimiento almacenado
      let result;
      switch (sede.toLowerCase()) {
        case 'sede 52':
          result = await ProgramacionCapaTaller.getProgramacionesBySede52();
          break;
        case 'sede 64':
          result = await ProgramacionCapaTaller.getProgramacionesBySede64();
          break;
        case 'sede fontibon':
          result = await ProgramacionCapaTaller.getProgramacionesBySedeFontibon();
          break;
        default:
          return res.status(400).json({ message: 'Sede no válida' });
      }

      res.status(200).json(result);
    } catch (error) {
      console.error(`Error al obtener las programaciones por sede (${sede}): `, error);
      res.status(500).json({ message: "Error al obtener las programaciones por sede" });
    }
  }


  // Obtener programaciones por sede 52
  static async getProgramacionesPorSede52(req, res) {
    try {
      const programaciones = await ProgramacionCapaTaller.getProgramacionesBySede52();
      res.status(200).json(programaciones);
    } catch (error) {
      console.error(`Error al obtener las programaciones por sede 52:`, error);
      res.status(500).json({ message: "Error al obtener las programaciones" });
    }
  }

  // Obtener programaciones por sede 64
  static async getProgramacionesPorSede64(req, res) {
    try {
      const programaciones = await ProgramacionCapaTaller.getProgramacionesBySede64();
      res.status(200).json(programaciones);
    } catch (error) {
      console.error(`Error al obtener las programaciones por sede 64:`, error);
      res.status(500).json({ message: "Error al obtener las programaciones" });
    }
  }

  // Obtener programaciones por sede Fontibón
  static async getProgramacionesPorSedeFontibon(req, res) {
    try {
      const programaciones = await ProgramacionCapaTaller.getProgramacionesBySedeFontibon();
      res.status(200).json(programaciones);
    } catch (error) {
      console.error(`Error al obtener las programaciones por sede Fontibón:`, error);
      res.status(500).json({ message: "Error al obtener las programaciones" });
    }
  }

  static async getProgramacionesCT(req, res) {
    try {
      const programacionesCT = await ProgramacionCapaTaller.getProgramacionesCT();
      res.status(200).json(programacionesCT);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener las programaciones" + error });
    }
  }

  static async getProgramacionCT(req, res) {
    try {
      const id_procaptall = req.params.id;
      const programacionCT = await ProgramacionCapaTaller.getProgramacionCT(id_procaptall);
      if (programacionCT) {
        res.status(200).json(programacionCT);
      } else {
        res.status(404).json({ message: "Programacion no encontrada" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error al obtener la programacion" + error });
    }
  }

  static async putProgramacionCT(req, res) {
    try {
      const update_programacionCT = {
        sede_procaptall: req.body.sede_procaptall,
        descripcion_procaptall: req.body.descripcion_procaptall,
        ambiente_procaptall: req.body.ambiente_procaptall,
        fecha_procaptall: req.body.fecha_procaptall,
        horaInicio_procaptall: req.body.horaInicio_procaptall,
        horaFin_procaptall: req.body.horaFin_procaptall,
        id_TallerFK: req.body.id_TallerFK,
        id_CapacFK: req.body.id_CapacFK,
        numero_FichaFK: req.body.numero_FichaFK,
      };
      const id_procaptall = req.params.id;
      await ProgramacionCapaTaller.update_programacionCT(id_procaptall, update_programacionCT);
      res.status(200).json({ message: "Programacion actualizada con éxito" });
    } catch (error) {
      res.status(500).json({ message: "Error al actualizar la programacion" + error });
    }
  }

  static async postProgramacionCT(req, res) {
    try {
      const pct = {
        sede_procaptall: req.body.sede_procaptall,
        descripcion_procaptall: req.body.descripcion_procaptall,
        ambiente_procaptall: req.body.ambiente_procaptall,
        fecha_procaptall: req.body.fecha_procaptall,
        horaInicio_procaptall: req.body.horaInicio_procaptall,
        horaFin_procaptall: req.body.horaFin_procaptall,
        id_TallerFK: req.body.id_TallerFK,
        id_CapacFK: req.body.id_CapacFK,
        numero_FichaFK: req.body.numero_FichaFK,
      };
      await ProgramacionCapaTaller.createProgramacionCT(pct);
      res.status(201).json({ message: "Programación creada con éxito" });
    } catch (error) {
      res.status(500).json({ message: "Error al crear la programación: " + error.message });
    }
  }

  static async deleteProgramacionCT(req, res) {
    try {
      const { id_procaptall } = req.params;
      console.log("id_procaptall:", id_procaptall);
      const result = await ProgramacionCapaTaller.eliminarProgramacionCT(id_procaptall);
      if (result) {
        res.status(200).json({ message: "Programacion eliminada exitosamente" });
      } else {
        res.status(404).json({ message: "Programacion no encontrada" });
      }
    } catch (error) {
      console.error(`Error al eliminar la programacion: ${error.message}`);
      res.status(500).json({ message: "Error al eliminar la programacion" });
    }
  }
}

export default ProgramacionCapaTallerController;