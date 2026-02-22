import { Router } from "express";
import {
  listarTareas,
  obtenerTareaPorId,
  crearTarea,
  actualizarTarea,
  eliminarTarea,
} from "../controllers/tareas.controller";

const router = Router();

router.get("/tareas", listarTareas);
router.get("/tareas/:id", obtenerTareaPorId);
router.post("/tareas", crearTarea);
router.patch("/tareas/:id", actualizarTarea);
router.delete("/tareas/:id", eliminarTarea);

export default router;
