import { Request, Response } from "express";
import { prisma } from "../lib/prisma";
import {
  idParamSchema,
  crearTareaSchema,
  actualizarTareaSchema,
} from "../lib/validators";

export async function listarTareas(_req: Request, res: Response) {
  const tareas = await prisma.tarea.findMany({ orderBy: { id: "asc" } });
  res.json(tareas);
}

export async function obtenerTareaPorId(req: Request, res: Response) {
  const { id } = idParamSchema.parse(req.params);

  const tarea = await prisma.tarea.findUnique({
    where: { id },
  });

  if (!tarea) return res.status(404).json({ message: "No encontrada" });

  res.json(tarea);
}

export async function crearTarea(req: Request, res: Response) {
  const { titulo } = crearTareaSchema.parse(req.body);

  const nueva = await prisma.tarea.create({
    data: { titulo, done: false },
  });

  res.status(201).json(nueva);
}

export async function actualizarTarea(req: Request, res: Response) {
  const { id } = idParamSchema.parse(req.params);
  const body = actualizarTareaSchema.parse(req.body);

  const data: { titulo?: string; done?: boolean } = {};
  if (body.titulo !== undefined) data.titulo = body.titulo;
  if (body.done !== undefined) data.done = body.done;

  try {
    const actualizada = await prisma.tarea.update({
      where: { id },
      data,
    });

    res.json(actualizada);
  } catch {
    return res.status(404).json({ message: "No encontrada" });
  }
}

export async function eliminarTarea(req: Request, res: Response) {
  const { id } = idParamSchema.parse(req.params);

  try {
    await prisma.tarea.delete({ where: { id } });
    res.status(204).send();
  } catch {
    return res.status(404).json({ message: "No encontrada" });
  }
}