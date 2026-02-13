import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';

export async function listarTareas(_req: Request, res: Response) {
  const tareas = await prisma.tarea.findMany({ orderBy: { id: 'asc' } });
  res.json(tareas);
}

export async function obtenerTareaPorId(req: Request, res: Response) {
  const tareaId = Number(req.params.id);

  const tarea = await prisma.tarea.findUnique({
    where: { id: tareaId },
  });

  if (!tarea) return res.status(404).json({ message: 'No encontrada' });

  res.json(tarea);
}


export async function crearTarea(req: Request, res: Response) {
  const titulo = req.body.titulo ?? '';

  const nueva = await prisma.tarea.create({
    data: { titulo, done: false },
  });

  res.status(201).json(nueva);
}

export async function actualizarTarea(req: Request, res: Response) {
  const tareaId = Number(req.params.id);

  try {
    const actualizada = await prisma.tarea.update({
      where: { id: tareaId },
      data: {
        titulo: req.body.titulo,
        done: req.body.done,
      },
    });

    res.json(actualizada);
  } catch {
    return res.status(404).json({ message: 'No encontrada' });
  }
}

export async function eliminarTarea(req: Request, res: Response) {
  const tareaId = Number(req.params.id);

  try {
    await prisma.tarea.delete({ where: { id: tareaId } });
    res.status(204).send();
  } catch {
    return res.status(404).json({ message: 'No encontrada' });
  }
}
