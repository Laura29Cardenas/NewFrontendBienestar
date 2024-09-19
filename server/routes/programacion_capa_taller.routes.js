import { Router } from "express";
import ProgramacionCapaTallerController  from "../controllers/programacion_capa_taller.controller.js";


const router = Router();

router.get('/api/programaciones/sede52', ProgramacionCapaTallerController.getProgramacionesPorSede52)
router.get('/api/programaciones/sede64', ProgramacionCapaTallerController.getProgramacionesPorSede64)
router.get('/api/programaciones/sedeFotibon', ProgramacionCapaTallerController.getProgramacionesPorSedeFontibon)
router.get( '/api/programacion',  ProgramacionCapaTallerController.getProgramacionesCT )
router.get( '/api/programacion/:id',  ProgramacionCapaTallerController.getProgramacionCT )
router.get('/api/programaciones/:sede', ProgramacionCapaTallerController.getProgramacionesPorSede)
router.get('/api/programacion/ficha/:ficha/cordinacion/:cordinacion', ProgramacionCapaTallerController.getProgramacionesPorFicha)
router.put( '/api/programacion/:id',  ProgramacionCapaTallerController.putProgramacionCT )
router.post( '/api/programacion',  ProgramacionCapaTallerController.postProgramacionCT )
router.delete( '/api/programacion/:id_procaptall',  ProgramacionCapaTallerController.deleteProgramacionCT )

export default router;