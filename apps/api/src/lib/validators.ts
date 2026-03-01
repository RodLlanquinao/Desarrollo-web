import { z } from 'zod';

export const idParamSchema = z.object({
  id: z.coerce.number().int().positive(),
});

export const crearTareaSchema = z.object({
  titulo: z.string().min(1).max(200),
});

export const actualizarTareaSchema = z.object({
  titulo: z.string().min(1).max(200).optional(),
  done: z.boolean().optional(),
}).refine((data) => Object.keys(data).length > 0, {
  message: 'Debes enviar al menos un campo para actualizar',
});