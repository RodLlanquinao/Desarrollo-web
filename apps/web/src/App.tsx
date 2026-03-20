import { FormEvent, useEffect, useState } from "react";

type Tarea = {
  id: number;
  titulo: string;
  done: boolean;
};

function App() {
  const [tareas, setTareas] = useState<Tarea[]>([]);
  const [titulo, setTitulo] = useState("");

  useEffect(() => {
    cargarTareas();
  }, []);

  async function cargarTareas() {
    try {
      const res = await fetch("http://localhost:3000/api/tareas");
      const data = await res.json();
      setTareas(data);
    } catch (error) {
      console.error("Error al cargar tareas:", error);
    }
  }

  async function crearTarea(e: FormEvent) {
    e.preventDefault();

    if (!titulo.trim()) return;

    try {
      const res = await fetch("http://localhost:3000/api/tareas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ titulo }),
      });

      if (!res.ok) {
        throw new Error("No se pudo crear la tarea");
      }

      setTitulo("");
      cargarTareas();
    } catch (error) {
      console.error("Error al crear tarea:", error);
    }
  }

  async function toggleTarea(t: Tarea) {
  try {
    await fetch(`http://localhost:3000/api/tareas/${t.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ done: !t.done }),
    });

      cargarTareas();
    } catch (error) {
      console.error("Error al actualizar tarea:", error);
    }
  }

  async function eliminarTarea(id: number) {
  try {
    await fetch(`http://localhost:3000/api/tareas/${id}`, {
      method: "DELETE",
    });

      cargarTareas();
    } catch (error) {
      console.error("Error al eliminar:", error);
    }
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Desarrollo Web</h1>

      <h2>Crear tarea</h2>
      <form onSubmit={crearTarea}>
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Escribe una tarea"
        />
        <button type="submit" style={{ marginLeft: "0.5rem" }}>
          Crear
        </button>
      </form>

      <h2>Lista de tareas</h2>

      <ul>
        {tareas.map((t) => (
          <li key={t.id}>
            <span
              onClick={() => toggleTarea(t)}
              style={{ cursor: "pointer", marginRight: "10px" }}
            >
              {t.titulo} {t.done ? "✔" : "❌"}
            </span>

            <button onClick={() => eliminarTarea(t.id)}>🗑</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;