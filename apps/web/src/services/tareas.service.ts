const API_URL = import.meta.env.VITE_API_URL;

export const getTareas = async () => {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error("Error al obtener tareas");
  }

  return res.json();
};

export const createTarea = async (titulo: string) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ titulo }),
  });

  if (!res.ok) {
    throw new Error("Error al crear tarea");
  }

  return res.json();
};

export const updateTarea = async (
  id: number,
  data: { titulo?: string; done?: boolean }
) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Error al actualizar tarea");
  }

  return res.json();
};

export const deleteTarea = async (id: number) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Error al eliminar tarea");
  }
};